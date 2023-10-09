<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserLocation;
use App\Http\Controllers\CampaignsController;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function loadSystemUsers()
    {
        return User::all();
    }

    public static function loadCampaignTargetUsers($targetId)
    {
        $targetDetails = CampaignsController::loadCampaignTargetDetails($targetId);

        $payload = $targetDetails['payload'];
        $targetParameters = $payload->target;
        $query = "SELECT * FROM users";
        if (!empty($targetParameters)) {
            $query = "SELECT * FROM users WHERE ";
        }

        for ($i = 0; $i < sizeof($targetParameters); $i++) {
            $targetParameter = $targetParameters[$i];
            if ($i === 0) {
                $query = $query . $targetParameter->field . " "  . $targetParameter->mCondition . "'" . $targetParameter->value . "'";
            } else {
                $query = $query . ' AND ' . $targetParameter->field . " " . $targetParameter->mCondition . " '" . $targetParameter->value . "'";
            }
        }

        $data = DB::select($query);
        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }


    public static function searchUsers($queryText)
    {
        $user = auth()->user();
        $userId = $user->id;
        $data = User::where('name', 'like', '%' . $queryText . '%')
            ->where('id', '!=', $userId)
            ->orderByRaw('name DESC LIMIT 10')->get();
        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }


    public static function getAdminUsers()
    {
        return User::where('level', 2)->get();
    }


    public static function getSelectedUserProfile($userId)
    {
        return User::where('id', $userId)->first();
    }

    public static function getUserProfileByUserName($user_name)
    {
        return User::where('user_name', $user_name)->first();
    }

    public static function updateUserProfileValue(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::table('users')
            ->where(['id' => $userId])
            ->update([
                $request->input('editSubject') => $request->input('editValue'),
                'last_seen' => now() . '',
            ]);

        if (!$result) {
            return array(
                'status' => 500,
                'message' => 'Failed to update profile, try again later...'
            );
        } else {
            return array(
                'status' => 200,
                'message' => 'Your profile has been updated.'
            );
        }
    }

    public function saveUserAvator(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        if (isset($path)) {
            $result = DB::table('users')
                ->where(['id' => $userId])
                ->update([
                    'profile_picture' => $path,
                    'last_seen' => now() . '',
                ]);

            if (!$result) {
                return array(
                    'status' => 500,
                    'message' => 'File could not be saved.'
                );
            } else {
                return array(
                    'status' => 200,
                    'imageName' => $path,
                    'message' => 'File uploaded complete.'
                );
            }
        } else {
            return array(
                'status' => 500,
                'response' => $path,
                'message' => 'Please try again later.'
            );
        }
    }

    public function uploadUserCoverPhoto(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        if (isset($path)) {
            $result = DB::table('users')
                ->where(['id' => $userId])
                ->update([
                    'cover_picture' => $path,
                    'last_seen' => now() . '',
                ]);

            if (!$result) {
                return array(
                    'status' => 500,
                    'message' => 'File could not be saved.'
                );
            } else {
                return array(
                    'status' => 200,
                    'imageName' => $path,
                    'message' => 'File uploaded complete.'
                );
            }
        } else {
            return array(
                'status' => 500,
                'response' => $path,
                'message' => 'Please try again later.'
            );
        }
    }

    public function updateUserAddress(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $address = $request->input('address');
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');

        $result = DB::table('users')
            ->where(['id' => $userId])
            ->update([
                'address_label' => $address,
                'address_latitude' => $latitude,
                'address_longitude' => $longitude,
                'last_seen' => now() . '',
            ]);

        if (!$result) {
            return array(
                'status' => 500,
                'message' => 'Failed to update profile, try again later...'
            );
        } else {
            return array(
                'status' => 200,
                'message' => 'Your profile has been updated.'
            );
        }
    }

    public function updateUserLocation(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');

        $result = DB::table('users')
            ->where(['id' => $userId])
            ->update([
                'latitude' => $latitude,
                'longitude' => $longitude,
                'last_seen' => now() . '',
            ]);

        if ($result) {
            $userLocation = new UserLocation;
            $userLocation->userId = $userId;
            $userLocation->latitude = $latitude;
            $userLocation->longitude = $longitude;
            $userLocation->save();

            return array(
                'status' => 200,
                'queryID' => $userLocation,
                'message' => 'Your profile has been updated.'
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Failed to update profile, try again later...'
            );
        }
    }
}
