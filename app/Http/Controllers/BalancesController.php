<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Balace;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class BalancesController extends Controller
{
    public static function addTransaction($from, $to, $gross, $fee, $net, $transactionId, $senderCurrency, $recieverCurrency)
    {
        $data = [
            ['userId' => $from, 'gross' => -(float) $gross, 'fee' => -(float) $fee, 'net' => -(float) $net, 'transactionId' => $transactionId, 'currency' => $senderCurrency, 'updated_at' => now(), 'created_at' => now()],
            ['userId' => $to, 'gross' => (float) $gross, 'fee' => 0, 'net' => (float) $gross, 'transactionId' => $transactionId, 'currency' => $recieverCurrency, 'updated_at' => now(), 'created_at' => now()],
        ];

        $balanceResult = Balace::insert($data);
        DB::table('users')
            ->where(['id' => $from])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($from),
            ]);
        DB::table('users')
            ->where(['id' => $to])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($to),
            ]);
        return $balanceResult;
    }

    public static function addSendMoneyTransaction($from, $to, $gross, $fee, $net, $netToSend, $transactionId, $senderCurrency, $recieverCurrency)
    {
        $data = [
            ['userId' => $from, 'gross' => -(float) $gross, 'fee' => -(float) $fee, 'net' => -(float) $net, 'transactionId' => $transactionId, 'currency' => $senderCurrency, 'updated_at' => now(), 'created_at' => now()],
            ['userId' => $to, 'gross' => (float) $netToSend, 'fee' => 0, 'net' => (float) $netToSend, 'transactionId' => $transactionId, 'currency' => $recieverCurrency, 'updated_at' => now(), 'created_at' => now()],
        ];

        $balanceResult = Balace::insert($data);
        DB::table('users')
            ->where(['id' => $from])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($from),
            ]);
        DB::table('users')
            ->where(['id' => $to])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($to),
            ]);
        return $balanceResult;
    }

    public static function addDepositTransaction($from, $to, $gross, $fee, $net, $transactionId, $currency)
    {
        $data = [
            ['userId' => $from, 'gross' => (float) $gross, 'fee' => (float) $fee > 0 ? -(float) $fee : (float) $fee, 'net' => (float) $net, 'transactionId' => $transactionId, 'currency' => $currency, 'updated_at' => now(), 'created_at' => now()],
        ];

        $balanceResult = Balace::insert($data);
        DB::table('users')
            ->where(['id' => $from])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($from),
            ]);
        DB::table('users')
            ->where(['id' => $to])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($to),
            ]);
        return $balanceResult;
    }

    public static function addCashOutTransaction($from, $gross, $fee, $net, $transactionId, $currency)
    {
        $data = [
            ['userId' => $from, 'gross' => -(float) $gross, 'fee' => -(float) $fee, 'net' => -(float) $net, 'transactionId' => $transactionId, 'currency' => $currency, 'updated_at' => now(), 'created_at' => now()],
        ];

        $balanceResult = Balace::insert($data);
        DB::table('users')
            ->where(['id' => $from])
            ->update([
                'wallet_balance' => BalancesController::getUserAccountBalance($from),
            ]);
        return $balanceResult;
    }

    public function getMyBalances()
    {
        $user = auth()->user();
        $userId = $user->id;
        $data = DB::table('balaces')->where('balaces.userId', $userId)
            ->join('transactions', 'balaces.transactionId', '=', 'transactions.id')
            ->join('users', 'transactions.userId', '=', 'users.id')
            ->join('payment_methods', 'transactions.provider', '=', 'payment_methods.code')
            ->select('balaces.*', 'payment_methods.label', 'payment_methods.image', 'users.name', 'transactions.status', 'transactions.userId AS transactionOwner', 'transactions.recieverId', 'transactions.provider', 'transactions.transactionKey')
            ->orderByRaw('created_at DESC LIMIT 8')
            ->get();

        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }

    public function getUserBalances($userId)
    {
        $data = DB::table('balaces')->where('balaces.userId', $userId)
            ->join('transactions', 'balaces.transactionId', '=', 'transactions.id')
            ->join('users', 'transactions.userId', '=', 'users.id')
            ->join('payment_methods', 'transactions.provider', '=', 'payment_methods.code')
            ->select('balaces.*', 'payment_methods.label', 'payment_methods.image', 'users.name', 'transactions.status', 'transactions.userId AS transactionOwner', 'transactions.recieverId', 'transactions.provider', 'transactions.transactionKey')
            ->orderByRaw('created_at DESC LIMIT 3')
            ->get();
        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }

    public static function getUserAccountBalance($userId)
    {
        return collect(DB::select("SELECT SUM(CASE
            WHEN gross<0
                THEN net
            WHEN gross>0
                THEN gross
        END) AS balance FROM balaces WHERE userId=:userId", ['userId' => $userId]))->first()->balance;
    }
}
