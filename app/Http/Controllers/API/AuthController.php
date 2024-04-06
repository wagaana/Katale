<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Models\AccountRequest;
use App\Models\User;

class AuthController extends Controller
{
    public function request_account(Request $request)
    {
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);

        $jsonDecryptedData = json_decode($decryptedData, true);

        $validator = Validator::make($jsonDecryptedData, [
            'name' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|min:10'
        ]);

        if (User::where('email', $jsonDecryptedData['email'])->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'Account with this email exists.'
            ), 401);
        }

        if ($validator->fails()) {
            return response()->json($validator->errors(), 403);
        }

        $randomNumber = random_int(100000, 999999);
        $token = $this->get_uuid();

        $jsonDecryptedData['otp'] = $randomNumber;

        $accountRequest = AccountRequest::create([
            'name' => $jsonDecryptedData['name'],
            'country' => $jsonDecryptedData['country'],
            'email' => $jsonDecryptedData['email'],
            'phone' => $jsonDecryptedData['phone'],
            'otp' =>  $jsonDecryptedData['otp'],
            'token' => $token,
        ]);

        if ($accountRequest) {
            Mail::send('email.verifyEmail', [
                'otp' => $jsonDecryptedData['otp'],
                'name' => $jsonDecryptedData['name'],
                'title' => 'Verify Your Email',
                'email_message' => 'We received a request to create an account on Nsiimbi using this email address. Use the following token to complete the request.',
                'footer' => 'If you did not request an account creation, no further action is required.',
            ], function ($message) use ($jsonDecryptedData) {
                $message->to($jsonDecryptedData['email']);
                $message->subject($jsonDecryptedData['otp'] . ' is your email verification token');
            });

            return response()->json(array(
                'status' => 200,
                'token' => $token,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function verify_email(Request $request)
    {
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);

        $jsonDecryptedData = json_decode($decryptedData, true);

        $validator = Validator::make($jsonDecryptedData, [
            'otp' => 'required|string|min:6',
            'token' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 403);
        }

        if (!AccountRequest::where('otp', $jsonDecryptedData['otp'])->where('token', $jsonDecryptedData['token'])->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'Wrong token'
            ), 401);
        }

        $accountRequest = AccountRequest::where('otp', $jsonDecryptedData['otp'])->where('token', $jsonDecryptedData['token'])->update([
            'otp_verified'  => 'true',
        ]);

        if ($accountRequest) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function register(Request $request)
    {
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);

        $jsonDecryptedData = json_decode($decryptedData, true);

        $validator = Validator::make($jsonDecryptedData, [
            'token' => 'required|string',
            'password' => 'required|string|min:8',
            'pin' => 'required|digits:4'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 403);
        }

        if (!AccountRequest::where('otp_verified', 'true')->where('token', $jsonDecryptedData['token'])->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'Wrong token'
            ), 401);
        }

        $accountRequest = AccountRequest::where('otp_verified', 'true')->where('token', $jsonDecryptedData['token'])->first();

        $user_name = lcfirst(preg_replace('/[.,\s]/', '', $accountRequest->name));
        $i = 0;
        while (User::where('user_name', $user_name)->exists()) {
            $i++;
            $user_name = $user_name . $i;
        }

        $user = User::create([
            'name' => $accountRequest->name,
            'user_name' => $user_name,
            'email' => $accountRequest->email,
            'password' => Hash::make($jsonDecryptedData['password']),
            'pin' => Hash::make($jsonDecryptedData['pin']),
            'country' => $accountRequest->country,
            'phone' => $accountRequest->phone,
            'profile_picture' => env('APP_URL') . '/images/default_profile.png',
            'cover_picture' => env('APP_URL') . '/images/default_cover.jpg'
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]);
    }

    public function login(Request $request)
    {
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);

        $jsonDecryptedData = json_decode($decryptedData, true);

        $validator = Validator::make($jsonDecryptedData, [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 403);
        }

        if (!User::where('email', $jsonDecryptedData['email'])->exists()) {
            return response()->json(array(
                'status' => 501,
                'message' => 'Account with this email doesent exists.'
            ), 501);
        }

        $credentials = [
            'email' => $jsonDecryptedData['email'],
            'password' => $jsonDecryptedData['password']
        ];

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $jsonDecryptedData['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['message' => 'Hi ' . $user->name . ', welcome to home', 'access_token' => $token, 'token_type' => 'Bearer',]);
    }

    public function authenticatePin(Request $request)
    {
        $user = auth()->user();
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);
        $jsonDecryptedData = json_decode($decryptedData, true);

        $isPasswordCorrect = Hash::check($jsonDecryptedData['pin'], $user->pin);

        if ($isPasswordCorrect) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 403,
                'message' => 'Invalid PIN Provided',
            ), 403);
        }
    }

    public function setNewPin(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);
        $jsonDecryptedData = json_decode($decryptedData, true);

        $isPasswordCorrect = Hash::check($jsonDecryptedData['password'], $user->password);

        if ($isPasswordCorrect) {
            $result = User::where('id', $userId)
                ->update([
                    'pin' => Hash::make($jsonDecryptedData['pin'])
                ]);

            if (!$result) {
                return response()->json(array(
                    'status' => 500,
                    'message' => 'Failed to update PIN, try again later...'
                ), 500);
            } else {
                return response()->json(array(
                    'status' => 200,
                    'message' => 'OK'
                ), 200);
            }
        } else {
            return response()->json(array(
                'status' => 403,
                'message' => 'Wrong Password was Provided',
            ), 403);
        }
    }

    // method for user logout and delete token
    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
    }
}
