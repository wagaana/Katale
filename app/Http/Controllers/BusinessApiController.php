<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BusinessApiRequest;
use App\Models\Application;
use App\Models\Transaction;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use HTTP_Request2;
use App\Models\Currency;
use Mockery\Undefined;

class BusinessApiController extends Controller
{
    public function requestToPay(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $recieverCurrency = Currency::where("country_code", $user->country)->first();

        $appPrivateKey = $request->header('App-Private-Key');
        $callBack = $request->header('Callback-URL');
        $redirectUrl = $request->header('Redirect-URL');

        $appResult = Application::join('users', 'applications.userId', '=', 'users.id')
            ->where('applications.deleted', 'false')
            ->where('applications.userId', $userId)
            ->where('applications.app_token', $appPrivateKey)
            ->first(['applications.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $ammount = $request->input('ammount');
        $externalKey = $request->input('externalKey');
        $message = $request->input('message');

        if ($appResult !== null) {
            $businessApiRequest = new BusinessApiRequest;
            $businessApiRequest->userId = $userId;
            $businessApiRequest->request_token = self::get_uuid();
            $businessApiRequest->applicationId = $appResult->id;
            $businessApiRequest->externalKey = $externalKey;
            $businessApiRequest->ammount = $ammount;
            $businessApiRequest->country = $user->country;
            $businessApiRequest->currency = $recieverCurrency->code;
            $businessApiRequest->message = $message;
            $businessApiRequest->callback = $callBack;
            $businessApiRequest->redirectUrl = $redirectUrl;
            $businessApiRequest->save();

            $payload = array(
                'request_token' => $businessApiRequest->request_token,
                'payment_url' => env('APP_URL') . "/payments/" . $businessApiRequest->request_token,
            );

            return response()->json($payload, 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Unknown Application',
            ), 500);
        }
    }

    public function requestToPayStatus($request_token)
    {
        $user = auth()->user();
        $userId = $user->id;

        $businessApiRequest = BusinessApiRequest::where('request_token', $request_token)
            ->where('userId', $userId)
            ->first();

        if ($businessApiRequest !== null) {
            return response()->json(array(
                "request_token" => $businessApiRequest->request_token,
                "ammount" => $businessApiRequest->ammount,
                "externalKey" => $businessApiRequest->externalKey,
                "status" => $businessApiRequest->status
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Unknown request',
            ), 500);
        }
    }

    public function getRequestToPayRequest($request_token)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = BusinessApiRequest::join('applications', 'business_api_requests.applicationId', '=', 'applications.id')
            ->where('request_token', $request_token)
            ->first(['business_api_requests.*', 'applications.label', 'applications.description', 'applications.imageUrl']);

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK',
        );

        return response()->json($postData, 200);
    }

    public function payWithMyWallet(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $password = $this->decryptWithPrivateKey($request->input('password'));
        $request_token = $request->input('request_token');

        $isPasswordCorrect = Hash::check($password, $user->password);
        if ($isPasswordCorrect) {
            $businessApiRequest = BusinessApiRequest::join('applications', 'business_api_requests.applicationId', '=', 'applications.id')
                ->where('request_token', $request_token)
                ->first([
                    'business_api_requests.*', 'applications.userId AS recieverId', 'applications.id AS appId',
                    'applications.label', 'applications.description', 'applications.imageUrl', 'applications.callbackURL'
                ]);
            if ($businessApiRequest !== null) {
                if ($businessApiRequest->status === "CREATED") {
                    $timestamp = round(microtime(true) * 1000);

                    $recieverId = $businessApiRequest->recieverId;
                    $netToSend = (float) $businessApiRequest->ammount;
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

                    $transactionId = self::get_uuid();

                    if ((int) $recieverId !== (int) $userId) {
                        BusinessApiRequest::where('request_token', $request_token)
                            ->update([
                                'transactionId' => $transactionId
                            ]);

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
                            $transaction->status = 'SUCCESSFUL';
                            $transaction->requestId = $request_token;
                            $transaction->description = 'Wallet Transfer';
                            $transaction->transactionKey = 'TRANSFER';
                            $transaction->externalId = $request_token;
                            $transaction->currency = $currency;
                            $transaction->save();

                            $senderAcc = UsersController::getSelectedUserProfile($userId);
                            $recieverAcc = UsersController::getSelectedUserProfile($recieverId);

                            $recieverCurrency = Currency::where("country_code", $recieverAcc->country)->first();
                            $senderCurrency = Currency::where("country_code", $senderAcc->country)->first();

                            BalancesController::addSendMoneyTransaction($userId, $recieverId, $grossToCharge, $feeToCharge, $netToCharge, $netToSend, $transactionId, $senderCurrency->code, $recieverCurrency->code);
                            BusinessApiRequest::where('transactionId', $transactionId)
                                ->update([
                                    'status' => 'SUCCESSFUL'
                                ]);
                            self::sendCallBackToClient($businessApiRequest->callback !== null ? $businessApiRequest->callback : $businessApiRequest->callbackURL, $netToSend, $businessApiRequest->externalKey, 'SUCCESSFUL', $request_token);

                            return array(
                                'status' => 200,
                                'message' => 'OK',
                                'data' => array(
                                    'payment_method' => 'SYSTEM',
                                    'message' => 'We have sent you an email with our bank information.'
                                )
                            );
                        } else {
                            if ($netToCharge <= $feeToCharge) {
                                return array(
                                    'status' => 200,
                                    'message' => 'Minimum Transaction should be above ' . $feeToCharge,
                                    'data' => array(
                                        'payment_method' => 'SYSTEM',
                                        'message' => 'We have sent you an email with our bank information.'
                                    )
                                );
                            } else {
                                return array(
                                    'status' => 200,
                                    'message' => 'Insuficient Balance',
                                    'data' => array(
                                        'payment_method' => 'SYSTEM',
                                        'message' => 'We have sent you an email with our bank information.'
                                    )
                                );
                            }
                        }
                    } else {
                        return response()->json(array(
                            'status' => 500,
                            'message' => 'Forbiden Transaction Request, use another account',
                        ), 500);
                    }
                } else {
                    return response()->json(array(
                        'status' => 500,
                        'message' => 'This request was completed',
                    ), 500);
                }
            } else {
                return response()->json(array(
                    'status' => 500,
                    'message' => 'Unregisterd tocken was provided',
                ), 500);
            }
        } else {
            return response()->json(array(
                'status' => 403,
                'message' => 'Invalid Password Provided',
            ), 403);
        }
    }

    public function payWithPaymentGateway(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $password = $this->decryptWithPrivateKey($request->input('password'));
        $request_token = $request->input('request_token');

        $isPasswordCorrect = Hash::check($password, $user->password);
        if ($isPasswordCorrect) {
            $businessApiRequest = BusinessApiRequest::join('applications', 'business_api_requests.applicationId', '=', 'applications.id')
                ->where('request_token', $request_token)
                ->first([
                    'business_api_requests.*', 'applications.userId AS recieverId', 'applications.id AS appId',
                    'applications.label', 'applications.description', 'applications.imageUrl', 'applications.callbackURL'
                ]);
            if ($businessApiRequest !== null) {
                if ($businessApiRequest->status === "CREATED") {
                    $recieverId = $businessApiRequest->recieverId;
                    $netToSend = (float)  $businessApiRequest->ammount;
                    $paymentMethod = $request->input('payment_method');
                    $paymentMethodCurrency = $request->input('payment_method_currency');
                    $description = $request->input('description');
                    $conditionValue = $request->input('conditionValue');
                    $balanceWithWallet = $request->input('balanceWithWallet');

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

                    // Calculate gross amount in the sender's currency
                    $gross = ($netToSend + $fee) * $exchange_rate;

                    // Use the receiver's currency code
                    $currency = $senderCurrency->code;

                    if ($balanceWithWallet === "true") {
                        if ($gross > $accountBalance) {
                            $txnAmmount = $gross - $accountBalance;
                            $gross = $txnAmmount;
                        }
                    }

                    $transactionId = self::get_uuid();

                    if ((int) $recieverId !== (int) $userId) {
                        BusinessApiRequest::where('request_token', $request_token)
                            ->update([
                                'transactionId' => $transactionId,
                                'balanceWithWallet' => $balanceWithWallet === null ? 'false' : $balanceWithWallet,
                            ]);

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
                                $transaction->externalId = $transactionId;
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
                                $currency = $data->currency;

                                $requestPayload = MtnMomoController::request_to_pay($conditionValue, $currency, $net, "Orders", "Nsiimbi", $transactionId);
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
                                $transaction->externalId = $transactionId;
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
                                    $transaction->requestId = $transactionId;
                                    $transaction->description = $conditionValue;
                                    $transaction->transactionKey = 'CREDIT';
                                    $transaction->externalId = $transactionId;
                                    $transaction->currency = $currency;
                                    $transaction->save();

                                    $senderAcc = UsersController::getSelectedUserProfile($userId);
                                    $recieverAcc = UsersController::getSelectedUserProfile($recieverId);

                                    $recieverCurrency = Currency::where("country_code", $recieverAcc->country)->first();
                                    $senderCurrency = Currency::where("country_code", $senderAcc->country)->first();

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
                                        'status' => 500,
                                        'message' => 'Invalid reference provided.',
                                        'data' => array(
                                            'payment_method' => $paymentMethod,
                                            'message' => 'Invalid reference provided.'
                                        )
                                    );
                                }
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
                                $currency = $data->currency;

                                $msisdn = preg_replace(
                                    '/\+(?:998|996|995|994|993|992|977|976|975|974|973|972|971|970|968|967|966|965|964|963|962|961|960|886|880|856|855|853|852|850|692|691|690|689|688|687|686|685|683|682|681|680|679|678|677|676|675|674|673|672|670|599|598|597|595|593|592|591|590|509|508|507|506|505|504|503|502|501|500|423|421|420|389|387|386|385|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|291|290|269|268|267|266|265|264|263|262|261|260|258|257|256|255|254|253|252|251|250|249|248|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|218|216|213|212|211|98|95|94|93|92|91|90|86|84|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44\D?1624|44\D?1534|44\D?1481|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1\D?939|1\D?876|1\D?869|1\D?868|1\D?849|1\D?829|1\D?809|1\D?787|1\D?784|1\D?767|1\D?758|1\D?721|1\D?684|1\D?671|1\D?670|1\D?664|1\D?649|1\D?473|1\D?441|1\D?345|1\D?340|1\D?284|1\D?268|1\D?264|1\D?246|1\D?242|1)\D?/',
                                    '',
                                    '+' . $conditionValue
                                );
                                $requestPayload = AirtelMoneyController::merchantPayments($msisdn, $currency, $net, "UG", "Nsiimbi", $transactionId);
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
                                $transaction->externalId = $transactionId;
                                $transaction->currency = $currency;
                                $transaction->save();

                                $response = array(
                                    'status' => 200,
                                    'status' => 200,
                                    'message' => 'OK',
                                    'response' => $requestPayload,
                                    'data' => array(
                                        'payment_method' => $paymentMethod,
                                        'message' => isset($requestPayload['message']) ? $requestPayload['message'] : "Try Again Later."
                                    )
                                );
                                break;

                            default:
                                $response = array(
                                    'status' => 500,
                                    'message' => 'Invalid payment gateway'
                                );
                        }
                        return response()->json($response, $response['status']);
                    } else {
                        return response()->json(array(
                            'status' => 500,
                            'message' => 'Forbiden Transaction Request, use another account',
                        ), 500);
                    }
                } else {
                    return response()->json(array(
                        'status' => 500,
                        'message' => 'This request was completed',
                    ), 500);
                }
            } else {
                return response()->json(array(
                    'status' => 500,
                    'message' => 'Unregisterd tocken was provided',
                ), 500);
            }
        } else {
            return response()->json(array(
                'status' => 403,
                'message' => 'Invalid Password Provided',
            ), 403);
        }
    }

    public static function updateTransactionStatus($transactionId, $status)
    {
        $businessApiRequest = BusinessApiRequest::join('applications', 'business_api_requests.applicationId', '=', 'applications.id')
            ->where('transactionId', $transactionId)
            ->first([
                'business_api_requests.*', 'applications.userId AS recieverId', 'applications.id AS appId', 'applications.label',
                'applications.description', 'applications.imageUrl', 'applications.callbackURL'
            ]);

        $transaction = Transaction::where('id', $transactionId)->first();
        $userId = $transaction->userId;

        if ($businessApiRequest !== null) {
            $recieverId = $businessApiRequest->recieverId;
            $net = (float) $businessApiRequest->ammount;
            $loadStebleCurency = PaymentMethodsController::loadStebleCurency();
            $fee = $loadStebleCurency['data']->transactionFee;
            $gross = $net - $fee;
            $currency = $loadStebleCurency['data']->currency;


            $accountBalance = BalancesController::getUserAccountBalance($userId);
            if ($net <= $accountBalance && $net > $fee) {

                $senderAcc = UsersController::getSelectedUserProfile($userId);
                $recieverAcc = UsersController::getSelectedUserProfile($recieverId);

                $recieverCurrency = Currency::where("country_code", $recieverAcc->country)->first();
                $senderCurrency = Currency::where("country_code", $senderAcc->country)->first();

                $result = BalancesController::addTransaction($userId, $businessApiRequest->recieverId, $gross, $fee, $net, $transactionId, $senderCurrency->code, $recieverCurrency->code);
                if ($result) {
                    BusinessApiRequest::where('transactionId', $transactionId)
                        ->update([
                            'status' => $status
                        ]);
                    self::sendCallBackToClient($businessApiRequest->callback !== null ? $businessApiRequest->callback : $businessApiRequest->callbackURL, $net, $businessApiRequest->externalKey, $status, $businessApiRequest->request_token);
                }
            } else {
                if ($net <= $fee) {
                    return array(
                        'status' => 200,
                        'message' => 'Minimum Transaction should be above ' . $fee,
                        'data' => array(
                            'payment_method' => 'SYSTEM',
                            'message' => 'We have sent you an email with our bank information.'
                        )
                    );
                } else {
                    return array(
                        'status' => 200,
                        'message' => 'Insuficient Balance',
                        'data' => array(
                            'payment_method' => 'SYSTEM',
                            'message' => 'We have sent you an email with our bank information.'
                        )
                    );
                }
            }
        }
    }

    private static function sendCallBackToClient($callBackUrl, $ammount, $externalKey, $status, $request_token)
    {

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $callBackUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array('request_token' => $request_token, 'ammount' => $ammount, 'externalKey' => $externalKey, 'status' => $status),
            CURLOPT_HTTPHEADER => array(
                'Accept: multipart/form-data',
                'Content-Type: multipart/form-data',
                'accept-encoding: application/gzip'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return $response;
    }
}
