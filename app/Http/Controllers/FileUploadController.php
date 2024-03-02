<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\File;

class FileUploadController extends Controller
{
    public function uploadSingle(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $file = $request->file("file");
        $path =  $file->store("public/files");
        $name = $file->getClientOriginalName();
        $type = $file->getClientMimeType();
        $extension = $file->getClientOriginalExtension();

        $fileVar = new File();
        $fileVar->name = $name;
        $fileVar->user_id = $userId;
        $fileVar->storage = env('FILESYSTEM_DISK');
        $fileVar->type = $type;
        $fileVar->extension = $extension;
        $fileVar->path = $path;
        $fileVar->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }


    public function uploadMultiple(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        if ($request->hasfile('files')) {
            foreach ($request->file('files') as $key => $file) {
                $path = $file->store('public/files');
                $name = $file->getClientOriginalName();
                $type = $file->getClientMimeType();
                $extension = $file->getClientOriginalExtension();

                $fileVar = new File();
                $fileVar->name = $name;
                $fileVar->user_id = $userId;
                $fileVar->storage = env('FILESYSTEM_DISK');
                $fileVar->type = $type;
                $fileVar->extension = $extension;
                $fileVar->path = $path;
                $fileVar->save();
            }
        }

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function loadUserFiles()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = File::where('user_id', $userId)
            ->orderBy('id', 'desc')
            ->limit(28)->get();

        $userFiles = array();
        for ($i = 0; $i < sizeof($result); $i++) {
            $sample_array = array();
            $sample_array = $result[$i];
            $url = getFileLink($sample_array);
            $sample_array['url'] = $url;
            array_push($userFiles, $sample_array);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $userFiles,
            'message' => 'OK'
        ), 200);
    }

    public function deleteFile($fileId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = File::where('id', $fileId)->where('user_id', $userId)->first();

        if (Storage::exists($data->path)) {
            Storage::delete($data->path);
            $data->delete();
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }
}
