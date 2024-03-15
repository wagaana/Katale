<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use App\Models\PaymentMethod;
use App\Models\Country;
use App\Models\Currency;
use App\Models\Setting;
use App\Models\File;
use App\Models\PaymentMethodCurrency;
use HTTP_Request2;
use HTTP_Request2_Exception;

class PaymentMethodsController extends Controller
{
    public function addSuportedCountry(Request $request)
    {
        $country = new Country;
        $country->name = $request->input('name');
        $country->flag = json_encode($request->input('flag'));
        $country->code = $request->input('code');
        $country->dial_code = $request->input('dial_code');
        $user = auth()->user();
        $country->userId = $user->id;
        $country->save();

        return array(
            'status' => 200,
            'message' => 'Country Has been added',
        );
    }

    public function fetchSupportedCountries()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT * FROM countries");
        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function deleteCountry($code)
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::delete("DELETE FROM countries WHERE code = :code", ['code' => $code]);
        if ($result) {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public static function updateCurrenciesExchangeRates()
    {
        $currencySetting = Setting::where('setting_name', 'currency')->first();

        $result = Currency::get();

        for ($i = 0; $i < sizeof($result); $i++) {
            $currency = $result[$i];

            //9cfacb02ea5d646aecec0f24e4a8c9e4

            $request = new HTTP_Request2();
            $request->setUrl('https://api.exchangerate.host/convert?from=' .  $currency->code . '&to=' . $currencySetting->setting_value);
            $request->setMethod(HTTP_Request2::METHOD_GET);
            $request->setConfig(array(
                'follow_redirects' => TRUE
            ));
            try {
                $response = $request->send();
                if ($response->getStatus() == 200) {
                    $rate =  json_decode($response->getBody(), true)["result"];

                    if ($rate != $currency->exchange_rate) {
                        $currency->exchange_rate = $rate;
                        $currency->buy = $rate - (($rate / 100) * $currency->bidAskPercentageBuy);
                        $currency->sell = $rate + (($rate / 100) * $currency->bidAskPercentageSell);
                        $currency->save();
                    }
                } else {
                    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
                        $response->getReasonPhrase();
                }
            } catch (HTTP_Request2_Exception $e) {
                echo 'Error: ' . $e->getMessage();
            }
        }
    }

    public function addSuportedCurrency(Request $request)
    {
        $user = auth()->user();
        $currency = new Currency;
        $currency->name = $request->input('Currency');
        $currency->entity = $request->input('Entity');
        $currency->minorUnit = $request->input('MinorUnit');
        $currency->numericCode = $request->input('NumericCode');
        $currency->code = $request->input('AlphabeticCode');
        $currency->country_code = $request->input('code');
        $currency->userId = $user->id;
        $currency->save();

        return array(
            'status' => 200,
            'message' => 'OK',
        );
    }


    public static function fetchSupportedCurrenciesExchangeRates()
    {
        $user = auth()->user();
        //$userId = $user->id;
        //$data = Currency::where('country_code', '!=', $user->country)->orderByRaw('id DESC LIMIT 3')->get();
        $senderCurrency = Currency::where("country_code", $user->country)->first();

        // Retrieve the currencies and convert their exchange rates to the user's currency
        $currencies = Currency::where('country_code', '!=', $user->country)
            ->orderBy('id', 'desc')
            ->limit(3)
            ->selectRaw('*, ROUND(exchange_rate / ?, 6) as converted_exchange_rate', [$senderCurrency->exchange_rate])
            ->get();

        return array(
            'status' => 200,
            'data' => $currencies,
            'message' => 'OK'
        );
    }

    public function fetchSupportedCurrencies()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = Currency::all();

        $responseData =  array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($responseData, 200);
    }

    public function fetchLoadUserCurrency($userId)
    {
        $user = auth()->user();
        $userAccount = UsersController::getSelectedUserProfile($userId);
        $result = Currency::where("country_code", $userAccount->country)->first();

        $responseData =  array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($responseData, 200);
    }

    public function deleteCurrency($code)
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::delete("DELETE FROM currencies WHERE code = :code", ['code' => $code]);
        if ($result) {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function createPaymentMethod(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $image_id = $request->input('image_id');

        if (!File::where('user_id', $userId)->where('id', $image_id)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        $path = getFileLink(File::where('user_id', $userId)->where('id', $image_id)->first());

        $paymentMethod = new PaymentMethod;
        $paymentMethod->label = $request->input('label');
        $paymentMethod->country = $request->input('country');
        $paymentMethod->description = $request->input('description');
        $paymentMethod->category = $request->input('category');
        $paymentMethod->canDeposit = $request->input('canDeposit');
        $paymentMethod->canSend = $request->input('canSend');
        $paymentMethod->code = $request->input('code');
        $paymentMethod->userId = $userId;
        $paymentMethod->image = $path;
        $paymentMethod->image_id = $image_id;
        $paymentMethod->status = 'ACTIVE';
        $paymentMethod->deleted = 'false';
        $paymentMethod->save();

        return array(
            'status' => 200,
            'message' => 'OK',
        );
    }

    public function image($filepath)
    {
        return asset(str_replace('-', '/', $filepath));
    }

    public function loadPaymentMethods()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = PaymentMethod::where('status', 'ACTIVE')->where('canDeposit', 'true')->where('country', $user->country)->get();
        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function loadAllPaymentMethods()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT * FROM payment_methods");
        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function loadSendActivePaymentMethods()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = PaymentMethod::where('status', 'ACTIVE')->where('canSend', 'true')->where('country', $user->country)->get();
        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchPaymentMethod($code)
    {

        $result = DB::table('payment_methods')
            ->where('code', $code)
            ->first();

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchPaymentMethodStatistics($code)
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT (SELECT COUNT(*) FROM transactions WHERE status='COMPLETE') AS totalTransactions, (SELECT COUNT(*) FROM transactions WHERE provider= '$code' AND status='COMPLETE') AS successfulTransactions, (SELECT COUNT(*) FROM transactions WHERE provider= '$code' AND status='FAILED') AS failedTransactions, (SELECT COUNT(*) FROM transactions WHERE provider= '$code' AND status='CREATED') AS pendingTransactions, (SELECT COUNT(*) FROM transactions WHERE provider= '$code' AND status='COMPLETE') AS totalOrders FROM dual");

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function createNewCurrency(Request $request)
    {
        $user = auth()->user();
        $currency = new PaymentMethodCurrency;
        $currency->code = $request->input('currency') . "_" . $request->input('paymentMethod');
        $currency->currency = $request->input('currency');
        $currency->paymentMethod = $request->input('paymentMethod');
        $currency->exchangeRate = $request->input('exchangeRate');
        $currency->buy = $request->input('buy');
        $currency->sell = $request->input('sell');
        $currency->chargePercentage = $request->input('chargePercentage');
        $currency->transactionFee = $request->input('transactionFee');
        $currency->userId = $user->id;
        $currency->save();

        return array(
            'status' => 200,
            'message' => 'OK',
        );
    }

    public function loadPaymentMethodCurencies($paymentMethod)
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT payment_method_currencies.code, payment_method_currencies.currency, paymentMethod, payment_method_currencies.buy, exchangeRate, payment_method_currencies.sell, name, depositTariffEnabled, withdrowTariffEnabled,depositChargesEnabled,payment_method_currencies.transactionFee, maxWithdrowLimit, minWithdrowLimit, maxDepositLimit, minDepositLimit, chargePercentage, entity, minorUnit, numericCode, payment_method_currencies.userId, payment_method_currencies.deleterId, payment_method_currencies.created_at, payment_method_currencies.deleted, payment_method_currencies.deleteTime FROM payment_method_currencies, currencies WHERE currencies.code=payment_method_currencies.currency AND payment_method_currencies.paymentMethod=:paymentMethod", ['paymentMethod' => $paymentMethod]);

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public static function loadStebleCurency()
    {
        $user = auth()->user();
        $userId = $user->id;
        //$userAccount = UsersController::getSelectedUserProfile($userId);
        $result = Currency::where("country_code", $user->country)->first();

        $responseData =  array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($responseData, 200);
    }

    public static function loadSystemCurency()
    {
        $user = auth()->user();
        $userId = $user->id;
        $currencySetting = Setting::where('setting_name', 'currency')->first();

        $result = Currency::where("code", $currencySetting->setting_value)->first();

        $responseData =  array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($responseData, 200);
    }

    public function loadCurencyDetails($code)
    {
        $result = Currency::where("code", $code)->first();

        $responseData =  array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($responseData, 200);
    }

    public function updateCurrencyConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $payment_methods = Currency::where('code', $request->input('paymentMethodCode'))
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return response()->json(array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        ), 200);
    }

    public function updateCurrencyLocationConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $currencies = Currency::where('code', $request->input('curencyCode'))
            ->update([
                'suport_latitude' => $request->input('suport_latitude'),
                'suport_longitude' => $request->input('suport_longitude')
            ]);

        return response()->json(array(
            'status' => 200,
            'data' => $currencies,
            'message' => 'Location has been updated.'
        ), 200);
    }

    public function loadPaymentMethodCurencyDetails($code)
    {
        $result = collect(DB::select("SELECT * FROM payment_method_currencies WHERE code=:code", ['code' => $code]))->first();
        if ($result) {
            return $result;
        } else {
            return null;
        }
    }

    public function deleteActiveCurrency($code)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::table('payment_method_currencies')
            ->where(['code' => $code])
            ->delete();
        if ($result) {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function updatePaymentMethodConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $payment_methods = DB::table('payment_methods')
            ->where(['code' => $request->input('paymentMethodCode')])
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        );
    }

    public function updatePaymentMethodLocationConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $payment_methods = DB::table('payment_methods')
            ->where(['code' => $request->input('paymentMethodCode')])
            ->update([
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longitude')
            ]);

        return array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => 'Location has been updated.'
        );
    }
}
