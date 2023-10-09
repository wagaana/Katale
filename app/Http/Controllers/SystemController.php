<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Setting;
use App\Models\ServicePoint;
use App\Models\ServicePointGallery;
use App\Models\ServicePointAdmins;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\AccessLogs;
use Carbon\Carbon;

class SystemController extends Controller
{

    public function submitServicePoint(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $path = '';
        if ($request->file('image') != null) {
            $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);
        }

        $servicePoint = new ServicePoint;
        $servicePoint->userId = $userId;
        $servicePoint->label = $request->input('label');
        $servicePoint->description = $request->input('description');
        $servicePoint->imageUrl = $path;

        $servicePoint->address = $request->input('address');
        $servicePoint->latitude = $request->input('latitude');
        $servicePoint->longitude = $request->input('longitude');

        $servicePoint->email = $request->input('email');
        $servicePoint->website = $request->input('website');
        $servicePoint->phone = $request->input('phone');
        $servicePoint->save();

        return response()->json($servicePoint->all(), 200);
    }

    public function fetchAllServicePoints()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ServicePoint::join('users', 'service_points.userId', '=', 'users.id')
            ->where('service_points.deleted', 'false')
            ->orderBy('service_points.created_at', 'desc')
            ->get(['service_points.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchServicePointDetails($servicePointId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ServicePoint::join('users', 'service_points.userId', '=', 'users.id')
            ->where('service_points.id', $servicePointId)
            ->where('service_points.deleted', 'false')
            ->orderBy('service_points.created_at', 'desc')
            ->first(['service_points.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $result->gallery = ServicePointGallery::where('deleted', 'false')
            ->where('servicePointId', $servicePointId)->get();

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchNearestServicePoints(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $module = "PLASTICS";
        $moduleId = null;

        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        //To search by kilometers instead of miles, replace 3959 with 6371.
        $result = DB::select("SELECT *, ( 6371 * acos( cos( radians($latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( latitude ) ) ) ) AS distance FROM service_points WHERE deleted='false' HAVING distance < 25 ORDER BY distance LIMIT 0 , 20 ");

        self::saveAccessLog($userId, $module, $moduleId);

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchRequestNearestServicePoint(Request $request)
    {
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        //To search by kilometers instead of miles, replace 3959 with 6371.
        $result = collect(DB::select("SELECT *, ( 6371 * acos( cos( radians($latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( latitude ) ) ) ) AS distance FROM service_points WHERE deleted='false' HAVING distance < 25 ORDER BY distance LIMIT 1 "))->first();

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function getSystemSettings()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = Setting::get();

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function updateSetting(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = Setting::where('setting_name', $request->input('setting_name'))
            ->update(['setting_value' => $request->input('setting_value'), 'updaterId' => $userId, 'updated' => 'true']);

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function sendServicePointGalleryImage(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        $servicePointGallery = new ServicePointGallery;
        $servicePointGallery->userId = $userId;
        $servicePointGallery->servicePointId = $request->input('servicePointId');
        $servicePointGallery->imageUrl = $path;
        $servicePointGallery->save();

        $postData = array(
            'status' => 200,
            'data' => $servicePointGallery->all(),
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function getServicePointGallery($servicePointId)
    {
        $result = ServicePointGallery::where('deleted', 'false')
            ->where('servicePointId', $servicePointId)->get();

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function submitSystemAdmin(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $adminData = User::where('email', $request->input('email'))->first();

        if ($adminData !== null) {
            User::where('id', $adminData->id)
                ->update(['level' => 2]);

            $postData = array(
                'status' => 200,
                'message' => 'User has been added.'
            );
            return response()->json($postData, 200);
        } else {
            $postData = array(
                'status' => 500,
                'message' => 'No User with that email has been found'
            );
            return response()->json($postData, 500);
        }
    }

    public function deleteSystemAdmin($adminId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $adminData = User::where('id', $adminId)->first();

        if ($adminData !== null) {
            User::where('id', $adminData->id)
                ->update(['level' => 1]);

            $postData = array(
                'status' => 200,
                'message' => 'Admin has been removed.'
            );
            return response()->json($postData, 200);
        } else {
            $postData = array(
                'status' => 500,
                'message' => 'Request Error'
            );
            return response()->json($postData, 500);
        }
    }

    public function fetchServicePointAdmins($servicePointId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ServicePointAdmins::join('users', 'service_point_admins.adminId', '=', 'users.id')
            ->where('service_point_admins.deleted', 'false')
            ->where('service_point_admins.servicePointId', $servicePointId)
            ->orderBy('service_point_admins.created_at', 'desc')
            ->get(['users.*']);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public static function saveAccessLog($userId, $module, $moduleId)
    {
        $accessLogs = AccessLogs::where('userId', $userId)
            ->where('module', $module)
            ->where('moduleId', $moduleId)->first();

        if ($accessLogs !== null) {
            $result = AccessLogs::where('id', $accessLogs->id)
                ->update(['updateTime' => now()]);

            return response()->json(
                array(
                    'status' => 200,
                    'data' => $result,
                    'message' => 'OK'
                ),
                200
            );
        } else {
            $accessLogs = new AccessLogs;
            $accessLogs->userId = $userId;
            $accessLogs->module = $module;
            $accessLogs->moduleId = $moduleId;
            $accessLogs->updateTime = now();
            $accessLogs->save();

            return response()->json(
                array(
                    'status' => 200,
                    'data' => $accessLogs->all(),
                    'message' => 'OK'
                ),
                200
            );
        }
    }

    public function loadDashboardSumary()
    {
        $currentMonth = Carbon::now()->startOfMonth();

        $result = collect(
            DB::select("SELECT 
            (SELECT SUM(net) FROM balaces WHERE created_at >= ?) AS totalTxnAmmount,
            (SELECT SUM(fee) FROM balaces WHERE created_at >= ?) AS totalTxnRevenue,
            (SELECT created_at FROM balaces WHERE created_at >= ? ORDER BY created_at ASC LIMIT 1) AS initialTransactionsDate,
            (SELECT COUNT(*) FROM balaces WHERE created_at >= ?) AS monthlyTransactions,
            (SELECT COUNT(*) FROM users WHERE created_at >= ?) AS usersAquisistion,
            (SELECT COUNT(*) FROM users) AS usersCount,
            (SELECT COUNT(*) FROM balaces) AS transactions,
            (SELECT COUNT(*) FROM campaigns WHERE deleted='false') AS campaigns,
            (SELECT created_at FROM campaigns WHERE deleted='false' ORDER BY created_at ASC LIMIT 1) AS initialCampaignDate
        FROM dual", [$currentMonth, $currentMonth, $currentMonth, $currentMonth, $currentMonth])
        )->first();

        return response()->json(array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        ), 200);
    }

    private function getLastNDays($days, $format = 'd/m')
    {
        $m = date("m");
        $de = date("d");
        $y = date("Y");
        $dateArray = array();
        for ($i = 0; $i <= $days - 1; $i++) {
            array_push($dateArray, date($format, mktime(0, 0, 0, $m, ($de - $i), $y)));
        }
        return array_reverse($dateArray);
    }


    public function fetchDashboardSparklineData()
    {
        $startDate = Carbon::now()->subDays(7)->toDateString();
        $endDate = Carbon::now()->toDateString();

        $weekSales = DB::select("SELECT DATE(created_at) AS mDate, SUM(fee) AS fees FROM balaces WHERE created_at BETWEEN ? AND ? GROUP BY DATE(created_at) ORDER BY mDate", [$startDate, $endDate]);

        $lastNDays = $this->getLastNDays(7, 'Y-m-d');

        $dateArray = array();
        for ($i = 0; $i < sizeof($lastNDays); $i++) {
            $ammount = 0;
            $lastNDay = $lastNDays[$i];
            for ($x = 0; $x < sizeof($weekSales); $x++) {
                $weekSale = $weekSales[$x];

                if ($weekSale->mDate === $lastNDay) {
                    $ammount = $weekSale->fees;
                }
            }

            array_push($dateArray, $ammount);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $dateArray,
            'message' => 'OK'
        ), 200);
    }
}
