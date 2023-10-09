<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use HTTP_Request2;
use HTTP_Request2_Exception;

class AirtelMoneyController extends Controller
{
    protected string $country    = 'UG';
    protected string $currency   = 'UGX';
    protected static string $public_key = <<<PK
    -----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkq3XbDI1s8Lu7SpUBP+bqOs/MC6PKWz6n/0UkqTiOZqKqaoZClI3BUDTrSIJsrN1Qx7ivBzsaAYfsB0CygSSWay4iyUcnMVEDrNVOJwtWvHxpyWJC5RfKBrweW9b8klFa/CfKRtkK730apy0Kxjg+7fF0tB4O3Ic9Gxuv4pFkbQIDAQAB
    -----END PUBLIC KEY-----
    PK;

    public static function getAccessTocken()
    {
        $httpResponse = null;
        $request = new HTTP_Request2();

        $request->setUrl(env('AIRTEL_MONEY_API') . '/auth/oauth2/token');
        $request->setMethod(HTTP_Request2::METHOD_POST);

        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Content-Type' => ' application/json',
            'Accept' => '*/*'
        ));

        $request->setBody('{
              "client_id": "' . env('AIRTEL_MONEY_CLIENT_ID') . '",
              "client_secret": "' . env('AIRTEL_MONEY_CLIENT_SECRET') . '",
              "grant_type": "client_credentials"
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
        return $httpResponse;
    }

    public static function merchantPayments($msisdn, $currency, $amount, $country, $payeeNote, $externalId)
    {
        $httpResponse = null;

        $request = new HTTP_Request2();

        $request->setUrl(env('AIRTEL_MONEY_API') . '/merchant/v1/payments/');
        $request->setMethod(HTTP_Request2::METHOD_POST);

        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Content-Type' => 'application/json',
            'Accept' => '*/*',
            'X-Country' => $country,
            'X-Currency' => $currency,
            'Authorization' => 'Bearer ' . json_decode(self::getAccessTocken(), true)["access_token"]
        ));

        $request->setBody('{
              "reference": "' . $payeeNote . '",
              "subscriber": {
                "country": "' . $country . '",
                "currency": "' . $currency . '",
                "msisdn": ' . $msisdn . '
              },
              "transaction": {
                "amount": ' . $amount . ',
                "country": "' . $country . '",
                "currency": "' . $currency . '",
                "id": "' . $externalId . '"
              }
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
            'id' => $externalId,
            'response' => $httpResponse
        );
    }

    public function paymentsRefund($country, $currency, $airtel_money_id)
    {
        $httpResponse = null;
        $request = new HTTP_Request2();
        $request->setUrl(env('AIRTEL_MONEY_API') . '/standard/v1/payments/refund');
        $request->setMethod(HTTP_Request2::METHOD_POST);

        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Content-Type' => 'application/json',
            'Accept' => '*/*',
            'X-Country' => $country,
            'X-Currency' => $currency,
            'Authorization' => 'Bearer ' . json_decode(self::getAccessTocken(), true)["access_token"]
        ));

        $request->setBody('{
              "transaction": {
                "airtel_money_id": "' . $airtel_money_id . '"
              }
            }
        ');

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

    public static function txnEnquiry($country, $currency, $txnId)
    {
        $httpResponse = null;
        $request = new HTTP_Request2();

        $request->setUrl(env('AIRTEL_MONEY_API') . '/standard/v1/payments/' . $txnId);
        $request->setMethod(HTTP_Request2::METHOD_GET);

        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Accept' => '*/*',
            'X-Country' => $country,
            'X-Currency' => $currency,
            'Authorization' => 'Bearer ' . json_decode(self::getAccessTocken(), true)["access_token"]
        ));

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

    public static function disbursements($msisdn, $currency, $amount, $country, $payeeNote, $externalId)
    {
        $httpResponse = null;
        $request = new HTTP_Request2();

        $request->setUrl(env('AIRTEL_MONEY_API') . '/standard/v1/disbursements/');
        $request->setMethod(HTTP_Request2::METHOD_POST);
        $request->setConfig(array(
            'follow_redirects' => TRUE
        ));

        $request->setHeader(array(
            'Content-Type' => 'application/json',
            'Accept' => '*/*',
            'X-Country' => $country,
            'X-Currency' => $currency,
            'Authorization' => 'Bearer ' . json_decode(self::getAccessTocken(), true)["access_token"]
        ));

        $request->setBody('{
          "payee": {
            "msisdn": ' . $msisdn . '
          },
          "reference": "' . $externalId . '",
          "pin": "' . self::getEncryptedPin() . '",
          "transaction": {
            "amount": ' . $amount . ',
            "id": "' . $externalId . '"
          }
        }');

        try {
            $response = $request->send();
            if ($response->getStatus() == 200) {
                $httpResponse = json_decode($response->getBody(), true);
            } else {
                $httpResponse = 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
                    $response->getReasonPhrase();
            }
        } catch (HTTP_Request2_Exception $e) {
            $httpResponse = 'Error: ' . $e->getMessage();
        }

        return array(
            'id' => $externalId,
            'status' => $httpResponse['status']['code'] === "200" ? "SUCCESSFUL" : "FAILED",
            'response' => $httpResponse,
            'message' => $httpResponse['status']['code'] === "200" ? "SUCCESSFUL" : "FAILED",
            'text' => $httpResponse['status']['message']
        );
    }

    public static function getEncryptedPin()
    {
        // Load public key
        $publicKey = openssl_pkey_get_public(array(self::$public_key, ''));
        if (!$publicKey) {
            echo 'Public key NOT Correct';
        }

        if (!openssl_public_encrypt(env('AIRTEL_MONEY_PIN'), $encrypted, $publicKey)) {
            echo 'Error encrypting with public key';
        }

        return base64_encode($encrypted);
    }
}
