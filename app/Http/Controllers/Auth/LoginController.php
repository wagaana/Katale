<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function resetApiKey(Request $request)
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
        $user->generateToken();
        $userData = $user->toArray();
        $account = collect(DB::select("SELECT * FROM users WHERE id=:id", ['id' => $userData['id']]))->first();

        return response()->json([
            'data' => array(
                'name' => $userData['name'],
                'email' => $userData['email'],
                'phone' => $userData['phone'],
                'user_name' => $userData['user_name']
            ),
            'api_token' => $account->api_token
        ]);

        return $this->sendFailedLoginResponse();
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();

        if ($user) {
            $user->api_token = null;
            $user->save();
        }

        return response()->json(
            ['data' => 'User logged out.'],
            200
        );
    }

    protected function sendFailedLoginResponse()
    {
        $errors = ['error' => trans('auth.failed')];

        return response()->json($errors, 422);
    }
}
