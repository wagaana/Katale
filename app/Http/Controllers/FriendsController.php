<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Friend;
use App\Models\Chat;
use App\Models\User;
use App\Models\Message;
use App\Models\ChatMember;
use App\Models\MessageContact;
use App\Models\MessageLocation;
use App\Models\File;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class FriendsController extends Controller
{

    public function createNewFriend(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $friendId = $request->input('friendId');
        $chat = $this->getChatID($userId, $friendId);

        $friend = new Friend;
        $friend->chatId = $chat['id'];
        $friend->friendId = $friendId;
        $friend->userId = $userId;
        $friend->save();

        return array(
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function getChatID($senderId, $recieverId)
    {
        $data = collect(DB::select("SELECT * FROM chats WHERE ((recieverId = '$recieverId' AND senderId = '$senderId') OR (recieverId = '$senderId' AND senderId = '$recieverId'))"))->first();

        if (!isset($data->id)) {
            $id = $this->get_uuid();
            $chat = new Chat;
            $chat->id = $id;
            $chat->senderId = $senderId;
            $chat->recieverId = $recieverId;
            $chat->save();

            $this->addChatMember($id, $senderId, $senderId);
            $this->addChatMember($id, $recieverId, $senderId);

            return array(
                'id' => $id,
                'status' => 200,
                'message' => 'OK'
            );
        } else {
            return array(
                'id' => $data->id,
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function getUserChatID($recieverId)
    {
        $user = auth()->user();
        $senderId = $user->id;
        $data = collect(DB::select("SELECT * FROM chats WHERE ((recieverId = '$recieverId' AND senderId = '$senderId') OR (recieverId = '$senderId' AND senderId = '$recieverId'))"))->first();

        if (!isset($data->id)) {
            $id = $this->get_uuid();
            $chat = new Chat;
            $chat->id = $id;
            $chat->senderId = $senderId;
            $chat->recieverId = $recieverId;
            $chat->save();

            $this->addChatMember($id, $senderId, $senderId);
            $this->addChatMember($id, $recieverId, $senderId);

            return array(
                'id' => $id,
                'status' => 200,
                'message' => 'OK'
            );
        } else {
            return array(
                'id' => $data->id,
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function addChatMember($chatId, $userId, $assigneeId)
    {
        $chatMember = new ChatMember;
        $chatMember->chatId = $chatId;
        $chatMember->userId = $userId;
        $chatMember->assigneeId = $assigneeId;
        $chatMember->save();

        return array(
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function checkFriendshipStatus($friendId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = collect(DB::select("SELECT chatId, friends.userId, friendId, approved, blocked, blockerId, friends.created_at AS timeAdded, blockeTime, users.id AS accountId, phone, email, user_name, place_id, location_label, latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, profile_picture, cover_picture, about, app_version_code, lastLoginTime, app_version, wallet_balance, users.created_at, last_seen, outstanding_payments 
        FROM friends, users WHERE users.id=(SELECT 
        CASE
            WHEN friendId='$userId'
                THEN userId
            WHEN userId='$userId'
                THEN friendId
        END
        FROM friends friends2 WHERE friends2.chatId=friends.chatId) AND ((friends.userId = '$friendId' AND friends.friendId = '$userId') OR (friends.userId = '$userId' AND friends.friendId = '$friendId'))"))->first();


        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchFriends()
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT chatId, friends.userId, friendId, approved, blocked, blockerId, friends.created_at AS timeAdded, blockeTime, users.id AS accountId, phone, email, user_name, place_id, location_label, latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, profile_picture, cover_picture, about, app_version_code, lastLoginTime, app_version, wallet_balance, users.created_at, users.updated_at, last_seen, outstanding_payments 
        FROM friends, users WHERE friends.blocked='false' AND users.id=(SELECT 
        
        CASE
            WHEN friendId='$userId'
                THEN userId
            WHEN userId='$userId'
                THEN friendId
        END

        FROM friends friends2 WHERE friends2.chatId=friends.chatId) AND (friends.userId = '$userId' OR friends.friendId = '$userId')");

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function fetchCustomerFriends($userId)
    {
        $user = auth()->user();
        $accountId = $user->id;

        $data = DB::select("SELECT chatId, friends.userId, friendId, approved, blocked, blockerId, friends.created_at AS timeAdded, blockeTime, users.id AS accountId, phone, email, user_name, place_id, location_label, latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, profile_picture, cover_picture, about, app_version_code, lastLoginTime, app_version, wallet_balance, users.created_at, users.updated_at, last_seen, outstanding_payments 
        FROM friends, users WHERE friends.blocked='false' AND users.id=(SELECT 
        
        CASE
            WHEN friendId='$userId'
                THEN userId
            WHEN userId='$userId'
                THEN friendId
        END

        FROM friends friends2 WHERE friends2.chatId=friends.chatId) AND (friends.userId = '$userId' OR friends.friendId = '$userId')");

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public static function getChatDetails($chatId)
    {
        $data = Chat::where('id', $chatId)->first();

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    private function verifyChatID($chatId, $userId)
    {
        $data = ChatMember::where('chatId', $chatId)
            ->where(function ($query) use ($userId) {
                $query->where('userId', $userId);
            })->orWhere(function ($query) use ($userId) {
                $query->where('assigneeId', $userId);
            })->first();

        if ($data->id <= 0) {
            return false;
        } else {
            return true;
        }
    }

    public function sendMessage($chatId, $contentType, $message, $ip_address, $recieverId, $senderId)
    {
        if ($this->verifyChatID($chatId, $senderId)) {
            $recordTime = 0;
            $msg = new Message;
            $msg->contentType = $contentType;
            $msg->chatId = $chatId;
            $msg->message = $message;
            $msg->senderId = $senderId;
            $msg->recieverId = $recieverId;
            $msg->ip_address = $ip_address;
            $msg->recordTime = $recordTime;
            $msg->save();

            if (!$msg) {
                return array(
                    'status' => 500,
                    'message' => 'Faied to send message.'
                );
            } else {
                return array(
                    'status' => 200,
                    'message' => 'OK'
                );
            }
        } else {
            return array(
                'status' => 500,
                'message' => 'Un matched chat ID.'
            );
        }
    }

    public function sendStringMessage(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $ip_address = User::getClientIP();
        $contentType = $request->input('contentType');
        $message = $request->input('message');
        $recieverId = $request->input('recieverId');
        $chatId = $request->input('chatId');

        return $this->sendMessage($chatId, $contentType, $message, $ip_address, $recieverId, $userId);
    }

    public function sendContact(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $message = $this->get_uuid();
        $ip_address = User::getClientIP();
        $contentType = $request->input('contentType');
        $recieverId = $request->input('recieverId');
        $chatId = $request->input('chatId');

        //messageContacts
        $firstName = $request->input('firstName');
        $lastName = $request->input('lastName');

        $custom_email = $request->input('custom_email');
        $home_email = $request->input('home_email');
        $work_email = $request->input('work_email');
        $other_email = $request->input('other_email');
        $mobile_email = $request->input('mobile_email');

        $custom_phone = $request->input('custom_phone');
        $home_phone = $request->input('home_phone');
        $mobile_phone = $request->input('mobile_phone');
        $work_phone = $request->input('work_phone');
        $fax_work_phone = $request->input('fax_work_phone');
        $fax_home_phone = $request->input('fax_home_phone');
        $pager_phone = $request->input('pager_phone');
        $other_phone = $request->input('other_phone');
        $callback_phone = $request->input('callback_phone');
        $car_phone = $request->input('car_phone');
        $company_main_phone = $request->input('company_main_phone');
        $isdn_phone = $request->input('isdn_phone');
        $main_phone = $request->input('main_phone');
        $other_fax_phone = $request->input('other_fax_phone');
        $radio_phone = $request->input('radio_phone');
        $telex_phone = $request->input('telex_phone');
        $tty_tdd_phone = $request->input('tty_tdd_phone');
        $work_mobile_phone = $request->input('work_mobile_phone');
        $work_pager_phone = $request->input('work_pager_phone');
        $assistant_phone = $request->input('assistant_phone');
        $mms_phone = $request->input('mms_phone');

        $custom_address = $request->input('custom_address');
        $home_address = $request->input('home_address');
        $work_address = $request->input('work_address');
        $other_address = $request->input('other_address');

        $photo_uri = $request->input('photo_uri');

        $messageContact = new MessageContact;
        $messageContact->id = $message;
        $messageContact->userId = $userId;
        $messageContact->firstName = $firstName;
        $messageContact->lastName = $lastName;

        $messageContact->custom_email = $custom_email;
        $messageContact->home_email = $home_email;
        $messageContact->work_email = $work_email;
        $messageContact->other_email = $other_email;
        $messageContact->mobile_email = $mobile_email;

        $messageContact->custom_phone = $custom_phone;
        $messageContact->home_phone = $home_phone;
        $messageContact->mobile_phone = $mobile_phone;
        $messageContact->work_phone = $work_phone;
        $messageContact->fax_work_phone = $fax_work_phone;
        $messageContact->fax_home_phone = $fax_home_phone;
        $messageContact->pager_phone = $pager_phone;
        $messageContact->other_phone = $other_phone;
        $messageContact->callback_phone = $callback_phone;
        $messageContact->car_phone = $car_phone;
        $messageContact->company_main_phone = $company_main_phone;
        $messageContact->isdn_phone = $isdn_phone;
        $messageContact->main_phone = $main_phone;
        $messageContact->other_fax_phone = $other_fax_phone;
        $messageContact->radio_phone = $radio_phone;
        $messageContact->telex_phone = $telex_phone;
        $messageContact->tty_tdd_phone = $tty_tdd_phone;
        $messageContact->work_mobile_phone = $work_mobile_phone;
        $messageContact->work_pager_phone = $work_pager_phone;
        $messageContact->assistant_phone = $assistant_phone;
        $messageContact->mms_phone = $mms_phone;

        $messageContact->custom_address = $custom_address;
        $messageContact->home_address = $home_address;
        $messageContact->work_address = $work_address;
        $messageContact->other_address = $other_address;

        $messageContact->photo_uri = $photo_uri;
        $messageContact->save();

        return self::sendMessage($chatId, $contentType, $message, $ip_address, $recieverId, $userId);
    }

    public function sendLocation(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $message = $this->get_uuid();
        $ip_address = User::getClientIP();
        $contentType = $request->input('contentType');
        $recieverId = $request->input('recieverId');
        $chatId = $request->input('chatId');

        $latitude = (float) $request->input('latitude');
        $longitude = (float) $request->input('longitude');
        $address = $request->input('address');

        $map_photo_url = "http://maps.google.com/maps/api/staticmap?center=" . $latitude  . "," . $longitude . "&zoom=15&size=500x300" . "&maptype=roadmap" . "&markers=color:red%7Clabel:P%7C" . $latitude . "," . $longitude . "&sensor=false&key=" . env('GOOGLE_MAPS_API_KEY');

        $imageName = $message . ".png";

        $image = file_get_contents($map_photo_url);
        $fp  = fopen($imageName, 'w+');
        fputs($fp, $image);
        fclose($fp);
        unset($image);

        $messageLocation = new MessageLocation;
        $messageLocation->id = $message;
        $messageLocation->userId = $userId;
        $messageLocation->chatId = $chatId;
        $messageLocation->latitude = $latitude;
        $messageLocation->longitude = $longitude;
        $messageLocation->address = $address;
        $messageLocation->image = $imageName;
        $messageLocation->save();

        return self::sendMessage($chatId, $contentType, $message, $ip_address, $recieverId, $userId);
    }

    public function sendFile(Request $request)
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

        $ip_address = User::getClientIP();
        $contentType = $request->input('contentType');
        $recieverId = $request->input('recieverId');
        $chatId = $request->input('chatId');

        $path =  getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first());

        if (isset($path)) {
            return self::sendMessage($chatId, $contentType, $path, $ip_address, $recieverId, $userId);
        } else {
            return json_encode(array("status" => "false", "message" => "Failed!"));
        }
    }

    public function sendProduct(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $productId = $request->input('productId');
        if (!Product::where('id', $productId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'Product was not discoverd.'
            ), 401);
        }

        $ip_address = User::getClientIP();
        $contentType = $request->input('contentType');
        $recieverId = $request->input('recieverId');
        $chatId = $request->input('chatId');

        if (isset($productId)) {
            return self::sendMessage($chatId, $contentType, $productId, $ip_address, $recieverId, $userId);
        } else {
            return json_encode(array("status" => "false", "message" => "Failed!"));
        }
    }

    public function fetchChatConversation($chatId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT chats.senderId AS chatSenderId, messages.id, contentType,
         messages.chatId, recordTime, message, messageType, messages.status, messages.senderId, messages.recieverId, messages.deleted, isReply, replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, deliverdTime, readTime, ip_address, messages.deleteTime,
         users.id AS userId, phone, email, place_id, location_label, users.latitude, users.longitude,
          users.name, company_description, company_email, company_phone, website, level, account_type,
           dob, gender, profile_picture, cover_picture, last_seen, about, wallet_balance,
            users.created_at AS joinDate, firstName,
        lastName,
        
        custom_email,
        home_email,
        work_email,
        other_email,
        mobile_email,
    
        custom_phone,
        home_phone,
        mobile_phone,
        work_phone,
        fax_work_phone,
        fax_home_phone,
        pager_phone,
        other_phone,
        callback_phone,
        car_phone,
        company_main_phone,
        isdn_phone,
        main_phone,
        other_fax_phone,
        radio_phone,
        telex_phone,
        tty_tdd_phone,
        work_mobile_phone,
        work_pager_phone,
        assistant_phone,
        mms_phone,
    
        custom_address,
        home_address,
        work_address,

        message_locations.latitude AS mLatitude,
        message_locations.longitude AS mLongitude,
        message_locations.address AS mAddress,
        message_locations.image AS mImage,

        products.name AS product_name,
        products.short_description AS product_short_description,
        products.price AS product_price,
        products.special_discount AS product_special_discount,
        products.special_discount_type AS product_special_discount_type,
        products.special_discount_start AS product_special_discount_start,
        products.special_discount_end AS product_special_discount_end,
        products.thumbnail AS product_thumbnail,
        products.slug AS product_slug,

        other_address FROM chats, messages, users, message_contacts, message_locations, products WHERE message_contacts.id=(CASE
                    WHEN messages.contentType='contact'
                        THEN messages.message
                    WHEN messages.contentType!='contact'
                        THEN 1
                END) AND  products.id=(CASE
                    WHEN messages.contentType='product'
                        THEN messages.message
                    WHEN messages.contentType!='product'
                        THEN 1
                END) AND  message_locations.id=(CASE
                    WHEN messages.contentType='location'
                        THEN messages.message
                    WHEN messages.contentType!='location'
                        THEN 1
                END) AND messages.senderId=users.id AND chats.id=messages.chatId AND messages.chatId='$chatId' ORDER BY messages.id ASC LIMIT 100");

        $this->markseen($chatId, $userId);

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function fetchFriendChatConversationMedia($chatId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT messages.id, contentType, chatId, message, messageType, status, senderId, recieverId, deleted, isReply, replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, deliverdTime, readTime, ip_address, deleteTime, users.id AS userId, phone, email, place_id, location_label,
           latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender,
            email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM messages, users WHERE messages.senderId=users.id AND messages.chatId='$chatId' AND messages.contentType='image'");

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function fetchMessageContacts($contactId)
    {
        $contactId = (int) $contactId;
        $data = MessageContact::where('id', $contactId)->first();

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    private function markseen($chatId, $senderId)
    {
        return DB::table('messages')
            ->where(['chatId' => $chatId])
            ->where(['recieverId' => $senderId])
            ->update([
                'status' => 'SEEN',
            ]);
    }

    private function markDeliverd($userId)
    {
        return DB::table('messages')
            ->where(['recieverId' => $userId])
            ->update([
                'status' => 'DELIVERD',
            ]);
    }

    public function getChats()
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT chats.id, chats.senderId AS chatSenderId, chatType, label, description, chats.created_at AS creationTime,
         logoUrl, coverUrl, contentType, message, messageType, status, messages.senderId, messages.recieverId, isReply,
          replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, ip_address, users.id AS userId, phone, email, place_id, location_label,
           latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender,
            email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance 
        FROM chats, messages, users 
        WHERE chats.deleted='false' AND messages.deleted='false' AND chats.id=messages.chatId AND users.id=(SELECT 
        
                CASE
                    WHEN chats.chatType!='SINGLE_CAST'
                        THEN chats.senderId
                    WHEN messages.senderId='$userId'
                        THEN messages.recieverId
                    WHEN messages.recieverId='$userId'
                        THEN messages.senderId
                END

                FROM messages messages2 WHERE messages2.id=messages.id)
                
        AND (messages.senderId='$userId' OR messages.recieverId='$userId') AND messages.id IN(SELECT MAX(messages.id) FROM messages messages GROUP BY messages.chatId) /*AND chats.recieverId !='NULL'*/ ORDER BY messages.id DESC;");

        self::markDeliverd($userId);

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function blockUser($friendId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::update("UPDATE friends SET blocked ='true', blockerId ='$userId' WHERE blocked ='false' AND 
        (friendId ='$friendId' AND userId='$userId') OR (friendId ='$userId' AND userId='$friendId')");

        if ($result) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Try Again'
            ), 500);
        }
    }

    public function unblockUser($friendId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = DB::update("UPDATE friends SET blocked ='false', blockerId = NULL WHERE blockerId='$userId' AND  
        (friendId ='$friendId' AND userId='$userId') OR (friendId ='$userId' AND userId='$friendId')");

        if ($result) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Try Again'
            ), 500);
        }
    }

    public function fetchNewMessage()
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT messages.id, contentType, chatId, message, messageType, status, senderId, recieverId, deleted, isReply, replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, deliverdTime, readTime, ip_address, deleteTime, users.id AS userId, phone, email, place_id, location_label, latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM messages, users WHERE messages.senderId=users.id AND messages.recieverId = '$userId'");

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function createNewChatGroup(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $label = $request->input('label');
        $description = $request->input('description');

        $id = $this->get_uuid();
        $chat = new Chat;
        $chat->id = $id;
        $chat->senderId = $userId;
        $chat->recieverId = $userId;
        $chat->label = $label;
        $chat->description = $description;
        $chat->chatType = 'MULTI_CAST';
        $chat->save();

        $this->addChatMember($id, $userId, $userId);

        return array(
            'id'  => $id,
            'status' => 200,
            'message' => 'Chat Group Created.'
        );
    }

    public function getCustomerCareChatGroupId()
    {
        $user = auth()->user();
        $userId = $user->id;

        $chat = DB::table('chats')
            ->where('senderId', $userId)
            ->where('chatType', 'CUSTOMER_SERVICE')
            ->first();

        if (!isset($chat)) {

            $label = "Customer Care";
            $description = "This is an official chat room for service related inquiries";
            $logoUrl = env('APP_URL') . "/images/logo.png";
            $coverUrl = env('APP_URL') . "/images/default_cover.jpg";

            $id = $this->get_uuid();
            $chat = new Chat;
            $chat->id = $id;
            $chat->senderId = $userId;
            $chat->recieverId = $userId;
            $chat->label = $label;
            $chat->description = $description;
            $chat->logoUrl = $logoUrl;
            $chat->coverUrl = $coverUrl;
            $chat->chatType = 'CUSTOMER_SERVICE';
            $chat->save();

            $admins = UsersController::getAdminUsers();
            for ($i = 0; $i < sizeof($admins); $i++) {
                $admin = $admins[$i];
                $this->addChatMember($id, $userId, $admin->id);
            }

            return array(
                'id'  => $id,
                'status' => 200,
                'message' => 'Chat Group Created.'
            );
        } else {
            return array(
                'id' => $chat->id,
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function getUserCustomerCareChatGroupId($userId)
    {
        $chat = DB::table('chats')
            ->where('senderId', $userId)
            ->where('chatType', 'CUSTOMER_SERVICE')
            ->first();

        if (!isset($chat)) {

            $label = "Customer Care";
            $description = "This is an official chat room for service related inquiries";
            $logoUrl = env('APP_URL') . "/images/logo.png";
            $coverUrl = env('APP_URL') . "/images/default_cover.jpg";

            $id = $this->get_uuid();
            $chat = new Chat;
            $chat->id = $id;
            $chat->senderId = $userId;
            $chat->recieverId = $userId;
            $chat->label = $label;
            $chat->description = $description;
            $chat->logoUrl = $logoUrl;
            $chat->coverUrl = $coverUrl;
            $chat->chatType = 'CUSTOMER_SERVICE';
            $chat->save();

            $admins = UsersController::getAdminUsers();
            for ($i = 0; $i < sizeof($admins); $i++) {
                $admin = $admins[$i];
                $this->addChatMember($id, $userId, $admin->id);
            }

            return array(
                'id'  => $id,
                'status' => 200,
                'message' => 'Chat Group Created.'
            );
        } else {
            return array(
                'id' => $chat->id,
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public function getCustomerServiceChats()
    {
        $data = DB::select("SELECT chats.id, chats.senderId AS chatSenderId, chatType, label, description, chats.created_at AS creationTime, logoUrl, coverUrl, contentType, message, messageType, status, messages.senderId, messages.recieverId, isReply, replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, ip_address, users.id AS userId, phone, email, place_id, location_label,
        latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance 
        FROM chats, messages, users 
        WHERE chats.deleted='false' AND 
        messages.deleted='false' AND 
        chats.id=messages.chatId AND 
        chats.chatType='CUSTOMER_SERVICE' AND 
        users.id=chats.senderId AND messages.id IN(SELECT MAX(messages.id) FROM messages messages GROUP BY messages.chatId) ORDER BY messages.id DESC;");

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function getNewChatsMessages()
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT chats.id, chats.senderId AS chatSenderId, chatType, label, description, chats.created_at AS creationTime, logoUrl, coverUrl, contentType, message, messageType, status, messages.senderId, messages.recieverId, isReply, replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, ip_address,  users.id AS userId, phone, email, place_id, location_label, latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM chats, messages, users WHERE chats.deleted='false' AND messages.deleted='false' AND chats.id=messages.chatId AND users.id=(SELECT 
        
                CASE
                    WHEN senderId='$userId'
                        THEN recieverId
                    WHEN recieverId='$userId'
                        THEN senderId
                END

                FROM messages messages2 WHERE messages2.id=messages.id)
                
        AND messages.recieverId='$userId'
        AND messages.status='SENT'
        AND messages.id IN(SELECT MAX(messages.id) FROM messages messages GROUP BY messages.chatId) ORDER BY messages.id DESC;");

        $this->markDeliverd($userId);

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }

    public function fetchNewMessages()
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = DB::select("SELECT chats.id, chats.senderId AS chatSenderId, chatType, label, description, chats.created_at AS creationTime, logoUrl, coverUrl, contentType, message, messageType, status, messages.senderId, messages.recieverId, isReply, replyMessageId, replyContentType, replyMessageHint, messages.created_at AS sentTime, ip_address,  users.id AS userId, phone, email, place_id, location_label,
        latitude, longitude, name, company_description, company_email, company_phone, website, level, account_type, dob, gender, email_verified, phone_verified, users.created_at AS joinDate,	last_seen, profile_picture, cover_picture, about, wallet_balance FROM chats, messages, users WHERE chats.deleted='false' AND messages.deleted='false' AND messages.status='SENT' AND chats.id=messages.chatId 
        AND users.id=(SELECT 
        
                CASE
                    WHEN senderId='$userId'
                        THEN recieverId
                    WHEN recieverId='$userId'
                        THEN senderId
                END

                FROM messages messages2 WHERE messages2.id=messages.id)
                
        AND messages.recieverId='$userId' AND messages.id IN(SELECT MAX(messages.id) FROM messages messages GROUP BY messages.chatId) ORDER BY messages.id DESC;");

        return array(
            'data'  => $data,
            'status' => 200,
            'message' => 'OK'
        );
    }
}
