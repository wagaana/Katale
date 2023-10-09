<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PaymentMethodTariff;
use App\Models\PaymentMethodCurrency;

class PaymentMethodTariffController extends Controller
{
    public function addNewPaymentMethodCurrencyTariff(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $currency = new PaymentMethodTariff;
        $currency->userId = $userId;
        $currency->code = $request->input('code');
        $currency->currency = $request->input('currency');
        $currency->minAmmount = $request->input('minAmmount');
        $currency->maxAmmount = $request->input('maxAmmount');
        $currency->sending = $request->input('sending');
        $currency->withdraw = $request->input('withdraw');
        $currency->payments = $request->input('payments');
        $currency->minTax = $request->input('minTax');
        $currency->maxTax = $request->input('maxTax');
        $currency->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK',
        ), 200);
    }

    public function fetchPaymentMethodCurrencyTariffs($code)
    {
        $result = PaymentMethodTariff::where('deleted', 'false')
            ->where('code', $code)->get();

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function deletePaymentMethodCurrencyTariffs($tariffId)
    {
        $result = PaymentMethodTariff::where('id', $tariffId)
            ->update([
                "deleted" => 'true',
            ]);

        if (!$result) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Failed to delete Tariff, try again later...'
            ), 500);
        } else {
            return response()->json(array(
                'status' => 200,
                'message' => 'Your Tariff has been updated.'
            ), 200);
        }
    }

    public function updatePaymentMethodCurrencyConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $payment_methods = PaymentMethodCurrency::where('code', $request->input('paymentMethodCode'))
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return response()->json(array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        ), 200);
    }

    public function updatePaymentMethodTariffConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $payment_methods = PaymentMethodTariff::where('code', $request->input('paymentMethodCode'))
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return response()->json(array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        ), 200);
    }

    public function updatePaymentMethodCurrencyTariff(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = PaymentMethodTariff::where('id', $request->input('id'))
            ->update([
                'userId' => $userId,
                'minAmmount' => $request->input('minAmmount'),
                'maxAmmount' => $request->input('maxAmmount'),
                'sending' => $request->input('sending'),
                'withdraw' => $request->input('withdraw'),
                'payments' => $request->input('payments'),
                'minTax' => $request->input('minTax'),
                'maxTax' => $request->input('maxTax'),
            ]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK',
            'code' => $result
        ), 200);
    }

    public static function calculatePaymentMethodCurrencyTariffPlan($amount, $code)
    {
        $result = PaymentMethodTariff::where('deleted', 'false')
            ->where('code', $code)
            ->where('minAmmount', '<=', $amount)
            ->where('maxAmmount', '>=', $amount)
            ->first();

        return $result;
    }

    public function fetchPaymentMethodCurrencyTariffPlan(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $amount = $request->header('amount');
        $code = $request->header('code');
        $result = self::calculatePaymentMethodCurrencyTariffPlan($amount, $code);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK',
            'data' => $result
        ), 200);
    }
}
