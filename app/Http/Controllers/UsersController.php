<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserLocation;
use App\Models\UserPlace;
use App\Http\Controllers\CampaignsController;
use Illuminate\Support\Facades\DB;
use App\Models\File;

use Illuminate\Support\Facades\Http;


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


    public static function getUserPlaceDetails($place_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        $url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' . $place_id . '&key=' . env('GOOGLE_MAPS_API_KEY');

        if (UserPlace::where('place_id', $place_id)->exists()) {

            if (UserPlace::where('user_id', $userId)->where('place_id', $place_id)->exists()) {
                return array(
                    'status' => 200,
                    'data' => UserPlace::where('user_id', $userId)->where('place_id', $place_id)->first(),
                    'message' => 'OK'
                );
            }

            $mUserPlace = UserPlace::where('place_id', $place_id)->first();

            $userPlace = new UserPlace;
            $userPlace->user_id = $userId;
            $userPlace->name = $mUserPlace->name;
            $userPlace->place_id = $mUserPlace->place_id;
            $userPlace->latitude = $mUserPlace->latitude;
            $userPlace->longitude = $mUserPlace->longitude;
            $userPlace->address = $mUserPlace->address;
            $userPlace->save();

            return array(
                'status' => 200,
                'data' =>  $mUserPlace,
                'message' => 'OK'
            );
        }

        $response = json_decode(file_get_contents($url), true);

        $result = $response['result'];
        $geometry = $result['geometry'];
        $location = $geometry['location'];

        $latitude = $location['lat'];
        $longitude = $location['lng'];
        $formatted_address = $result['formatted_address'];
        $name = $result['name'];

        $userPlace = new UserPlace;
        $userPlace->user_id = $userId;
        $userPlace->name = $name;
        $userPlace->place_id = $place_id;
        $userPlace->latitude = $latitude;
        $userPlace->longitude = $longitude;
        $userPlace->address = $formatted_address;
        $userPlace->save();

        return array(
            'status' => 200,
            'data' => $userPlace,
            'message' => 'OK'
        );
    }

    public static function getUserPlaces()
    {
        $user = auth()->user();
        $userId = $user->id;

        $userPlaces = UserPlace::where('user_id', $userId)->orderByRaw('id DESC LIMIT 25')->get();
        return array(
            'status' => 200,
            'data' => $userPlaces,
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

    public static function getUserProfile()
    {
        $user = auth()->user();
        $userId = $user->id;

        User::where('id', $userId)
            ->update([
                'last_seen' => now() . '',
            ]);

        return User::where('users.id', $userId)
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->first(['users.*', 'currencies.code AS currency']);
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

        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        User::where('id', $userId)
            ->update(['profile_picture' => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first()), 'profile_picture_file_id' => $fileId]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function uploadUserCoverPhoto(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        User::where('id', $userId)
            ->update(['cover_picture' => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first()), 'cover_picture_file_id' => $fileId]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
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
