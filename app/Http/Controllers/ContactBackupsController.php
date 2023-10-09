<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactBackup;
use Illuminate\Support\Facades\DB;

class ContactBackupsController extends Controller
{

    public function synchronizeContact(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $id = $request->input('id');
        $name = $request->input('name');
        $phoneNumber = $request->input('phoneNumber');
        $countryCode = $request->input('countryCode');
        $country = $request->input('country');
        $imageUrl = $request->input('imageUrl');
        $status = $request->input('status');

        if ($this->contactNotExists($phoneNumber, $userId)) {
            $contactBackup = new ContactBackup;
            $contactBackup->userId = $userId;
            $contactBackup->name = $name;
            $contactBackup->phoneNumber = $phoneNumber;
            $contactBackup->countryCode = $countryCode;
            $contactBackup->country = $country;
            $contactBackup->imageUrl = $imageUrl;
            $contactBackup->status = $status;
            $contactBackup->save();
        }

        return array(
            'status' => 200,
            'id' => $id,
            'error' => false,
            'message' => 'OK',
        );
    }

    private function contactNotExists($phoneNumber, $userId)
    {
        try {
            $data = DB::table('contact_backups')
                ->where('phoneNumber', $phoneNumber)
                ->where('userId', $userId)
                ->first();
            return empty($data->id);
        } catch (\Exception $e) {
            return true;
        }
    }

    public function getContactsUsers()
    {
        $user = auth()->user();
        $userId = $user->id;

        $users = DB::select("SELECT users.id
            , users.name
            , users.email
            , users.phone
            , users.email_verified_at
            , users.place_id
            , users.location_label
            , users.latitude
            , users.longitude
            , users.trackingEnabled
            , users.address_label
            , users.address_country_code
            , users.address_country
            , users.address_placeId
            , users.address_latitude
            , users.address_longitude
            , users.user_name
            , users.company_description
            , users.company_email
            , users.company_phone
            , users.website
            , users.language
            , users.level
            , users.account_type
            , users.dob
            , users.gender
            , users.email_verified
            , users.phone_verified
            , users.profile_picture
            , users.cover_picture
            , users.about
            , users.app_version_code
            , users.app_version
            , users.wallet_balance
            , users.outstanding_payments
            , users.last_seen
            , users.created_at
            , users.updated_at FROM users INNER JOIN contact_backups ON users.phone=contact_backups.phoneNumber AND users.id!=:id AND contact_backups.userId=:userId", ['id' => $userId, 'userId' => $userId]);

        return
            array(
                'status' => 200,
                'data' => $users,
                'message' => 'OK'
            );
    }
}
