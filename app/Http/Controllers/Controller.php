<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    private $privateKeyPath = "C:\Users\dell\workspace\web\Exchange\private_key.pem";
    private $privateKeyPassword = "Nsiimbi@2023";

    protected static function get_uuid()
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

    protected function decryptData($encryptedData, $encryptedKey, $encryptedIV)
    {
        $privateKey = openssl_pkey_get_private(file_get_contents($this->privateKeyPath), $this->privateKeyPassword);
        $decryptedKey = null;
        openssl_private_decrypt(base64_decode($encryptedKey), $decryptedKey, $privateKey);

        // Check if $decryptedKey is binary, and convert if necessary
        if (!$this->is_binary($decryptedKey)) {
            $decryptedKey = $this->convertToBinary($decryptedKey);
        }

        $decryptedIV = null;
        openssl_private_decrypt(base64_decode($encryptedIV), $decryptedIV, $privateKey);

        // Check if $decryptedIV is binary, and convert if necessary
        if (!$this->is_binary($decryptedIV)) {
            $decryptedIV = $this->convertToBinary($decryptedIV);
        }

        $decryptedData = openssl_decrypt(base64_decode($encryptedData), 'AES-256-CBC', $decryptedKey, OPENSSL_RAW_DATA, $decryptedIV);
        return $decryptedData;
    }

    private function is_binary($data)
    {
        return preg_match('~[^\x20-\x7E\t\r\n]~', $data) > 0;
    }

    private function convertToBinary($data)
    {
        $binaryData = '';
        $decodedData = json_decode($data, true);
        foreach ($decodedData["words"] as $word) {
            $binaryData .= pack("N", $word);
        }
        return $binaryData;
    }

    protected function decryptWithPrivateKey($encryptedData)
    {
        $privateKey = openssl_pkey_get_private(file_get_contents($this->privateKeyPath), $this->privateKeyPassword);

        // Convert the base64-encoded encrypted data to bytes
        $encryptedDataBytes = base64_decode($encryptedData);

        $decryptedKey = null;
        openssl_private_decrypt($encryptedDataBytes, $decryptedKey, $privateKey);

        return $decryptedKey;
    }

    protected static function distance($lat1, $lon1, $lat2, $lon2, $unit)
    {

        $theta = $lon1 - $lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;
        $unit = strtoupper($unit);

        if ($unit == "K") {
            return ($miles * 1.609344);
        } else if ($unit == "N") {
            return ($miles * 0.8684);
        } else {
            return $miles;
        }
    }
}
