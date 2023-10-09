<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);

        $jsonDecryptedData = json_decode($decryptedData, true);

        $validator = Validator::make($jsonDecryptedData, [
            'name' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'pin' => 'required|digits:4'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 403);
        }

        $user_name = lcfirst(preg_replace('/[.,\s]/', '', $jsonDecryptedData['name']));
        $i = 0;
        while (User::where('user_name', $user_name)->exists()) {
            $i++;
            $user_name = $user_name . $i;
        }

        $user = User::create([
            'name' => $jsonDecryptedData['name'],
            'user_name' => $user_name,
            'email' => $jsonDecryptedData['email'],
            'password' => Hash::make($jsonDecryptedData['password']),
            'pin' => Hash::make($jsonDecryptedData['pin']),
            'country' => $jsonDecryptedData['country']
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]);
    }

    public function login(Request $request)
    {
        $decryptedData = $this->decryptData($request->data, $request->key, $request->iv);

        $jsonDecryptedData = json_decode($decryptedData, true);

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
