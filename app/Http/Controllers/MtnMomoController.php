<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use HTTP_Request2;
use HTTP_Request2_Exception;

class MtnMomoController extends Controller
{
    private static function create_uuid()
    {
        return sprintf(
            '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',

            // 32 bits for "time_low"
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),

            // 16 bits for "time_mid"
            mt_rand(0, 0xffff),

            // 16 bits for "time_hi_and_version",
            // four most significant bits holds version number 4
            mt_rand(0, 0x0fff) | 0x4000,

            // 16 bits, 8 bits for "clk_seq_hi_res",
            // 8 bits for "clk_seq_low",
            // two most significant bits holds zero and one for variant DCE1.1
            mt_rand(0, 0x3fff) | 0x8000,

            // 48 bits for "node"
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff)
        );
    }

    private static function get_collections_access_token()
    {
        $httpResponse = null;
        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/collection/token/');
        $request->setMethod(HTTP_Request2::METHOD_POST);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Ocp-Apim-Subscription-Key' => env('MOMO_COLLECTION_OCP_APIM_SUBSCRIPTION_KEY'),
            'Authorization' => 'Basic ' . base64_encode(env('MOMO_UG_CLIENT_ID') . ":" . env('MOMO_UG_CLIENT_API_KEY'))
        ));
        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse =  $response->getBody();
            } else {
                $httpResponse =  'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse =  'Error: ' . $e->getMessage();
        }
        return $httpResponse;
    }

    public static function get_disbursement_access_token()
    {
        $httpResponse = null;
        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/disbursement/token/');
        $request->setMethod(HTTP_Request2::METHOD_POST);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Ocp-Apim-Subscription-Key' => env('MOMO_DISBURSEMENT_OCP_APIM_SUBSCRIPTION_KEY'),
            'Authorization' => 'Basic ' . base64_encode(env('MOMO_DISBURSEMENT_UG_CLIENT_ID') . ":" . env('MOMO_DISBURSEMENT_UG_CLIENT_API_KEY'))
        ));

        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse =  $response->getBody();
            } else {
                $httpResponse =  'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse =  'Error: ' . $e->getMessage();
        }
        return $httpResponse;
    }


    public static function transfer($msisdn, $currency, $amount, $payerMessage, $payeeNote, $externalId)
    {
        $httpResponse = null;
        $referenceId = self::create_uuid();

        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/disbursement/v1_0/transfer');
        $request->setMethod(HTTP_Request2::METHOD_POST);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'X-Reference-Id' => $referenceId,
            'Ocp-Apim-Subscription-Key' => env('MOMO_DISBURSEMENT_OCP_APIM_SUBSCRIPTION_KEY'),
            'X-Target-Environment' => env('MOMO_TARGET_ENVIRONMENT'),
            'X-Callback-Url' => env('MOMO_UG_DISBURSEMENT_RETURN_URL'),
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . json_decode(self::get_disbursement_access_token(), true)["access_token"]
        ));

        $request->setBody('{
            "amount": "' . $amount . '",
            "currency": "' . $currency . '",
            "externalId": "' . $externalId . '",
            "payee": {
                "partyIdType": "MSISDN",
                "partyId": "' . $msisdn . '"
            },
            "payerMessage": "' . $payerMessage . '",
            "payeeNote": "' . $payeeNote . '"
            }');

        try {
            $response = $request->send();
            if ($response->getStatus() == 202) {
                $httpResponse = $response->getBody();
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
                    $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }

        return array(
            'status' => "CREATED",
            'id' => $referenceId,
            'response' => $response->getBody(),
            'message' => $httpResponse !== null ? $httpResponse : "Try again later"
        );
    }

    public static function request_to_pay($msisdn, $currency, $amount, $payerMessage, $payeeNote, $externalId)
    {
        $httpResponse = null;
        $referenceId = self::create_uuid();

        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/collection/v1_0/requesttopay');
        $request->setMethod(HTTP_Request2::METHOD_POST);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'X-Reference-Id' => $referenceId,
            'Ocp-Apim-Subscription-Key' => env('MOMO_COLLECTION_OCP_APIM_SUBSCRIPTION_KEY'),
            'X-Target-Environment' => env('MOMO_TARGET_ENVIRONMENT'),
            'X-Callback-Url' => env('MOMO_UG_RETURN_URL'),
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . json_decode(self::get_collections_access_token(), true)["access_token"]
        ));

        $request->setBody('{
            "amount": "' . $amount . '",
            "currency": "' . $currency . '",
            "externalId": "' . $externalId . '",
            "payer": {
                "partyIdType": "MSISDN",
                "partyId": "' . $msisdn . '"
            },
            "payerMessage": "' . $payerMessage . '",
            "payeeNote": "' . $payeeNote . '"
            }');

        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse = $response->getBody();
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
                    $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }

        return array(
            'status' => "CREATED",
            'id' => $referenceId,
            'mtnResponse' => $httpResponse,
            'message' => $httpResponse !== null ? "Your Request has been sent" : "Try again later"
        );
    }

    public static function Get_request_to_pay_status($refID)
    {
        $httpResponse = null;
        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/collection/v1_0/requesttopay/' . $refID);
        $request->setMethod(HTTP_Request2::METHOD_GET);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));
        $request->setHeader(array(
            'X-Target-Environment: ' . env('MOMO_TARGET_ENVIRONMENT'),
            'Ocp-Apim-Subscription-Key: ' . env('MOMO_COLLECTION_OCP_APIM_SUBSCRIPTION_KEY'),
            'Authorization: Bearer ' . json_decode(self::get_collections_access_token(), true)["access_token"]
        ));
        $request->setBody('');
        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse = $response->getBody();
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
                    $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }
        return $httpResponse;
    }

    public static function Get_disbursement_transfer_status($refID)
    {
        $httpResponse = null;

        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/disbursement/v1_0/transfer/' . $refID);
        $request->setMethod(HTTP_Request2::METHOD_GET);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Ocp-Apim-Subscription-Key' => env('MOMO_DISBURSEMENT_OCP_APIM_SUBSCRIPTION_KEY'),
            'X-Target-Environment' => env('MOMO_TARGET_ENVIRONMENT'),
            'Authorization' => 'Bearer ' . json_decode(self::get_disbursement_access_token(), true)["access_token"]
        ));
        $request->setBody('');
        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse = $response->getBody();
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }
        return $httpResponse;
    }

    public static function AccountBalance()
    {
        $httpResponse = null;
        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/collection/v1_0/account/balance');
        $request->setMethod(HTTP_Request2::METHOD_GET);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));
        $request->setHeader(array(
            'X-Target-Environment' => env('MOMO_TARGET_ENVIRONMENT'),
            'Ocp-Apim-Subscription-Key' => env('MOMO_COLLECTION_OCP_APIM_SUBSCRIPTION_KEY'),
            'Authorization' => 'Bearer ' . json_decode(self::get_collections_access_token(), true)["access_token"]
        ));
        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse = $response->getBody();
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' . $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }
        return $httpResponse;
    }

    public static function ValidatePhoneNumber($msisdn)
    {
        $httpResponse = null;
        $request = new HTTP_Request2();
        $request->setUrl('https://proxy.momoapi.mtn.com/collection/v1_0/accountholder/msisdn/' . $msisdn . '/active');
        $request->setMethod(HTTP_Request2::METHOD_GET);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));
        $request->setHeader(array(
            'X-Target-Environment' => env('MOMO_TARGET_ENVIRONMENT'),
            'Ocp-Apim-Subscription-Key' => env('MOMO_COLLECTION_OCP_APIM_SUBSCRIPTION_KEY'),
            'Authorization' => 'Bearer ' . json_decode(self::get_collections_access_token(), true)["access_token"]
        ));
        $request->setBody('');
        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse = $response->getBody();
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
                    $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }
        return $httpResponse;
    }
}
