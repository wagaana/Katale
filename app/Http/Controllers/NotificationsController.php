<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\UsersController;

class NotificationsController extends Controller
{
    /*Notification media*/
    public static $notification_media_fcm = "FCM";
    public static $notification_media_email = "EMAIL";
    public static $notification_media_all = "ALL";

    /*notification keys*/
    public static $notification_key_new_delivery_request = "new_delivery_request";
    public static $notification_key_new_shopping_product_comment_reply = "new_shopping_product_comment_reply";

    public function notifyAdmins($senderId, $notificationKey, $message, $iconUrl, $tocken)
    {
        $admins = UsersController::getAdminUsers();
        for ($i = 0; $i < sizeof($admins); $i++) {
            $admin = $admins[$i];
            self::saveNotification($senderId, $admin->id, $this->notification_media_all, $notificationKey, $message, $iconUrl, $tocken);
        }
    }

    public static function saveNotification($senderId, $recieverId, $media, $notificationKey, $message, $iconUrl = null, $tocken = null)
    {
        $timestamp = round(microtime(true) * 1000);
        $user = auth()->user();
        $userId = $user->id;

        $id = self::get_uuid();

        $notification = new Notification;
        $notification->id = $id;
        $notification->senderId = $senderId;
        $notification->recieverId = $recieverId;
        $notification->media = $media;
        $notification->notificationKey = $notificationKey;
        $notification->message = $message;
        $notification->iconUrl = $iconUrl;
        $notification->tocken = $tocken;
        $notification->save();

        if ($notification) {
            return array(
                'status' => 200,
                'id' => $id,
                'message' => 'OK'
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Faied to send notification.'
            );
        }
    }

    public function fetchUserNotifications()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::select("SELECT notifications.id, senderId, recieverId, media, status, tocken, notificationKey, message, iconUrl, deleted, notifications.created_at AS creationTime, deleterId, deleteTime, users.id AS userId, phone, email, place_id, location_label,
        latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance  FROM notifications, users WHERE users.id=notifications.senderId AND notifications.deleted='false' AND notifications.recieverId='" . $userId . "'  ORDER BY notifications.id DESC LIMIT 25");

        $data = array();
        for ($i = 0; $i < sizeof($result); $i++) {
            $data_array = array();
            $roww = $result[$i];
            if ($roww) {
                if ($roww['notificationKey'] === $this->notification_key_new_delivery_request) {
                    $senderAccount = UsersController::getSelectedUserProfile($roww['senderId'])['data'];
                    $roww['title'] = "New delivery Reauest";
                    $roww['message'] = "New Reauest from " . $senderAccount['userName'];
                }
                $data_array = $roww;
                array_push($data, $data_array);
            }
        }

        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }

    public function fetchUnNewNotifications()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::select("SELECT notifications.id, senderId, recieverId, media, status, tocken, notificationKey, message, iconUrl, deleted, notifications.created_at AS creationTime, deleterId, deleteTime, users.id AS userId, phone, email, place_id, location_label,
        latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM notifications, users WHERE users.id=notifications.senderId AND notifications.deleted='false' AND notifications.status='SENT' AND notifications.recieverId='" . $userId . "'  ORDER BY notifications.id DESC LIMIT 25");

        $data = array();
        for ($i = 0; $i < sizeof($result); $i++) {
            $data_array = array();
            $roww = $result[$i];
            if ($roww) {
                if ($roww['notificationKey'] === $this->notification_key_new_delivery_request) {
                    $senderAccount = UsersController::getSelectedUserProfile($roww['senderId'])['data'];
                    $roww['title'] = "New delivery Reauest";
                    $roww['message'] = "New Reauest from " . $senderAccount['userName'];
                }
                $data_array = $roww;
                array_push($data, $data_array);
            }
        }

        $this->markDeliverd($userId);

        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }

    private function markDeliverd($userId)
    {
        return
            DB::table('notifications')
            ->where(['recieverId' => $userId])
            ->update([
                'status' => 'DELIVERD',
            ]);
    }
}
