<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bank;
use App\Models\BankCurrency;
use App\Models\BankCurrencyTariff;
use Illuminate\Support\Facades\DB;

class BanksController extends Controller
{
    public function createBank(Request $request)
    {
        $name = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        $user = auth()->user();
        $userId = $user->id;
        $bank = new Bank;
        $bank->label = $request->input('label');
        $bank->country = $request->input('country');
        $bank->description = $request->input('description');
        $bank->code = $request->input('code');
        $bank->userId = $userId;
        $bank->image = $path;
        $bank->save();

        return array(
            'status' => 200,
            'message' => 'OK',
        );
    }

    public function image($filepath)
    {
        return asset(str_replace('-', '/', $filepath));
    }

    public function loadActiveBanks()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT * FROM banks WHERE status = 'ACTIVE'");
        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function loadAllBanks()
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT * FROM banks");
        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchBank($code)
    {

        $result = DB::table('banks')
            ->where('code', $code)
            ->first();

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchBankStatistics($code)
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

    public function createNewBankCurrency(Request $request)
    {
        $user = auth()->user();
        $currency = new BankCurrency;
        $currency->code = $request->input('currency') . "_" . $request->input('bank');
        $currency->currency = $request->input('currency');
        $currency->bank = $request->input('bank');
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

    public function loadBankCurencies($bank)
    {
        $user = auth()->user();
        $userId = $user->id;
        $result = DB::select("SELECT bank_currencies.code, bank_currencies.currency,bank, bank_currencies.buy, bank_currencies.exchangeRate, bank_currencies.sell, name, depositTariffEnabled, withdrowTariffEnabled,depositChargesEnabled,bank_currencies.transactionFee,maxWithdrowLimit,minWithdrowLimit,maxDepositLimit,minDepositLimit, chargePercentage,bank_currencies.transactionFee, entity, minorUnit, numericCode, bank_currencies.userId, bank_currencies.deleterId, bank_currencies.created_at, bank_currencies.deleted, bank_currencies.deleteTime FROM bank_currencies, currencies WHERE currencies.code=bank_currencies.currency AND bank_currencies.bank=:bank", ['bank' => $bank]);

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function loadBankCurencyDetails($code)
    {
        $result = collect(DB::select("SELECT * FROM bank_currencies WHERE code=:code", ['code' => $code]))->first();
        if ($result) {
            return $result;
        } else {
            return null;
        }
    }

    public function deleteActiveBankCurrency($code)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::table('bank_currencies')
            ->where(['code' => $code])
            ->delete();
        if ($result) {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function updateBankConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $banks = DB::table('banks')
            ->where(['code' => $request->input('bankCode')])
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return array(
            'status' => 200,
            'data' => $banks,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        );
    }

    public function updateBankLocationConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $banks = DB::table('banks')
            ->where(['code' => $request->input('bankCode')])
            ->update([
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longitude')
            ]);

        return array(
            'status' => 200,
            'data' => $banks,
            'message' => 'Location has been updated.'
        );
    }

    public function updateBankCurrencyConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $payment_methods = BankCurrency::where('code', $request->input('paymentMethodCode'))
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return response()->json(array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        ), 200);
    }

    public function addNewBankCurrencyTariff(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $currency = new BankCurrencyTariff;
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

    public function fetchBankCurrencyTariffs($code)
    {
        $result = BankCurrencyTariff::where('deleted', 'false')
            ->where('code', $code)->get();

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function deleteBankCurrencyTariffs($tariffId)
    {
        $result = BankCurrencyTariff::where('id', $tariffId)
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

    public function updateBankCurrencyTariffConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        //update
        $payment_methods = BankCurrencyTariff::where('code', $request->input('paymentMethodCode'))
            ->update([$request->input('activeFieldId') => $request->input('activeFieldValue')]);

        return response()->json(array(
            'status' => 200,
            'data' => $payment_methods,
            'message' => $request->input('activeFieldLabel') . ' has been updated.'
        ), 200);
    }

    public function updateBankCurrencyTariff(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = BankCurrencyTariff::where('id', $request->input('id'))
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

    public static function calculateBankCurrencyTariffPlan($amount, $code)
    {
        $result = BankCurrencyTariff::where('deleted', 'false')
            ->where('code', $code)
            ->where('minAmmount', '<=', $amount)
            ->where('maxAmmount', '>=', $amount)
            ->first();

        return $result;
    }

    public function fetchBankCurrencyTariffPlan(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $amount = $request->header('amount');
        $code = $request->header('code');
        $result = self::calculateBankCurrencyTariffPlan($amount, $code);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK',
            'data' => $result
        ), 200);
    }
}
