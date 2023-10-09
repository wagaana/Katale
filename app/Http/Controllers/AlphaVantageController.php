<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AlphaVantageController extends Controller
{
    public static function getCryptoExchangeRates($wallet)
    {
        $loadStebleCurency = PaymentMethodsController::loadStebleCurency();
        $to_currency = $loadStebleCurency['data']->currency;

        $get_crypto_asset_info = BlockIOController::get_crypto_asset_info($wallet);
        $from_currency = $get_crypto_asset_info['data']->currencyCode;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => env('ALPHA_API_URL') . 'query?function=CURRENCY_EXCHANGE_RATE&from_currency=' . $from_currency . '&to_currency=' . $to_currency . '&apikey=' . env('ALPHA_VANTAGE_API_KEY'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $result = curl_exec($curl);

        curl_close($curl);
        $response = json_decode($result, true);
        $exchangeRateData = $response["Realtime Currency Exchange Rate"];

        DB::table('crypto_wallets')
            ->where(['code' => $wallet])
            ->update([
                'exchangeRate' => $exchangeRateData["5. Exchange Rate"],
            ]);

        return array(
            "fromCurrencyCode" => $exchangeRateData["1. From_Currency Code"],
            "fromCurrencyName" => $exchangeRateData["2. From_Currency Name"],
            "toCurrencyCode" => $exchangeRateData["3. To_Currency Code"],
            "toCurrencyName" => $exchangeRateData["4. To_Currency Name"],
            "exchangeRate" => $exchangeRateData["5. Exchange Rate"],
            "lastRefreshed" => $exchangeRateData["6. Last Refreshed"],
            "timeZone" => $exchangeRateData["7. Time Zone"],
            "bidPrice" => $exchangeRateData["8. Bid Price"],
            "askPrice" => $exchangeRateData["9. Ask Price"]
        );
    }

    public function getCryptoIntradayStockHistoryData($wallet)
    {
        $loadStebleCurency = PaymentMethodsController::loadStebleCurency();
        $to_currency = $loadStebleCurency['data']->currency;

        $get_crypto_asset_info = BlockIOController::get_crypto_asset_info($wallet);
        $from_currency = $get_crypto_asset_info['data']->currencyCode;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => env('ALPHA_API_URL') . 'query?function=CRYPTO_INTRADAY&symbol=' . $from_currency . '&market=' . $to_currency . '&interval=5min&apikey=' . env('ALPHA_VANTAGE_API_KEY'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $result = curl_exec($curl);

        curl_close($curl);
        $response = json_decode($result, true);
        $metaData = array(
            "information" => $response["Meta Data"]["1. Information"],
            "digitalCurrencyCode" => $response["Meta Data"]["2. Digital Currency Code"],
            "digitalCurrencyName" => $response["Meta Data"]["3. Digital Currency Name"],
            "marketCode" => $response["Meta Data"]["4. Market Code"],
            "marketName" => $response["Meta Data"]["5. Market Name"],
            "lastRefreshed" => $response["Meta Data"]["6. Last Refreshed"],
            "interval" => $response["Meta Data"]["7. Interval"],
            "outputSize" => $response["Meta Data"]["8. Output Size"],
            "timeZone" => $response["Meta Data"]["9. Time Zone"]
        );

        $timeSeriesCrypto = $response["Time Series Crypto (5min)"];

        $timeSeriesCryptoData = [];
        foreach ($timeSeriesCrypto as $key => $timeSeryCryptoData) {
            // $data_array = array(
            //     'open' => $timeSeryCryptoData["1. open"],
            //     'high' => $timeSeryCryptoData["2. high"],
            //     'low' => $timeSeryCryptoData["3. low"],
            //     'close' => $timeSeryCryptoData["4. close"],
            //     'volume' => $timeSeryCryptoData["5. volume"],
            //     'mTime' => $key
            // );

            array_push($timeSeriesCryptoData, (object)[
                'open' => $timeSeryCryptoData["1. open"],
                'high' => $timeSeryCryptoData["2. high"],
                'low' => $timeSeryCryptoData["3. low"],
                'close' => $timeSeryCryptoData["4. close"],
                'volume' => $timeSeryCryptoData["5. volume"],
                'mTime' => $key
            ]);
            
            // $timeSeriesCryptoData[$data_array["mTime"]] = $data_array;
        }

        return array(
            "metaData" => $metaData,
            "timeSeriesCryptoData" => $timeSeriesCryptoData,
            "status"=>200
        );
    }

    public function getCryptoDailyStockHistoryData($wallet)
    {
        $loadStebleCurency = PaymentMethodsController::loadStebleCurency();
        $to_currency = $loadStebleCurency['data']->currency;

        $get_crypto_asset_info = BlockIOController::get_crypto_asset_info($wallet);
        $from_currency = $get_crypto_asset_info['data']->currencyCode;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => env('ALPHA_API_URL') . 'query?function=DIGITAL_CURRENCY_DAILY&symbol=' . $from_currency . '&market=' . $to_currency . '&apikey=' . env('ALPHA_VANTAGE_API_KEY'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $result = curl_exec($curl);

        curl_close($curl);
        $response = json_decode($result, true);

        $metaData = array(
            "information" => $response["Meta Data"]["1. Information"],
            "digitalCurrencyCode" => $response["Meta Data"]["2. Digital Currency Code"],
            "digitalCurrencyName" => $response["Meta Data"]["3. Digital Currency Name"],
            "marketCode" => $response["Meta Data"]["4. Market Code"],
            "marketName" => $response["Meta Data"]["5. Market Name"],
            "lastRefreshed" => $response["Meta Data"]["6. Last Refreshed"],
            "timeZone" => $response["Meta Data"]["7. Time Zone"]
        );

        $timeSeriesCrypto = $response["Time Series (Digital Currency Daily)"];

        $timeSeriesCryptoData = array();
        foreach ($timeSeriesCrypto as $key => $timeSeryCryptoData) {
            $data_array = array(
                'open' => $timeSeryCryptoData["1a. open (" . $to_currency . ")"],
                'usdCurrencyOpen' => $timeSeryCryptoData["1b. open (USD)"],
                'high' => $timeSeryCryptoData["2a. high (" . $to_currency . ")"],
                'usdCurrencyHigh' => $timeSeryCryptoData["2b. high (USD)"],
                'low' => $timeSeryCryptoData["3a. low (" . $to_currency . ")"],
                'usdCurrencyLow' => $timeSeryCryptoData["3b. low (USD)"],
                'close' => $timeSeryCryptoData["4a. close (" . $to_currency . ")"],
                'usdCurrencyClose' => $timeSeryCryptoData["4b. close (USD)"],
                'volume' => $timeSeryCryptoData["5. volume"],
                'usdCurrencyMarketcap' => $timeSeryCryptoData["6. market cap (USD)"],
                'mTime' => $key . " 00:00:00"
            );
            $timeSeriesCryptoData[$data_array["mTime"]] = $data_array;
        }

        return array(
            "metaData" => $metaData,
            "timeSeriesCryptoData" => $timeSeriesCryptoData,
        );
    }

    public function getCryptoWeeklyStockHistoryData($wallet)
    {
        $loadStebleCurency = PaymentMethodsController::loadStebleCurency();
        $to_currency = $loadStebleCurency['data']->currency;

        $get_crypto_asset_info = BlockIOController::get_crypto_asset_info($wallet);
        $from_currency = $get_crypto_asset_info['data']->currencyCode;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => env('ALPHA_API_URL') . 'query?function=DIGITAL_CURRENCY_WEEKLY&symbol=' . $from_currency . '&market=' . $to_currency . '&apikey=' . env('ALPHA_VANTAGE_API_KEY'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $result = curl_exec($curl);

        curl_close($curl);
        $response = json_decode($result, true);

        $metaData = array(
            "information" => $response["Meta Data"]["1. Information"],
            "digitalCurrencyCode" => $response["Meta Data"]["2. Digital Currency Code"],
            "digitalCurrencyName" => $response["Meta Data"]["3. Digital Currency Name"],
            "marketCode" => $response["Meta Data"]["4. Market Code"],
            "marketName" => $response["Meta Data"]["5. Market Name"],
            "lastRefreshed" => $response["Meta Data"]["6. Last Refreshed"],
            "timeZone" => $response["Meta Data"]["7. Time Zone"]
        );

        $timeSeriesCrypto = $response["Time Series (Digital Currency Weekly)"];

        $timeSeriesCryptoData = array();
        foreach ($timeSeriesCrypto as $key => $timeSeryCryptoData) {
            $data_array = array(
                'open' => $timeSeryCryptoData["1a. open (" . $to_currency . ")"],
                'usdCurrencyOpen' => $timeSeryCryptoData["1b. open (USD)"],
                'high' => $timeSeryCryptoData["2a. high (" . $to_currency . ")"],
                'usdCurrencyHigh' => $timeSeryCryptoData["2b. high (USD)"],
                'low' => $timeSeryCryptoData["3a. low (" . $to_currency . ")"],
                'usdCurrencyLow' => $timeSeryCryptoData["3b. low (USD)"],
                'close' => $timeSeryCryptoData["4a. close (" . $to_currency . ")"],
                'usdCurrencyClose' => $timeSeryCryptoData["4b. close (USD)"],
                'volume' => $timeSeryCryptoData["5. volume"],
                'usdCurrencyMarketcap' => $timeSeryCryptoData["6. market cap (USD)"],
                'mTime' => $key . " 00:00:00"
            );
            $timeSeriesCryptoData[$data_array["mTime"]] = $data_array;
        }

        return array(
            "metaData" => $metaData,
            "timeSeriesCryptoData" => $timeSeriesCryptoData,
        );
    }

    public function getCryptoMothlyStockHistoryData($wallet)
    {
        $loadStebleCurency = PaymentMethodsController::loadStebleCurency();
        $to_currency = $loadStebleCurency['data']->currency;

        $get_crypto_asset_info = BlockIOController::get_crypto_asset_info($wallet);
        $from_currency = $get_crypto_asset_info['data']->currencyCode;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => env('ALPHA_API_URL') . 'query?function=DIGITAL_CURRENCY_MONTHLY&symbol=' . $from_currency . '&market=' . $to_currency . '&apikey=' . env('ALPHA_VANTAGE_API_KEY'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $result = curl_exec($curl);

        curl_close($curl);
        $response = json_decode($result, true);

        $metaData = array(
            "information" => $response["Meta Data"]["1. Information"],
            "digitalCurrencyCode" => $response["Meta Data"]["2. Digital Currency Code"],
            "digitalCurrencyName" => $response["Meta Data"]["3. Digital Currency Name"],
            "marketCode" => $response["Meta Data"]["4. Market Code"],
            "marketName" => $response["Meta Data"]["5. Market Name"],
            "lastRefreshed" => $response["Meta Data"]["6. Last Refreshed"],
            "timeZone" => $response["Meta Data"]["7. Time Zone"]
        );

        $timeSeriesCrypto = $response["Time Series (Digital Currency Monthly)"];

        $timeSeriesCryptoData = array();
        foreach ($timeSeriesCrypto as $key => $timeSeryCryptoData) {
            $data_array = array(
                'open' => $timeSeryCryptoData["1a. open (" . $to_currency . ")"],
                'usdCurrencyOpen' => $timeSeryCryptoData["1b. open (USD)"],
                'high' => $timeSeryCryptoData["2a. high (" . $to_currency . ")"],
                'usdCurrencyHigh' => $timeSeryCryptoData["2b. high (USD)"],
                'low' => $timeSeryCryptoData["3a. low (" . $to_currency . ")"],
                'usdCurrencyLow' => $timeSeryCryptoData["3b. low (USD)"],
                'close' => $timeSeryCryptoData["4a. close (" . $to_currency . ")"],
                'usdCurrencyClose' => $timeSeryCryptoData["4b. close (USD)"],
                'volume' => $timeSeryCryptoData["5. volume"],
                'usdCurrencyMarketcap' => $timeSeryCryptoData["6. market cap (USD)"],
                'mTime' => $key . " 00:00:00"
            );
            $timeSeriesCryptoData[$data_array["mTime"]] = $data_array;
        }

        return array(
            "metaData" => $metaData,
            "timeSeriesCryptoData" => $timeSeriesCryptoData,
        );
    }
}
