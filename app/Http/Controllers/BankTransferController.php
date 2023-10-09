<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BankTransferController extends Controller
{
    public static function capturePaymentStatus($requestId)
    {
        $requestStatus = "CREATED";

        return array(
            'status' => 'COMPLETED',
            'message' => 'Location has been updated.'
        );
    }
}
