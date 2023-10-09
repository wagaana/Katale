<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PayPalController extends Controller
{

    private static function generateAccessTocken()
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api-m.paypal.com/v1/oauth2/token",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_USERPWD => env('PAYPAL_CLIENT_ID') . ":" . env('PAYPAL_SECRET'),
            CURLOPT_POSTFIELDS => "grant_type=client_credentials",
            CURLOPT_HTTPHEADER => array(
                "Accept: application/json",
                "Accept-Language: en_US"
            ),
        ));

        $result = curl_exec($curl);

        $response = json_decode($result, true);

        curl_close($curl);
        return $response;
    }

    public static function initPaymentRequest($gross, $fee, $net, $description, $currency_code)
    {
        $authData = self::generateAccessTocken();
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-m.paypal.com/v2/checkout/orders',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => '{
            "intent": "CAPTURE",
            "purchase_units": [
                {
                    "description": "' . $description . '",
                    "items": [
                        {
                            "name": "Gross",
                            "quantity": 1,
                            "unit_amount": { "currency_code": "' . $currency_code . '", "value": ' . $gross . ' }
                        },
                        {
                            "name": "Transaction Fee",
                            "quantity": 1,
                            "unit_amount": { "currency_code": "' . $currency_code . '", "value": ' . $fee . ' }
                        }
                    ],
                    "amount": {
                        "currency_code": "' . $currency_code . '",
                        "value": "' . $net . '",
                        "breakdown": {
                            "item_total": {
                                "currency_code": "' . $currency_code . '",
                                "value": ' . $net . '
                            }
                        }
                }
                }
            ],
            "application_context":{
                    "brand_name": "' . env('COMPANY_NAME') . '",
                    "return_url": "' . env('PAYPAL_RETURN_URL') . '",
                    "cancel_url": "' . env('PAYPAL_CANCEL_URL') . '",
                    "user_action": "PAY_NOW"
                }
            }',
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'Authorization: Bearer ' . $authData['access_token']
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return $response;
    }

    public static function capturePaymentStatus($requestId)
    {
        $authData = self::generateAccessTocken();
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-m.paypal.com/v2/checkout/orders/' . $requestId . '/capture',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'PayPal-Request-Id: ' . $requestId,
                'Authorization: Bearer ' . $authData['access_token']
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return $response;
    }

    public static function getOrderInfo($requestId)
    {
        $authData = self::generateAccessTocken();
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-m.paypal.com/v2/checkout/orders/' . $requestId,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer ' . $authData['access_token']
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return $response;
    }
}
