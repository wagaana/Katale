<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CampaignTarget;
use Illuminate\Support\Facades\DB;
use App\Models\CampaignTargetParameter;
use App\Models\CampaignOffer;
use App\Models\CampaignOfferParameter;
use App\Models\Campaign;
use App\Models\User;
use App\Models\File;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;

class CampaignsController extends Controller
{
    public function submitCampaignTarget(Request $request)
    {
        $targetId = round(microtime(true) * 1000);
        $user = auth()->user();
        $userId = $user->id;

        $campaignTarget = new CampaignTarget;
        $campaignTarget->id = $targetId;
        $campaignTarget->userId = $userId;
        $campaignTarget->label = $request->input('label');
        $campaignTarget->description = $request->input('description');
        $campaignTarget->deleted = 'false';
        $campaignTarget->save();

        $target = json_decode($request->input('target'), true);

        for ($i = 0; $i < sizeof($target); $i++) {
            $parameter = $target[$i];
            $campaignTargetParameter = new CampaignTargetParameter;
            $campaignTargetParameter->targetId = $targetId;
            $campaignTargetParameter->field = $parameter['field'];
            $campaignTargetParameter->mCondition = $parameter['mCondition'];
            $campaignTargetParameter->value = $parameter['value'];
            $campaignTargetParameter->save();
        }

        return array(
            'status' => 200,
            'targetId' => $targetId,
            'message' => 'OK',
        );
    }

    public function loadCampaignTargets(Request $request)
    {
        return array(
            'status' => 200,
            'targets' => CampaignTarget::all(),
            'message' => 'OK',
        );
    }

    public static function loadCampaignTargetDetails($targetID)
    {
        $data = DB::table('campaign_targets')
            ->where('deleted', 'false')
            ->where('id', $targetID)
            ->first();
        $data->target = self::loadCampaignTargetDetailsParameters($targetID);

        return array(
            'status' => 200,
            'payload' => $data,
            'message' => 'OK',
        );
    }

    private static function loadCampaignTargetDetailsParameters($targetId)
    {
        return DB::select("SELECT* FROM campaign_target_parameters WHERE targetId = :targetId ORDER BY id ASC", ['targetId' => $targetId]);
    }

    public function deleteCampaignTarget($targetId)
    {
        $mPresult = null;
        $result = DB::table('campaign_targets')
            ->where(['id' => $targetId])
            ->delete();

        if ($result) {
            $mPresult = DB::table('campaign_target_parameters')
                ->where(['targetId' => $targetId])
                ->delete();
        }
        if ($mPresult) {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public static function submitCampaignOffer(Request $request)
    {
        $offerId = round(microtime(true) * 1000);
        $user = auth()->user();
        $userId = $user->id;
        $description = $request->input('description');
        $subject = $request->input('subject');
        $label = $request->input('label');
        $templateID = $request->input('templateID');
        $html = $request->input('html');
        $parameters = json_decode($request->input('parameters'), true);

        $campaignOffer = new CampaignOffer;
        $campaignOffer->id = $offerId;
        $campaignOffer->userId = $userId;
        $campaignOffer->label = $label;
        $campaignOffer->description = $description;
        $campaignOffer->subject = $subject;
        $campaignOffer->html = $html;
        $campaignOffer->templateID = $templateID;
        $campaignOffer->deleted = 'false';
        $campaignOffer->save();

        for ($i = 0; $i < sizeof($parameters); $i++) {
            $parameter = $parameters[$i];
            // if ($parameter['inputType'] === 'file') {
            //     $placeHolder = $parameter['placeHolder'];
            //     $name = $request->file($placeHolder)->getClientOriginalName();
            //     $path = $request->file($placeHolder)->store('storage/images', ['disk' => 'exchange']);

            //     if ($path) {
            //         $campaignOfferParameter = new CampaignOfferParameter;
            //         $campaignOfferParameter->offerId = $offerId;
            //         $campaignOfferParameter->inputType = $parameter['inputType'];
            //         $campaignOfferParameter->label = $parameter['label'];
            //         $campaignOfferParameter->placeHolder = $path;
            //         $campaignOfferParameter->value = $parameter['value'];
            //         $campaignOfferParameter->save();
            //     } else {
            //         $campaignOfferParameter = new CampaignOfferParameter;
            //         $campaignOfferParameter->offerId = $offerId;
            //         $campaignOfferParameter->inputType = $parameter['inputType'];
            //         $campaignOfferParameter->label = $parameter['label'];
            //         $campaignOfferParameter->placeHolder = '';
            //         $campaignOfferParameter->value = $parameter['value'];
            //         $campaignOfferParameter->save();
            //     }
            // } else {
            $campaignOfferParameter = new CampaignOfferParameter;
            $campaignOfferParameter->offerId = $offerId;
            $campaignOfferParameter->inputType = $parameter['inputType'];
            $campaignOfferParameter->label = $parameter['label'];
            $campaignOfferParameter->placeHolder = $parameter['placeHolder'];
            $campaignOfferParameter->value = $parameter['value'];
            $campaignOfferParameter->save();
            // }
        }

        return array(
            'status' => 200,
            'offerId' => $offerId,
            'message' => 'OK',
        );
    }

    public static function uploadCampaignOfferFile(Request $request)
    {
        $user = auth()->user();
        $userID = $user->id;

        $name = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);
        if ($path) {
            $file = new File;
            $file->userId = $userID;
            $file->fileName = $path;
            $file->save();

            return array(
                'status' => 200,
                'fileName' => $path,
                'reference' => $request->input('reference'),
                'message' => 'File uploaded complete.'
            );
        } else {
            return array(
                'status' => 500,
                'response' => $path,
                'message' => 'Please try again later.'
            );
        }
    }

    public function loadSystemCampaignOffers(Request $request)
    {
        $result = DB::table('campaign_offers')
            ->where('deleted', 'false')
            ->get();
        $data['offers'] = array();
        for ($i = 0; $i < sizeof($result); $i++) {
            $roww = $result[$i];
            $sample_array = array();
            $sample_array = $roww;
            $sample_array->html = html_entity_decode($roww->html);
            array_push($data['offers'], $sample_array);
        }
        $data['status'] = 200;
        $data['message'] = 'OK';
        return $data;
    }

    private function loadCampaignOfferDetailsParameters($offerId)
    {
        return DB::table('campaign_offer_parameters')
            ->where('offerId', $offerId)
            ->get();
    }

    public function loadSystemCampaignOfferDetails($offerId)
    {

        $data = DB::table('campaign_offers')
            ->where('deleted', 'false')
            ->where('id', $offerId)
            ->first();
        $data->parameters = $this->loadCampaignOfferDetailsParameters($offerId);
        $data->html = html_entity_decode($data->html);

        return array(
            'status' => 200,
            'payload' => $data,
            'message' => 'OK',
        );
    }

    public static function updateCampaignOffer(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $id = $request->input('id');
        $description = $request->input('description');
        $subject = $request->input('subject');
        $label = $request->input('label');
        $templateID = $request->input('templateID');
        $html = $request->input('html');
        $parameters = json_decode($request->input('parameters'), true);

        DB::table('campaign_offers')
            ->where(['id' => $id])
            ->update([
                'userId' => $userId,
                'label' => $label,
                'description' => $description,
                'subject' => $subject,
                'templateID' => $templateID,
                'html' => $html
            ]);

        $result = DB::table('campaign_offer_parameters')
            ->where(['offerId' => $id])
            ->delete();

        if ($result) {
            for ($i = 0; $i < sizeof($parameters); $i++) {
                $parameter = $parameters[$i];
                $campaignOfferParameter = new CampaignOfferParameter;
                $campaignOfferParameter->offerId = $id;
                $campaignOfferParameter->inputType = $parameter['inputType'];
                $campaignOfferParameter->label = $parameter['label'];
                $campaignOfferParameter->placeHolder = $parameter['placeHolder'];
                $campaignOfferParameter->value = $parameter['value'];
                $campaignOfferParameter->save();
            }
            return array(
                'status' => 200,
                'offerId' => $parameters,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Failed to remove old campaign offer parameters, try again...',
            );
        }
    }

    public function deleteOffer($offerId)
    {
        $result = DB::table('campaign_offers')
            ->where(['id' => $offerId])
            ->update([
                'deleted' => 'true'
            ]);

        if ($result) {
            $result = DB::table('campaigns')
                ->where(['offerId' => $offerId])
                ->update([
                    'deleted' => 'true'
                ]);
            if ($result) {
                return array(
                    'status' => 200,
                    'message' => 'OK',
                );
            } else {
                return array(
                    'status' => 500,
                    'message' => 'Failed to delete Campaign',
                );
            }
        } else {
            return array(
                'status' => 500,
                'message' => 'Failed to delete Campaign',
            );
        }
    }

    public function submitCampaign(Request $request)
    {
        $id = round(microtime(true) * 1000);
        $user = auth()->user();
        $userId = $user->id;

        $label = $request->input('label');
        $description = $request->input('description');
        $targetId = $request->input('targetId');
        $offerId = $request->input('offerId');
        $campaignInterval = $request->input('campaignInterval');
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $consent = $request->input('consent');

        $campaign = new Campaign;
        $campaign->id = $id;
        $campaign->userId = $userId;
        $campaign->label = $label;
        $campaign->description = $description;
        $campaign->targetId = $targetId;
        $campaign->offerId = $offerId;
        $campaign->campaignInterval = $campaignInterval;
        $campaign->startDate = $startDate;
        $campaign->endDate = $endDate;
        $campaign->consent = $consent;
        $campaign->deleted = 'false';
        $campaign->save();

        return array(
            'status' => 200,
            'campaignID' => $id,
            'message' => 'OK',
        );
    }

    public function loadMarketingCampaings()
    {
        $data['campaigns'] = DB::table('campaigns')
            ->where('deleted', 'false')
            ->get();
        $data['status'] = 200;
        $data['message'] = 'OK';
        return $data;
    }

    public function loadCampaignDetails($campaignID)
    {
        $data['payload'] = DB::table('campaigns')
            ->where('deleted', 'false')
            ->where('id', $campaignID)
            ->first();

        $data['status'] = 200;
        $data['message'] = 'OK';
        return $data;
    }

    public function deleteCampaign($campaignID)
    {
        $result = DB::table('campaigns')
            ->where(['id' => $campaignID])
            ->update([
                'deleted' => 'true',
            ]);

        if ($result) {
            return array(
                'status' => 200,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Failed to delete Campaign',
            );
        }
    }

    public function runCampaign($campaignID)
    {
        $campaignDetails = $this->loadCampaignDetails($campaignID);
        $campaignDetails = $campaignDetails['payload'];
        $offerDetails = $this->loadSystemCampaignOfferDetails($campaignDetails->offerId);
        $offerDetails = $offerDetails['payload'];
        $campaignTargetUsers = UsersController::loadCampaignTargetUsers($campaignDetails->targetId);

        //generate html template and fetch users according to target.
        $users = $campaignTargetUsers['data'];
        for ($x = 0; $x < sizeof($users); $x++) {
            $userProfile = $users[$x];

            $email = $userProfile->email;

            $offerHtml = $offerDetails->html;
            $parameters = $offerDetails->parameters;
            $subject = $offerDetails->subject;

            for ($y = 0; $y < sizeof($parameters); $y++) {
                $parameter = $parameters[$y];
                $placeHolder = $parameter->placeHolder;
                if ($parameter->inputType === "file") {
                    $placeHolder = env('APP_URL') . $placeHolder;
                }
                foreach ($userProfile as $key => $value) {
                    $placeHolder = str_replace('{' . $key . '}', $value, $placeHolder);
                }
                $offerHtml = str_replace($parameter->value, $placeHolder, $offerHtml);
            }

            Mail::send([], [], function (Message $message) use ($email, $subject, $offerHtml) {
                $message->to($email)
                    ->subject($subject)
                    ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
                    ->setBody($offerHtml, 'text/html')
                    ->addPart($offerHtml, 'text/plain');
            });
        }

        if (!empty($users)) {
            return array(
                'status' => 200,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Your target was empty',
            );
        }
    }

    public function updateCampaign(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $label = $request->input('label');
        $description = $request->input('description');
        $targetId = $request->input('targetId');
        $offerId = $request->input('offerId');
        $campaignInterval = $request->input('campaignInterval');
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $consent = $request->input('consent');
        $campaignID = $request->input('id');

        $result = DB::table('campaigns')
            ->where(['id' => $campaignID])
            ->update([
                'userId' => $userId,
                'label' => $label,
                'description' => $description,
                'targetId' => $targetId,
                'offerId' => $offerId,
                'campaignInterval' => $campaignInterval,
                'startDate' => $startDate,
                'endDate' => $endDate,
                'consent' => $consent,
            ]);

        if ($result) {
            return array(
                'status' => 200,
                'campaignID' => $campaignID,
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Failed to update your campaign',
            );
        }
    }
}
