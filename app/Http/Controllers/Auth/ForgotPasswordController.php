<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function submitForgetPasswordForm(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
        ]);

        $token = Str::random(64);

        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);

        $user = User::where('email', $request->email)->first();
        $resetLink = env('APP_URL') . "/authHandler?mode=resetPassword&token=$token";

        Mail::send('email.forgetPassword', [
            'resetLink' => $resetLink,
            'name' => $user->name,
            'buttonLabel' => 'Reset Password',
            'title' => 'Reset Your Password',
            'email_message' => 'You are receiving this email because we received a password reset request for your account.',
            'footer' => 'If you did not request a password reset, no further action is required.',
        ], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Reset Password');
        });

        $response = ['data' => '', 'message' => 'We have e-mailed your password reset link!'];
        return response($response, 200);
    }

    public function resetPassword(Request $request)
    {
        //some validation
        $password = $request->password;
        $token = $request->token;
        $tokenData = DB::table('password_resets')->where('token', $token)->first();

        $user = User::where('email', $tokenData->email)->first();
        if (!$user) return redirect()->to('home'); //or wherever you want

        $user->password = Hash::make($password);
        $user->update(); //or $user->save();

        // If the user shouldn't reuse the token later, delete the token 
        DB::table('password_resets')->where('email', $user->email)->delete();

        $response = [
            'data' => '', 'message' => 'Your Password has been updated'
        ];
        return response(
            $response,
            200
        );
    }
}
