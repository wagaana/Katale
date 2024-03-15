<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\Models\Transaction;
use App\Models\BusinessApiRequest;
use App\Models\Currency;
use App\Models\Setting;
use Illuminate\Support\Facades\Hash;

class TransactionController extends Controller
{
    public function createTopupRequest(Request $request)
    {
        $user = auth()->user();
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);
        $jsonDecryptedData = json_decode($decryptedData, true);

        $timestamp = round(microtime(true) * 1000);
        $userId = $user->id;
        $paymentMethod = $jsonDecryptedData['payment_method'];
        $paymentMethodCurrency = $jsonDecryptedData['payment_method_currency'];
        $description = $timestamp;
        $conditionValue = $jsonDecryptedData['conditionValue'];

        $transactionId = $this->get_uuid();

        $gross = (float) $jsonDecryptedData['gross'];

        $response = array();
        switch ($paymentMethod) {
            case "PAYPAL":
                $data = DB::table('payment_method_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;
                $fee = 0;
                if ($gross > $data->maxDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($gross < $data->minDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }
                if ($data->depositChargesEnabled == 'true') {
                    $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                }

                if ($data->depositTariffEnabled == 'true') {
                    $tariffPlan = PaymentMethodTariffController::calculatePaymentMethodCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->sending;
                }
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $requestPayload = PayPalController::initPaymentRequest($gross, $fee, $net, $description, $currency);
                $requestPayload = json_decode($requestPayload, true);
                $requestId = $requestPayload['id'];
                $requestStatus = $requestPayload['status'];
                $links = $requestPayload['links'];

                $approveLink = '';
                for ($i = 0; $i < sizeof($links); $i++) {
                    $parameter = $links[$i];
                    if ($parameter['rel'] === "approve") {
                        $approveLink = $parameter['href'];
                    }
                }

                $transaction = new Transaction;
                $transaction->id = $transactionId;
                $transaction->userId = $userId;
                $transaction->recieverId = $userId;
                $transaction->gross = $gross;
                $transaction->fee = $fee;
                $transaction->net = $net;
                $transaction->provider = $paymentMethod;
                $transaction->status = $requestStatus;
                $transaction->requestId = $requestId;
                $transaction->description = $description;
                $transaction->transactionKey = 'CREDIT';
                $transaction->externalId = $milliseconds;
                $transaction->currency = $currency;
                $transaction->save();

                $response = array(
                    'status' => 200,
                    'approveLink' => $approveLink,
                    'message' => 'OK',
                    'data' => array(
                        'payment_method' => $paymentMethod,
                        'message' => $approveLink
                    )
                );
                break;

            case "UG_MTN_MOMO":
                $data = DB::table('payment_method_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;
                $fee = 0;
                if ($gross > $data->maxDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($gross < $data->minDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }
                if ($data->depositChargesEnabled == 'true') {
                    $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                }
                if ($data->depositTariffEnabled == 'true') {
                    $tariffPlan = PaymentMethodTariffController::calculatePaymentMethodCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->sending;
                }
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $requestPayload = MtnMomoController::request_to_pay($conditionValue, $currency, $net, "Nsiimbi", "Nsiimbi", $milliseconds);
                $requestId = $requestPayload['id'];
                $requestStatus = $requestPayload['status'];

                $transaction = new Transaction;
                $transaction->id = $transactionId;
                $transaction->userId = $userId;
                $transaction->recieverId = $userId;
                $transaction->gross = $gross;
                $transaction->fee = $fee;
                $transaction->net = $net;
                $transaction->provider = $paymentMethod;
                $transaction->status = $requestStatus;
                $transaction->requestId = $requestId;
                $transaction->description = $conditionValue;
                $transaction->transactionKey = 'CREDIT';
                $transaction->externalId = $milliseconds;
                $transaction->currency = $currency;
                $transaction->save();

                $response = array(
                    'status' => 200,
                    'status' => 200,
                    'message' => 'OK',
                    'response' => $requestPayload,
                    'data' => array(
                        'payment_method' => $paymentMethod,
                        'message' => $requestPayload['message']
                    )
                );
                break;

            case "UG_AIRTEL_MONEY":
                $data = DB::table('payment_method_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;
                $fee = 0;
                if ($gross > $data->maxDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($gross < $data->minDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }
                if ($data->depositChargesEnabled == 'true') {
                    $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                }
                if ($data->depositTariffEnabled == 'true') {
                    $tariffPlan = PaymentMethodTariffController::calculatePaymentMethodCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->sending;
                }
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $msisdn = preg_replace(
                    '/\+(?:998|996|995|994|993|992|977|976|975|974|973|972|971|970|968|967|966|965|964|963|962|961|960|886|880|856|855|853|852|850|692|691|690|689|688|687|686|685|683|682|681|680|679|678|677|676|675|674|673|672|670|599|598|597|595|593|592|591|590|509|508|507|506|505|504|503|502|501|500|423|421|420|389|387|386|385|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|291|290|269|268|267|266|265|264|263|262|261|260|258|257|256|255|254|253|252|251|250|249|248|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|218|216|213|212|211|98|95|94|93|92|91|90|86|84|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44\D?1624|44\D?1534|44\D?1481|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1\D?939|1\D?876|1\D?869|1\D?868|1\D?849|1\D?829|1\D?809|1\D?787|1\D?784|1\D?767|1\D?758|1\D?721|1\D?684|1\D?671|1\D?670|1\D?664|1\D?649|1\D?473|1\D?441|1\D?345|1\D?340|1\D?284|1\D?268|1\D?264|1\D?246|1\D?242|1)\D?/',
                    '',
                    '+' . $conditionValue
                );
                $requestPayload = AirtelMoneyController::merchantPayments($msisdn, $currency, $net, "UG", "Nsiimbi", $milliseconds);
                $requestId = $requestPayload['id'];
                $requestStatus = $requestPayload['status'];

                $transaction = new Transaction;
                $transaction->id = $transactionId;
                $transaction->userId = $userId;
                $transaction->recieverId = $userId;
                $transaction->gross = $gross;
                $transaction->fee = $fee;
                $transaction->net = $net;
                $transaction->provider = $paymentMethod;
                $transaction->status = $requestStatus;
                $transaction->requestId = $requestId;
                $transaction->description = $conditionValue;
                $transaction->transactionKey = 'CREDIT';
                $transaction->externalId = $milliseconds;
                $transaction->currency = $currency;
                $transaction->save();

                $response = array(
                    'status' => 200,
                    'message' => 'OK',
                    'response' => $requestPayload,
                    'data' => array(
                        'payment_method' => $paymentMethod
                    )
                );
                break;

            case "BANK_TRANSFER":
                $data = DB::table('bank_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;

                $fee = 0;
                if ($gross > $data->maxDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($gross < $data->minDepositLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minDepositLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($data->depositChargesEnabled == 'true') {
                    $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                }
                if ($data->depositTariffEnabled == 'true') {
                    $tariffPlan = PaymentMethodTariffController::calculatePaymentMethodCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->sending;
                }
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;
                $paymentStatus = BankTransferController::capturePaymentStatus($conditionValue);

                if ($paymentStatus['status'] === 'COMPLETED') {
                    $transaction = new Transaction;
                    $transaction->id = $transactionId;
                    $transaction->userId = $userId;
                    $transaction->recieverId = $userId;
                    $transaction->gross = $gross;
                    $transaction->fee = $fee;
                    $transaction->net = $net;
                    $transaction->provider = $paymentMethod;
                    $transaction->status = $paymentStatus['status'];
                    $transaction->requestId = $milliseconds;
                    $transaction->description = $conditionValue;
                    $transaction->transactionKey = 'CREDIT';
                    $transaction->externalId = $milliseconds;
                    $transaction->currency = $currency;
                    $transaction->save();

                    $senderCurrency = Currency::where("country_code", $user->country)->first();
                    BalancesController::addDepositTransaction($userId, $userId, $gross, $fee, $net, $transactionId, $senderCurrency->code);

                    $response = array(
                        'status' => 200,
                        'message' => 'OK',
                        'data' => array(
                            'payment_method' => $paymentMethod,
                            'message' => 'We have sent you an email with our bank information.'
                        )
                    );
                } else {
                    $response = array(
                        'status' => 424,
                        'message' => 'Invalid reference provided.',
                        'data' => array(
                            'payment_method' => $paymentMethod,
                            'message' => 'Invalid reference provided.'
                        )
                    );
                }
                break;

            default:
                $response = array(
                    'status' => 200,
                    'message' => 'Invalid payment gateway'
                );
        }
        return response()->json($response, $response['status']);
    }

    public function cashOut(Request $request)
    {
        $user = auth()->user();
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);
        $jsonDecryptedData = json_decode($decryptedData, true);

        $isPinCorrect = Hash::check($jsonDecryptedData['pin'], $user->pin);

        if (!$isPinCorrect) {
            return response()->json(array(
                'status' => 403,
                'message' => 'Invalid PIN Provided',
            ), 403);
        }

        $timestamp = round(microtime(true) * 1000);
        $userId = $user->id;

        $gross = (float) $jsonDecryptedData['gross'];
        $paymentMethod = $jsonDecryptedData['payment_method'];
        $paymentMethodCurrency = $jsonDecryptedData['payment_method_currency'];
        $conditionValue = $jsonDecryptedData['conditionValue'];

        $transactionId = $this->get_uuid();

        $response = array();
        switch ($paymentMethod) {

            case "BANK_TRANSFER":
                $data = DB::table('bank_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;
                $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                if ($data->withdrowTariffEnabled == 'true') {
                    $tariffPlan = BanksController::calculateBankCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->withdraw;
                }
                $net = $fee + $gross;
                if ($net > $data->maxWithdrowLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxWithdrowLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($net < $data->minWithdrowLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minWithdrowLimit
                    );
                    return response()->json($response, $response['status']);
                }

                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $accountBalance = BalancesController::getUserAccountBalance($userId);

                if ($net <= $accountBalance && $net > $fee) {
                    $paymentStatus = BankTransferController::capturePaymentStatus($conditionValue);

                    if ($paymentStatus['status'] === 'COMPLETED') {
                        $transaction = new Transaction;
                        $transaction->id = $transactionId;
                        $transaction->userId = $userId;
                        $transaction->recieverId = $userId;
                        $transaction->gross = $gross;
                        $transaction->fee = $fee;
                        $transaction->net = $net;
                        $transaction->provider = $paymentMethod;
                        $transaction->status = $paymentStatus['status'];
                        $transaction->requestId = $milliseconds;
                        $transaction->description = $conditionValue;
                        $transaction->transactionKey = 'CASH_OUT';
                        $transaction->externalId = $milliseconds;
                        $transaction->currency = $currency;
                        $transaction->save();

                        $response = array(
                            'status' => 200,
                            'message' => 'Your request has been submited',
                        );
                    } else {
                        $response = array(
                            'status' => 424,
                            'message' => 'Invalid reference provided.',
                            'data' => array(
                                'payment_method' => $paymentMethod,
                                'message' => 'Invalid reference provided.'
                            )
                        );
                    }
                } else {
                    if ($net <= $fee) {
                        $response = array(
                            'status' => 422,
                            'message' => 'Minimum Transaction should be above ' . $fee
                        );
                    } else {
                        $response = array(
                            'status' => 422,
                            'message' => 'Insuficient Balance'
                        );
                    }
                }
                break;

            case "UG_MTN_MOMO":

                $data = DB::table('payment_method_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;
                $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                if ($data->withdrowTariffEnabled == 'true') {
                    $tariffPlan = PaymentMethodTariffController::calculatePaymentMethodCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->withdraw;
                }
                $net = $fee + $gross;
                if ($net > $data->maxWithdrowLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxWithdrowLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($net < $data->minWithdrowLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minWithdrowLimit
                    );
                    return response()->json($response, $response['status']);
                }
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $accountBalance = BalancesController::getUserAccountBalance($userId);

                if ($net <= $accountBalance && $net > $fee) {
                    $requestPayload = MtnMomoController::transfer($conditionValue, $currency, $gross, "Nsiimbi", "Nsiimbi", $milliseconds);
                    $requestId = $requestPayload['id'];
                    $requestStatus = $requestPayload['status'];

                    $transaction = new Transaction;
                    $transaction->id = $transactionId;
                    $transaction->userId = $userId;
                    $transaction->recieverId = $userId;
                    $transaction->gross = $gross;
                    $transaction->fee = $fee;
                    $transaction->net = $net;
                    $transaction->provider = $paymentMethod;
                    $transaction->status = $requestStatus;
                    $transaction->requestId = $requestId;
                    $transaction->description = $conditionValue;
                    $transaction->transactionKey = 'CASH_OUT';
                    $transaction->externalId = $milliseconds;
                    $transaction->currency = $currency;
                    $transaction->save();

                    $response = array(
                        'status' => 200,
                        'status' => 200,
                        'message' => 'Your request has been submited',
                        'response' => $requestPayload,
                        'data' => array(
                            'payment_method' => $paymentMethod,
                            'message' => $requestPayload['message']
                        )
                    );
                } else {
                    if ($net <= $fee) {
                        $response = array(
                            'status' => 422,
                            'message' => 'Minimum Transaction should be above ' . $fee
                        );
                    } else {
                        $response = array(
                            'status' => 422,
                            'message' => 'Insuficient Balance'
                        );
                    }
                }
                break;

            case "UG_AIRTEL_MONEY":

                $data = DB::table('payment_method_currencies')->where('code', $paymentMethodCurrency)->first();
                $transactionalFeesPercentage = $data->chargePercentage;
                $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                if ($data->withdrowTariffEnabled == 'true') {
                    $tariffPlan = PaymentMethodTariffController::calculatePaymentMethodCurrencyTariffPlan($gross, $data->code);
                    $fee += $tariffPlan->withdraw;
                }
                $net = $fee + $gross;
                if ($net > $data->maxWithdrowLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The maximum allowed ammount is ' . $data->maxWithdrowLimit
                    );
                    return response()->json($response, $response['status']);
                }

                if ($net < $data->minWithdrowLimit) {
                    $response = array(
                        'status' => 422,
                        'message' => 'The minimum allowed ammount is ' . $data->minWithdrowLimit
                    );
                    return response()->json($response, $response['status']);
                }
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $msisdn = preg_replace(
                    '/\+(?:998|996|995|994|993|992|977|976|975|974|973|972|971|970|968|967|966|965|964|963|962|961|960|886|880|856|855|853|852|850|692|691|690|689|688|687|686|685|683|682|681|680|679|678|677|676|675|674|673|672|670|599|598|597|595|593|592|591|590|509|508|507|506|505|504|503|502|501|500|423|421|420|389|387|386|385|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|291|290|269|268|267|266|265|264|263|262|261|260|258|257|256|255|254|253|252|251|250|249|248|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|218|216|213|212|211|98|95|94|93|92|91|90|86|84|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44\D?1624|44\D?1534|44\D?1481|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1\D?939|1\D?876|1\D?869|1\D?868|1\D?849|1\D?829|1\D?809|1\D?787|1\D?784|1\D?767|1\D?758|1\D?721|1\D?684|1\D?671|1\D?670|1\D?664|1\D?649|1\D?473|1\D?441|1\D?345|1\D?340|1\D?284|1\D?268|1\D?264|1\D?246|1\D?242|1)\D?/',
                    '',
                    '+' . $conditionValue
                );

                $accountBalance = BalancesController::getUserAccountBalance($userId);

                if ($net <= $accountBalance && $net > $fee) {
                    $requestPayload = AirtelMoneyController::disbursements($msisdn, $currency, $gross, "UG", "Nsiimbi", $milliseconds);
                    $requestId = $requestPayload['id'];
                    $requestStatus = $requestPayload['status'];

                    $transaction = new Transaction;
                    $transaction->id = $transactionId;
                    $transaction->userId = $userId;
                    $transaction->recieverId = $userId;
                    $transaction->gross = $gross;
                    $transaction->fee = $fee;
                    $transaction->net = $net;
                    $transaction->provider = $paymentMethod;
                    $transaction->status = $requestStatus;
                    $transaction->requestId = $requestId;
                    $transaction->description = $conditionValue;
                    $transaction->transactionKey = 'CASH_OUT';
                    $transaction->externalId = $milliseconds;
                    $transaction->currency = $currency;
                    $transaction->save();

                    if ($requestStatus === "SUCCESSFUL") {
                        $reciever = UsersController::getSelectedUserProfile($transaction->userId);
                        $recieverCurrency = Currency::where("country_code", $reciever->country)->first();
                        BalancesController::addCashOutTransaction($transaction->userId, $transaction->gross, $transaction->fee, $transaction->net, $transactionId, $recieverCurrency->code);
                    }

                    $response = array(
                        'status' => 200,
                        'message' => 'Your request has been submited',
                        'response' => $requestPayload,
                        'data' => array(
                            'payment_method' => $paymentMethod,
                            'message' => $requestPayload['message']
                        )
                    );
                } else {
                    if ($net <= $fee) {
                        $response = array(
                            'status' => 421,
                            'message' => 'Minimum Transaction should be above ' . $fee
                        );
                    } else {
                        $response = array(
                            'status' => 422,
                            'message' => 'Insuficient Balance'
                        );
                    }
                }
                break;

            default:
                $response = array(
                    'status' => 405,
                    'message' => 'Invalid payment gateway'
                );
        }
        return response()->json($response, $response['status']);
    }

    public function sendMoney(Request $request)
    {
        $user = auth()->user();
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);
        $jsonDecryptedData = json_decode($decryptedData, true);

        $isPinCorrect = Hash::check($jsonDecryptedData['pin'], $user->pin);

        if (!$isPinCorrect) {
            return response()->json(array(
                'status' => 403,
                'message' => 'Invalid PIN Provided',
            ), 403);
        }

        $userId = $user->id;

        $recieverId = $jsonDecryptedData['userId'];
        $netToSend = $jsonDecryptedData['net'];

        $accountBalance = BalancesController::getUserAccountBalance($userId);
        $reciever = UsersController::getSelectedUserProfile($recieverId);

        $recieverCurrency = Currency::where("country_code", $reciever->country)->first();
        $senderCurrency = Currency::where("country_code", $user->country)->first();

        // Calculate exchange rate from sender's currency to UGX
        $sender_to_ugx_exchange_rate = (1 / $senderCurrency->buy);

        // Calculate exchange rate from UGX to receiver's currency
        $ugx_to_receiver_exchange_rate = $recieverCurrency->sell;

        // Calculate the overall exchange rate from sender's currency to receiver's currency
        $exchange_rate = $sender_to_ugx_exchange_rate * $ugx_to_receiver_exchange_rate;

        $fee = $senderCurrency->transactionFee + (($netToSend / 100) * $recieverCurrency->conversionChargePercentage);

        // Calculate gross amount in the receiver's currency
        $grossToCharge = ($netToSend - $fee) * $exchange_rate;

        // Calculate gross amount in the sender's currency
        $netToCharge = ($netToSend + $fee) * $exchange_rate;

        // Calculate gross amount in the sender's currency
        $feeToCharge = $fee * $exchange_rate;

        // Use the receiver's currency code
        $currency = $senderCurrency->code;

        $milliseconds = round(microtime(true) * 1000);
        $transactionId = $this->get_uuid();

        if ($netToCharge <= $accountBalance && $netToCharge > $feeToCharge) {
            $transaction = new Transaction;
            $transaction->id = $transactionId;
            $transaction->userId = $userId;
            $transaction->recieverId = $recieverId;
            $transaction->gross = $grossToCharge;
            $transaction->fee = $feeToCharge;
            $transaction->net = $netToCharge;
            $transaction->exchange_rate = $exchange_rate;
            $transaction->senderCurrencyTxnFee = $recieverCurrency->transactionFee;
            $transaction->conversionChargePercentage = $recieverCurrency->conversionChargePercentage;
            $transaction->provider = 'SYSTEM';
            $transaction->status = 'COMPLETED';
            $transaction->requestId = $milliseconds;
            $transaction->description = 'Wallet Transfer';
            $transaction->transactionKey = 'TRANSFER';
            $transaction->externalId = $milliseconds;
            $transaction->currency = $currency;
            $transaction->save();

            BalancesController::addSendMoneyTransaction($userId, $recieverId, $grossToCharge, $feeToCharge, $netToCharge, $netToSend, $transactionId, $senderCurrency->code, $recieverCurrency->code);

            return response()->json(array(
                'status' => 200,
                'message' => 'OK',
                'data' => array(
                    'payment_method' => 'SYSTEM',
                    'message' => 'We have sent you an email with our bank information.'
                )
            ), 200);
        } else {
            if ($netToCharge <= $feeToCharge) {
                return response()->json(array(
                    'status' => 421,
                    'message' => 'Minimum Transaction should be above ' . $feeToCharge
                ), 421);
            } else {
                return response()->json(array(
                    'status' => 422,
                    'message' => 'Insuficient Balance'
                ), 422);
            }
        }
    }

    public function topupMarketingBalance(Request $request)
    {
        $user = auth()->user();
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);
        $jsonDecryptedData = json_decode($decryptedData, true);

        $isPinCorrect = Hash::check($jsonDecryptedData['pin'], $user->pin);

        if (!$isPinCorrect) {
            return response()->json(array(
                'status' => 403,
                'message' => 'Invalid PIN Provided',
            ), 403);
        }

        $userId = $user->id;

        $netToSend = $jsonDecryptedData['net'];

        $accountBalance = BalancesController::getUserAccountBalance($userId);

        $currencySetting = Setting::where('setting_name', 'currency')->first();

        $recieverCurrency = Currency::where("code", $currencySetting->setting_value)->first();
        $senderCurrency = Currency::where("country_code", $user->country)->first();

        // Calculate exchange rate from sender's currency to UGX
        $sender_to_ugx_exchange_rate = (1 / $senderCurrency->buy);

        // Calculate exchange rate from UGX to receiver's currency
        $ugx_to_receiver_exchange_rate = $recieverCurrency->sell;

        // Calculate the overall exchange rate from sender's currency to receiver's currency
        $exchange_rate = $sender_to_ugx_exchange_rate * $ugx_to_receiver_exchange_rate;

        $fee = $senderCurrency->transactionFee + (($netToSend / 100) * $recieverCurrency->conversionChargePercentage);

        // Calculate gross amount in the receiver's currency
        $grossToCharge = ($netToSend - $fee) * $exchange_rate;

        // Calculate gross amount in the sender's currency
        $netToCharge = ($netToSend + $fee) * $exchange_rate;

        // Calculate gross amount in the sender's currency
        $feeToCharge = $fee * $exchange_rate;

        // Use the receiver's currency code
        $currency = $senderCurrency->code;

        $milliseconds = round(microtime(true) * 1000);
        $transactionId = $this->get_uuid();

        if ($netToCharge <= $accountBalance && $netToCharge > $feeToCharge) {
            $transaction = new Transaction;
            $transaction->id = $transactionId;
            $transaction->userId = $userId;
            $transaction->recieverId = 0;
            $transaction->gross = $grossToCharge;
            $transaction->fee = $feeToCharge;
            $transaction->net = $netToCharge;
            $transaction->exchange_rate = $exchange_rate;
            $transaction->senderCurrencyTxnFee = $recieverCurrency->transactionFee;
            $transaction->conversionChargePercentage = $recieverCurrency->conversionChargePercentage;
            $transaction->provider = 'SYSTEM';
            $transaction->status = 'COMPLETED';
            $transaction->requestId = $milliseconds;
            $transaction->description = 'Shop advertising balance topup';
            $transaction->transactionKey = 'TRANSFER';
            $transaction->externalId = $milliseconds;
            $transaction->currency = $currency;
            $transaction->save();

            BalancesController::addMonetToMarketingBalance($userId, $grossToCharge, $feeToCharge, $netToCharge, $netToSend, $transactionId, $senderCurrency->code);

            return response()->json(array(
                'status' => 200,
                'message' => 'OK',
                'data' => array(
                    'payment_method' => 'SYSTEM',
                    'message' => 'We have sent you an email with our bank information.'
                )
            ), 200);
        } else {
            if ($netToCharge <= $feeToCharge) {
                return response()->json(array(
                    'status' => 421,
                    'message' => 'Minimum Transaction should be above ' . $feeToCharge
                ), 421);
            } else {
                return response()->json(array(
                    'status' => 422,
                    'message' => 'Insuficient Balance'
                ), 422);
            }
        }
    }

    public function createCustomerTopupRequest(Request $request)
    {
        $timestamp = round(microtime(true) * 1000);
        $user = auth()->user();
        $userId = $user->id;

        $recieverId = $request->input('userId');
        $gross = (float) $request->input('gross');
        $paymentMethod = $request->input('payment_method');
        $paymentMethodCurrency = $request->input('payment_method_currency');
        $description = $request->input('description');
        $conditionValue = $request->input('conditionValue');

        $transactionId = $this->get_uuid();

        $data = DB::table('payment_method_currencies')->where('code', $paymentMethodCurrency)->first();
        $transactionalFeesPercentage = $data->chargePercentage;

        $response = array();
        switch ($paymentMethod) {
            case "PAYPAL":
                $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $requestPayload = PayPalController::initPaymentRequest($gross, $fee, $net, $description, $currency);
                $requestPayload = json_decode($requestPayload, true);
                $requestId = $requestPayload['id'];
                $requestStatus = $requestPayload['status'];
                $links = $requestPayload['links'];

                $approveLink = '';
                for ($i = 0; $i < sizeof($links); $i++) {
                    $parameter = $links[$i];
                    if ($parameter['rel'] === "approve") {
                        $approveLink = $parameter['href'];
                    }
                }

                $transaction = new Transaction;
                $transaction->id = $transactionId;
                $transaction->userId = $userId;
                $transaction->recieverId = $recieverId;
                $transaction->gross = $gross;
                $transaction->fee = $fee;
                $transaction->net = $net;
                $transaction->provider = $paymentMethod;
                $transaction->status = $requestStatus;
                $transaction->requestId = $requestId;
                $transaction->description = $description;
                $transaction->transactionKey = 'CREDIT';
                $transaction->externalId = $milliseconds;
                $transaction->currency = $currency;
                $transaction->save();

                $response = array(
                    'status' => 200,
                    'approveLink' => $approveLink,
                    'message' => 'OK',
                    'data' => array(
                        'payment_method' => $paymentMethod,
                        'message' => $approveLink
                    )
                );
                break;

            case "UG_MTN_MOMO":
                $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;

                $requestPayload = MtnMomoController::request_to_pay($conditionValue, $currency, $net, "PAYING FOR BEANS", "Order Payment", $milliseconds);
                $requestId = $requestPayload['id'];
                $requestStatus = $requestPayload['status'];

                $transaction = new Transaction;
                $transaction->id = $transactionId;
                $transaction->userId = $userId;
                $transaction->recieverId = $recieverId;
                $transaction->gross = $gross;
                $transaction->fee = $fee;
                $transaction->net = $net;
                $transaction->provider = $paymentMethod;
                $transaction->status = $requestStatus;
                $transaction->requestId = $requestId;
                $transaction->description = $conditionValue;
                $transaction->transactionKey = 'CREDIT';
                $transaction->externalId = $milliseconds;
                $transaction->currency = $currency;
                $transaction->save();

                $response = array(
                    'status' => 200,
                    'status' => 200,
                    'message' => 'OK',
                    'response' => $requestPayload,
                    'data' => array(
                        'payment_method' => $paymentMethod,
                        'message' => $requestPayload['message']
                    )
                );
                break;

            case "BANK_TRANSFER":
                $fee = $data->transactionFee + (($gross / 100) * $transactionalFeesPercentage);
                $net = $fee + $gross;
                $milliseconds = round(microtime(true) * 1000);
                $currency = $data->currency;
                $paymentStatus = BankTransferController::capturePaymentStatus($conditionValue);

                if ($paymentStatus['status'] === 'COMPLETED') {
                    $transaction = new Transaction;
                    $transaction->id = $transactionId;
                    $transaction->userId = $userId;
                    $transaction->recieverId = $recieverId;
                    $transaction->gross = $gross;
                    $transaction->fee = $fee;
                    $transaction->net = $net;
                    $transaction->provider = $paymentMethod;
                    $transaction->status = $paymentStatus['status'];
                    $transaction->requestId = $milliseconds;
                    $transaction->description = $conditionValue;
                    $transaction->transactionKey = 'CREDIT';
                    $transaction->externalId = $milliseconds;
                    $transaction->currency = $currency;
                    $transaction->save();

                    $reciever = UsersController::getSelectedUserProfile($userId);
                    $recieverCurrency = Currency::where("country_code", $reciever->country)->first();
                    $senderCurrency = Currency::where("country_code", $user->country)->first();
                    BalancesController::addTransaction($userId, $recieverId, $gross, $fee, $net, $transactionId, $senderCurrency->code, $recieverCurrency->code);

                    $response = array(
                        'status' => 200,
                        'message' => 'OK',
                        'data' => array(
                            'payment_method' => $paymentMethod,
                            'message' => 'We have sent you an email with our bank information.'
                        )
                    );
                } else {
                    $response = array(
                        'status' => 424,
                        'message' => 'Invalid reference provided.',
                        'data' => array(
                            'payment_method' => $paymentMethod,
                            'message' => 'Invalid reference provided.'
                        )
                    );
                }
                break;

            default:
                $response = array(
                    'status' => 200,
                    'message' => 'Invalid payment gateway'
                );
        }
        return response()->json($response, $response['status']);
    }

    public function completeMTNTopup($requestId, $payerMessage, $paymentStatus)
    {

        $transaction = DB::table('transactions')
            ->where('requestId', $requestId)
            ->first();

        if ($transaction->status !== "SUCCESSFUL" || $transaction->status !== "FAILED") {
            $transactions = DB::table('transactions')
                ->where(['requestId' => $requestId])
                ->update([
                    'responseTime' => DB::raw('CURRENT_TIMESTAMP'),
                    'status' => $paymentStatus,
                    'summary' => $payerMessage
                ]);

            if ($paymentStatus === "SUCCESSFUL") {
                $reciever = UsersController::getSelectedUserProfile($transaction->userId);
                $recieverCurrency = Currency::where("country_code", $reciever->country)->first();

                BalancesController::addDepositTransaction($transaction->userId, $transaction->userId, $transaction->gross, $transaction->fee, $transaction->net, $transaction->id, $recieverCurrency->code);
                BusinessApiController::updateTransactionStatus($transaction->id, $paymentStatus);
            }
            return array(
                'status' => 200,
                'data' => $transactions,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 200,
                'data' => $transaction,
                'message' => 'OK',
            );
        }
    }

    public function completeMTNTransfer($requestId, $payerMessage, $paymentStatus)
    {
        $transaction = DB::table('transactions')
            ->where('requestId', $requestId)
            ->first();

        if ($transaction->status !== "SUCCESSFUL" || $transaction->status !== "FAILED") {
            $transactions = DB::table('transactions')
                ->where(['requestId' => $requestId])
                ->update([
                    'responseTime' => DB::raw('CURRENT_TIMESTAMP'),
                    'status' => $paymentStatus,
                    'summary' => $payerMessage
                ]);

            if ($paymentStatus === "SUCCESSFUL") {
                $reciever = UsersController::getSelectedUserProfile($transaction->userId);
                $recieverCurrency = Currency::where("country_code", $reciever->country)->first();
                BalancesController::addCashOutTransaction($transaction->userId, $transaction->gross, $transaction->fee, $transaction->net, $transaction->id, $recieverCurrency->code);
            }
            return array(
                'status' => 200,
                'data' => $transactions,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 200,
                'data' => $transaction,
                'message' => 'OK',
            );
        }
    }

    public function completePayPalTopup($requestId, $create_time, $notificationId, $summary, $resourceStatus)
    {
        $transactions = DB::table('transactions')
            ->where(['requestId' => $requestId])
            ->update([
                'responseTime' => DB::raw('CURRENT_TIMESTAMP'),
                'notificationId' => $notificationId,
                'status' => $resourceStatus,
                'summary' => $summary
            ]);

        return array(
            'status' => 200,
            'data' => $transactions,
            'message' => 'OK',
        );
    }

    public function loadTransactionReauestDetails($externalId)
    {

        $result = DB::table('transactions')
            ->where('externalId', $externalId)
            ->first();
        return $result;
    }

    public function loadMyTransactions()
    {
        $user = auth()->user();
        $userId = $user->id;
        $transactions = DB::select('SELECT * FROM transactions WHERE userId=:userId ORDER BY id DESC', ['userId' => $userId]);
        return array(
            'status' => 200,
            'transactions' => $transactions,
            'message' => 'OK'
        );
    }

    public function loadUserTransactions($userId)
    {
        $user = auth()->user();
        $adminId = $user->id;

        $transactions = DB::select("SELECT transactions.id, transactions.userId, transactions.gross, transactions.fee, transactions.net,
         transactions.currency, transactions.provider, transactions.status, transactions.transactionKey, transactions.requestId, transactions.description,
          transactions.summary, transactions.externalId, transactions.orderId, transactions.responseTime, transactions.notificationId, transactions.created_at,
           transactions.updated_at, users.id AS userId, phone, email, place_id, location_label,
           latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender,
            email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM transactions, users WHERE transactions.userId=users.id AND users.id=:userId ORDER BY id DESC", ['userId' => $userId]);
        return array(
            'status' => 200,
            'transactions' => $transactions,
            'message' => 'OK'
        );
    }

    public function loadCompleteTransactions()
    {
        $user = auth()->user();
        $adminId = $user->id;

        $transactions = DB::select('SELECT transactions.id, transactions.userId, transactions.gross, transactions.fee, transactions.net,
         transactions.currency, transactions.provider, transactions.status, transactions.transactionKey, transactions.requestId, transactions.description,
          transactions.summary, transactions.externalId, transactions.orderId, transactions.responseTime, transactions.notificationId, transactions.created_at,
           transactions.updated_at, users.id AS userId, phone, email, place_id, location_label,
           latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender,
            email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM transactions, users WHERE users.id=transactions.userId ORDER BY id DESC');
        return array(
            'status' => 200,
            'transactions' => $transactions,
            'message' => 'OK'
        );
    }

    public function PayPalWebHook(Request $request)
    {
        $response = array();
        if ($request->input('event_type') == 'CHECKOUT.ORDER.APPROVED') {
            $create_time = $request->input('create_time');
            $event_type = $request->input('event_type');
            $event_version = $request->input('event_version');
            $notificationId = $request->input('id');
            $links = $request->input('links');
            $resource = $request->input('resource');
            $resource_type = $request->input('resource_type');
            $resource_version = $request->input('resource_version');
            $summary = $request->input('summary');

            $requestId = $resource['id'];
            $resourceStatus = $resource['status'];

            if ($resourceStatus === "APPROVED") {
                $paymentStatusData = PayPalController::capturePaymentStatus($requestId);
                $paymentStatusData = json_decode($paymentStatusData, true);
                $paymentStatus = $paymentStatusData['status'];

                if ($paymentStatus === "COMPLETED") {
                    $response = $this->completePayPalTopup($requestId, $create_time, $notificationId, $summary, $resourceStatus);
                }
            }
        } else {
            //
        }

        echo json_encode($response);
    }

    public function AirtelCollectionsWebHook(Request $request)
    {
        $response = array();

        $transaction = $request->input('transaction');

        $txnId = $transaction['id'];
        $message = $transaction['message'];
        $status_code = $transaction['status_code'];
        $airtel_money_id = $transaction['airtel_money_id'];

        Storage::disk('local')->put('airtel_callback_data.json', json_encode($request->input()));

        if (isset($airtel_money_id)) {
            $paymentRequestData = $this->loadTransactionReauestDetails($txnId);
            $requestId = $paymentRequestData->requestId;

            $paymentStatusData = AirtelMoneyController::txnEnquiry("UG", "UGX", $requestId);
            $paymentStatusData = json_decode($paymentStatusData, true);
            $transaction = $paymentStatusData['data']['transaction'];
            $paymentStatus = $transaction['status'];

            if (isset($paymentStatus) && $paymentStatus === "TS") {
                $response = $this->completeAirtelTopup($requestId, $message, "SUCCESSFUL");
            } else if (isset($paymentStatus) && $paymentStatus === "TF") {
                $response = $this->completeAirtelTopup($requestId, $message, "FAILED");
            }
        }

        return $transaction;
    }

    public function completeAirtelTopup($requestId, $payerMessage, $paymentStatus)
    {

        $transaction = DB::table('transactions')
            ->where('requestId', $requestId)
            ->first();

        if ($transaction->status !== "SUCCESSFUL" || $transaction->status !== "FAILED") {
            $transactions = DB::table('transactions')
                ->where(['requestId' => $requestId])
                ->update([
                    'responseTime' => DB::raw('CURRENT_TIMESTAMP'),
                    'status' => $paymentStatus,
                    'summary' => $payerMessage
                ]);

            if ($paymentStatus === "SUCCESSFUL") {
                $reciever = UsersController::getSelectedUserProfile($transaction->userId);
                $recieverCurrency = Currency::where("country_code", $reciever->country)->first();
                BalancesController::addDepositTransaction($transaction->userId, $transaction->userId, $transaction->gross, $transaction->fee, $transaction->net, $transaction->id, $recieverCurrency->code);
                BusinessApiController::updateTransactionStatus($transaction->id, $paymentStatus);
            }
            return array(
                'status' => 200,
                'data' => $transactions,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 200,
                'data' => $transaction,
                'message' => 'OK',
            );
        }
    }

    public function MtnMomoWebHook(Request $request)
    {
        $response = array();

        $financialTransactionId = $request->input('financialTransactionId');
        $externalId = $request->input('externalId');
        $amount = $request->input('amount');
        $currency = $request->input('currency');
        $payerMessage = $request->input('payerMessage');
        $payeeNote = $request->input('payeeNote');
        $status = $request->input('status');

        if (isset($status)) {
            $paymentRequestData = $this->loadTransactionReauestDetails($externalId);
            $requestId = $paymentRequestData->requestId;

            $paymentStatusData = MtnMomoController::Get_request_to_pay_status($requestId);
            $paymentStatusData = json_decode($paymentStatusData, true);
            $paymentStatus = $paymentStatusData['status'];

            if (isset($paymentStatus)) {
                $response = $this->completeMTNTopup($requestId, $payerMessage, $paymentStatus);
            }
        }
        echo json_encode($response);
    }

    public function MtnDisbursementMomoWebHook(Request $request)
    {
        $response = array();

        $financialTransactionId = $request->input('financialTransactionId');
        $externalId = $request->input('externalId');
        $amount = $request->input('amount');
        $currency = $request->input('currency');
        $payerMessage = $request->input('payerMessage');
        $payeeNote = $request->input('payeeNote');
        $status = $request->input('status');

        if (isset($status)) {
            $paymentRequestData = $this->loadTransactionReauestDetails($externalId);
            $requestId = $paymentRequestData->requestId;

            $paymentStatusData = MtnMomoController::Get_disbursement_transfer_status($requestId);
            $paymentStatusData = json_decode($paymentStatusData, true);
            $paymentStatus = $paymentStatusData['status'];

            if (isset($paymentStatus)) {
                $response = $this->completeMTNTransfer($requestId, $payerMessage, $paymentStatus);
            }
        }
        echo json_encode($response);
    }
}
