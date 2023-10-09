<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use BlockIo\Client;
use App\Models\CryptoWallet;
use App\Models\CryptoAddress;
use App\Models\File;

class BlockIOController extends Controller
{
    public function get_balance()
    {
        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        return $block_io->get_balance();
    }

    public function get_address_balance($cryptoWalletCode)
    {
        $user = auth()->user();
        $user_name = $user->user_name;

        $block_io = new Client(env($cryptoWalletCode), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        $data =  $block_io->get_address_balance(array('labels' => $user_name));
        /*{
            "status": "success",
            "data": {
                "network": "BTC",
                "available_balance": "0.00000000",
                "pending_received_balance": "0.00000000",
                "balances": [
                    {
                        "user_id": 3,
                        "label": "admin",
                        "address": "3Qhw2PkFTY78jjRVvi43V4AX3ENNXFNvqp",
                        "available_balance": "0.00000000",
                        "pending_received_balance": "0.00000000"
                    }
                ]
            }
        }*/
        return array(
            'network'  => $data->data->network,
            'available_balance'  => $data->data->available_balance,
            'pending_received_balance'  => $data->data->pending_received_balance,
            'address'  => $data->data->balances[0]->address,
            'status' => 200,
            'message' => $data->status
        );
    }

    public function is_valid_address($address)
    {
        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        return $block_io->is_valid_address(array('address' => $address));
    }

    public function get_crypto_assets()
    {

        $data = CryptoWallet::all();

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public static function get_crypto_asset_info($wallet)
    {
        $data = CryptoWallet::where('code', $wallet)->first();

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function get_my_crypto_address_info($wallet)
    {
        $user = auth()->user();
        $user_name = $user->user_name;
        $data = null;
        if ($wallet !== "null") {
            $data = CryptoAddress::where('address_label', $user_name)
                ->where('wallet', $wallet)
                ->first();
        } else {
            $data = CryptoAddress::where('address_label', $user_name)
                ->orderBy('lastBalance', 'DESC')
                ->first();
        }
        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function get_my_addresses()
    {
        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        return $block_io->get_my_addresses();
    }

    public function get_address_by_label($label)
    {
        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        return $block_io->get_address_by_label(array('label' => $label));
    }

    public function create_new_crypto_wallet($cryptoWalletCode)
    {
        $user = auth()->user();
        $user_name = $user->user_name;
        $userId = $user->id;

        $data = CryptoAddress::where('address_label', $user_name)
            ->where('wallet', $cryptoWalletCode)
            ->first();

        if ($data === null) {
            $block_io = new Client(env($cryptoWalletCode), env('BLOCK_PIN'), env('BLOCK_VERSION'));
            $addressData = $block_io->get_new_address(array('label' => $user_name));
            /*{
                "status": "success",
                "data": {
                    "network": "BTCTEST",
                    "user_id": 3,
                    "address": "2NGXkiRXD2juWSHkPcYeDqrS2K1ApGQhnNy",
                    "label": "alex"
                }
            }*/
            if ($addressData->status === "success") {
                $cryptoAddress = new CryptoAddress;
                $cryptoAddress->wallet = $cryptoWalletCode;
                $cryptoAddress->address = $addressData->data->address;
                $cryptoAddress->address_label = $addressData->data->label;
                $cryptoAddress->userId = $userId;
                $cryptoAddress->save();

                return array(
                    'data' => CryptoAddress::where('address_label', $user_name)
                        ->where('wallet', $cryptoWalletCode)
                        ->first(),
                    'status' => 200,
                    'message' => 'OK'
                );
            } else {
                return array(
                    'status' => 500,
                    'message' => 'Error'
                );
            }
        } else {
            return array(
                'data' => $data,
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function prepare_system_transaction(Request $request)
    {
        $amount = $request->input('amount');
        $from_label = $request->input('from_label');
        $to_labels = $request->input('to_labels');

        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        return $block_io->prepare_transaction(array('amounts' => $amount, 'from_labels' => $from_label, 'to_labels' => $to_labels));

        /*{
            "status": "success",
            "data": {
                "network": "BTC",
                "tx_type": "basic",
                "inputs": [
                    {
                        "input_index": 0,
                        "previous_txid": "8f612aee9e2af1be414248a158dfe4b2a4cd8305dea9a9a59bd6485005998ac9",
                        "previous_output_index": 1,
                        "input_value": "0.00006734",
                        "spending_address": "3E6rnm7zPTMttVgbwr9drRfCgP2g6gYEsN"
                    }
                ],
                "outputs": [
                    {
                        "output_index": 0,
                        "output_category": "user-specified",
                        "output_value": "0.00001000",
                        "receiving_address": "32uVDCCwdBsXoSwUhhadqgVx4PwugL7VaJ"
                    },
                    {
                        "output_index": 1,
                        "output_category": "change",
                        "output_value": "0.00003468",
                        "receiving_address": "3E6rnm7zPTMttVgbwr9drRfCgP2g6gYEsN"
                    }
                ],
                "input_address_data": [
                    {
                        "required_signatures": 2,
                        "public_keys": [
                            "02d4f96d3f800ab99d6223de4521b1c46d17603b8ec0fdbf0347f2803e9f300494",
                            "02c08b3cb2973ce7ec1c48752726cd6c2ee0df44865ab775c6f9d780ec93e78917"
                        ],
                        "address": "3E6rnm7zPTMttVgbwr9drRfCgP2g6gYEsN",
                        "address_type": "P2WSH-over-P2SH"
                    }
                ],
                "user_key": {
                    "public_key": "02c08b3cb2973ce7ec1c48752726cd6c2ee0df44865ab775c6f9d780ec93e78917",
                    "encrypted_passphrase": "We9ZWcLc+CBTKoWcw8qQGxU8osdDUn1dn7BbdkkqWYn2XF+j3nx3y43rY9GH3WAfs2fhBbqwP3lWG+cwzQwht9fK8E8l5NGfDjhkVNkfJQ9cDBzloFNLRYN0ESuRG8H2QBDa2GZ9AshYiSnK6By63TjVZFNOVd5vfQNxSg4b3sE=",
                    "algorithm": {
                        "pbkdf2_salt": "6e048ee2c7ab4d23584a43f83d399bfb",
                        "pbkdf2_iterations": 102400,
                        "pbkdf2_hash_function": "SHA256",
                        "pbkdf2_phase1_key_length": 16,
                        "pbkdf2_phase2_key_length": 32,
                        "aes_iv": "3188d9d24fbf052702c51f0e",
                        "aes_cipher": "AES-256-GCM",
                        "aes_auth_tag": "370c3bed12c6488c2cb2f86e63cb0411",
                        "aes_auth_data": ""
                    }
                },
                "estimated_tx_size": 206,
                "expected_unsigned_txid": "f76874361c6e266a3497d791da02ff8d5f67d7a7a377c7dadda3bc9a4dd65d03"
            }
        }*/
    }

    public function prepare_user_transaction(Request $request, $cryptoWalletCode)
    {
        $user = auth()->user();
        $user_name = $user->user_name;

        $data = CryptoAddress::where('address_label', $user_name)
            ->where('wallet', $cryptoWalletCode)
            ->first();

        $from_address = $data->address;

        $amount = $request->input('amount');
        $to_address = $request->input('address');

        $block_io = new Client(env($cryptoWalletCode), env('BLOCK_PIN'), env('BLOCK_VERSION'));

        $balance_data =  $block_io->get_address_balance(array('labels' => $user_name));
        $available_balance = $balance_data->data->available_balance;
        $get_network_fee_estimate = $this->get_network_fee_estimate($amount, $to_address, $cryptoWalletCode);

        $network_fee_estimate = $get_network_fee_estimate['data']['estimated_network_fee'];
        $estimated_min_custom_network_fee = $get_network_fee_estimate['data']['estimated_min_custom_network_fee'];
        $estimated_max_custom_network_fee = $get_network_fee_estimate['data']['estimated_max_custom_network_fee'];
        $muximun_acceptable_amount = (float) $available_balance + (float) $estimated_max_custom_network_fee;

        if ((float) $amount > $muximun_acceptable_amount || $available_balance < $estimated_max_custom_network_fee) {

            return array(
                'status_code' => 201,
                'network_fee' => $estimated_max_custom_network_fee,
                'available_balance' => $available_balance,
                'amount' => $amount,
                'message' => 'This transaction can spend between ' . $estimated_min_custom_network_fee . $balance_data->data->network . ' and ' . $estimated_max_custom_network_fee . $balance_data->data->network .
                    ' in network fees, and your current balance is ' . $available_balance . $balance_data->data->network . '. Buy more ' . $balance_data->data->network . ' and try again.'
            );
        } else {
            $requestData = $block_io->prepare_transaction(array('amounts' => $amount, 'from_addresses' => $from_address, 'to_addresses' => $to_address, 'priority' => 'custom', 'custom_network_fee' => $estimated_min_custom_network_fee));

            $requestData->status_code = 200;
            $requestData->network_fee = $network_fee_estimate;
            $requestData->message = 'You have prepared a transfer of ' . $amount . $requestData->data->network .
                ', with the network fees and charges ' . $requestData->data->inputs[0]->input_value . $requestData->data->network .
                ' will be transferd from your address.';
            return $requestData;
        }
    }

    public function summarize_prepared_transaction(Request $request)
    {
        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        //parse data from prepare transaction
        return $block_io->summarize_prepared_transaction($request->all());
    }

    public function get_transactions($cryptoWalletCode)
    {
        $user = auth()->user();
        $user_name = $user->user_name;

        $data = CryptoAddress::where('address_label', $user_name)
            ->where('wallet', $cryptoWalletCode)
            ->first();

        $addresses = $data->address;
        // $addresses = '3E6rnm7zPTMttVgbwr9drRfCgP2g6gYEsN';

        $block_io = new Client(env('BLOCK_BITCOIN'), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        //parse data from prepare transaction
        $receivedTransactions = $block_io->get_transactions(array('type' => 'received', 'addresses' => $addresses));
        $sentTransactions = $block_io->get_transactions(array('type' => 'sent', 'addresses' => $addresses));

        $transactions = array();
        foreach ($receivedTransactions->data->txs as $key => $transaction) {
            $data_array = array(
                'txid' => $transaction->txid,
                'network' => $receivedTransactions->data->network,
                'type' => 'received',
                'from_green_address' => $transaction->from_green_address,
                'mTime' => $transaction->time,
                'confirmations' => $transaction->confirmations,
                'recipient' => $transaction->amounts_received[0]->recipient,
                'sender' => $transaction->senders[0],
                'amount' => $transaction->amounts_received[0]->amount,
                'confidence' => $transaction->confidence
            );
            $transactions[date('Y-m-d H:i:s', $data_array["mTime"])] = $data_array;
        }

        foreach ($sentTransactions->data->txs as $key => $transaction) {
            $data_array = array(
                'txid' => $transaction->txid,
                'network' => $receivedTransactions->data->network,
                'type' => 'sent',
                'from_green_address' => $transaction->from_green_address,
                'mTime' => $transaction->time,
                'confirmations' => $transaction->confirmations,
                'recipient' => $transaction->amounts_sent[0]->recipient,
                'sender' => $transaction->senders[0],
                'amount' => $transaction->amounts_sent[0]->amount,
                'confidence' => $transaction->confidence
            );
            $transactions[date('Y-m-d H:i:s', $data_array["mTime"])] = $data_array;
        }

        return array(
            'data' => $transactions,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function submit_transaction(Request $request, $cryptoWalletCode)
    {
        $block_io = new Client(env($cryptoWalletCode), env('BLOCK_PIN'), env('BLOCK_VERSION'));
        $transaction_data = $block_io->create_and_sign_transaction($request->all());
        return $block_io->submit_transaction(array('transaction_data' => $transaction_data));
        /*
            {
                "status": "success",
                "data": {
                    "network": "BTC",
                    "txid": "8f612aee9e2af1be414248a158dfe4b2a4cd8305dea9a9a59bd6485005998ac9"
                }
            }
        */
    }

    public function get_network_fee_estimate($amount, $to_addresses, $cryptoWalletCode)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://block.io/api/v2/get_network_fee_estimate/?api_key='
                . env($cryptoWalletCode) . '&amounts=' . $amount . '&to_addresses=' . $to_addresses,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $result = curl_exec($curl);

        curl_close($curl);

        return json_decode($result, true);
    }

    public function addnewCryptoAsset(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $name = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        if ($path) {
            $file = new File;
            $file->userId = $userId;
            $file->fileName = $path;
            $file->save();

            $cryptoWallet = new CryptoWallet;
            $cryptoWallet->code = $request->input('code');
            $cryptoWallet->currencyCode = $request->input('currencyCode');
            $cryptoWallet->label = $request->input('label');
            $cryptoWallet->description = $request->input('description');
            $cryptoWallet->exchangeRate = $request->input('exchangeRate');
            $cryptoWallet->buy = $request->input('buy');
            $cryptoWallet->sell = $request->input('sell');
            $cryptoWallet->chargePercentage = $request->input('chargePercentage');
            $cryptoWallet->transactionFee = $request->input('transactionFee');
            $cryptoWallet->directionPercentage = $request->input('directionPercentage');
            $cryptoWallet->userId = $userId;
            $cryptoWallet->image = $path;
            $cryptoWallet->save();
        }

        return array(
            'status' => 200,
            'message' => 'OK'
        );
    }
}
