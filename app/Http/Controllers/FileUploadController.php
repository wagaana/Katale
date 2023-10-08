<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        $path = $request->file("file")->store("public/images");
        return response()->json(['msg' => 'Success', "path" => $path], 200);
    }
}
