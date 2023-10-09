<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\Application;

class ApplicationController extends Controller
{
    public function submitApplication(Request $request)
    {
        $name = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        $user = auth()->user();
        $userId = $user->id;
        $application = new Application;
        $application->label = $request->input('label');
        $application->description = $request->input('description');
        $application->app_token = self::get_uuid();
        $application->userId = $userId;
        $application->imageUrl = $path;
        $application->save();

        return array(
            'status' => 200,
            'data' => $application->all(),
            'message' => 'OK',
        );
    }

    public function updateApplicationCallbackURL(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $application = Application::where('id', $request->input('appId'))
            ->update([
                'callbackURL' => $request->input('callbackURL'),
            ]);

        $postData = array(
            'status' => 200,
            'data' => $application,
            'message' => 'Callback URL Updated',
        );
        return response()->json($postData, 200);
    }

    public function DeleteApplication($appId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $application = Application::where('id', $appId)
            ->update([
                'deleterId' => $userId,
                'deleted' => 'true',
                'deleteTime' => now(),
            ]);

        $postData = array(
            'status' => 200,
            'data' => $application,
            'message' => 'Application has been deleted.',
        );
        return response()->json($postData, 200);
    }

    public static function loadMyApplications()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = Application::join('users', 'applications.userId', '=', 'users.id')
            ->where('applications.deleted', 'false')
            ->orderBy('applications.created_at', 'desc')
            ->where('applications.userId', $userId)
            ->get(['applications.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK',
        );

        return response()->json($postData, 200);
    }

    public static function loadMyApplicationDetails($applicationId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = Application::join('users', 'applications.userId', '=', 'users.id')
            ->where('applications.deleted', 'false')
            ->orderBy('applications.created_at', 'desc')
            ->where('applications.userId', $userId)
            ->where('applications.id', $applicationId)
            ->first(['applications.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK',
        );

        return response()->json($postData, 200);
    }
}
