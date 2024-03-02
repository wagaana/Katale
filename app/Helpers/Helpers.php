<?php

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

if (!defined('STDIN')) {
    define('STDIN', fopen('php://stdin', 'r'));
}


if (!function_exists('formatBytes')) {

    function formatBytes($size, $precision = 2)
    {
        $base = log($size, 1024);
        $suffixes = array('B', 'KB', 'MB', 'GB', 'TB');

        return round(pow(1024, $base - floor($base)), $precision) . ' ' . $suffixes[floor($base)];
    }
}


if (!function_exists('is_file_exists')) {
    function is_file_exists($item, $storage = 'open')
    {
        if (!blank($item) and !blank($storage)) :
            if ($storage == 'open') :
                if (file_exists($item)) :
                    return true;
                endif;
            elseif ($storage == 's3') :
                if (Storage::disk('s3')->exists($item)) :
                    return true;
                endif;
            elseif ($storage == 'wasabi') :
                if (Storage::disk('wasabi')->exists($item)) :
                    return true;
                endif;
            endif;

        endif;

        return false;
    }
}

if (!function_exists('get_media')) {
    function get_media($item, $storage = 'open', $updater = false)
    {
        if (!blank($item) and !blank($storage)) :
            if ($storage == 'open') :
                if ($updater) :
                    return base_path($item);
                else :
                    return app('url')->asset($item);
                endif;
            elseif ($storage == 's3') :
                return Storage::disk('s3')->url($item);
            endif;
        endif;

        return false;
    }
}

if (!function_exists('getFileLink')) {
    function getFileLink($array, $offline = null)
    {
        if (@is_file_exists($array['path'], $array['storage'])) :
            return get_media($array['path'], $array['storage']);
        else :
            return static_asset('images/default/default-image-320x320.png');
        endif;
    }
}


if (!function_exists('static_asset')) {

    function static_asset($path = null, $secure = null)
    {
        if (strpos(php_sapi_name(), 'cli') !== false || defined('LARAVEL_START_FROM_PUBLIC')) :
            return app('url')->asset($path, $secure);
        else :
            return app('url')->asset($path, $secure);
        endif;
    }
}

if (!function_exists('getVideoId')) :
    function getVideoId($provider, $link)
    {
        if ($provider == 'vimeo') :
            if (preg_match("/(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/?(showcase\/)*([0-9))([a-z]*\/)*([0-9]{6,11})[?]?.*/", $link, $output_array)) :
                return $output_array[6];
            endif;
        elseif ($provider == 'youtube') :
            //                preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $link, $match);
            //                return $match[1];
            $id = [];
            preg_match("#([\/|\?|&]vi?[\/|=]|youtu\.be\/|embed\/)([a-zA-Z0-9_-]+)#", $link, $id);
            return end($id);
        elseif ($provider == 'embedded_video') :
            $url = [];
            preg_match('/src="([^"]+)"/', $link, $url);
            if (array_key_exists(1, $url)) :
                return $url[1];
            else :
                return $link;
            endif;
        elseif ($provider == 'mp4') :
            return $link;
        endif;

        return '';
    }
endif;

if (!function_exists('getFileName')) :
    function getFileName($file)
    {
        $name = '';
        if ($file) {
            $file = explode('/', $file);
            $name = $file[count($file) - 1];
        }
        return $name;
    }
endif;

if (!function_exists('mixUrl')) {

    function mixUrl($path, $manifestDirectory = '', $baseUrl = null)
    {
        static $manifest;

        if (!starts_with($path, '/')) {
            $path = "/{$path}";
        }



        if (file_exists(public_path($manifestDirectory . '/hot'))) {
            return new HtmlString($baseUrl . $path);
        }

        if (!$manifest) {
            if (!file_exists($manifestPath = 'mix-manifest.json')) {
                throw new Exception('The Mix manifest does not exist.');
            }

            $manifest = json_decode(file_get_contents($manifestPath), true);
        }

        if (!is_null($baseUrl)) {
            if (strlen($baseUrl) > 1 && Str::endsWith($baseUrl, '/')) {
                $baseUrl = substr($baseUrl, 0, -1);
            }
            return new HtmlString($baseUrl . $manifestDirectory . $manifest[$path]);
        }

        if (!array_key_exists($path, $manifest)) {
            throw new Exception(
                "Unable to locate Mix file: {$path}. Please check your " .
                    'webpack.mix.js output paths and try again.'
            );
        }

        return new HtmlString($manifestDirectory . $manifest[$path]);
    }

    function starts_with($path, string $string)
    {
        return false;
    }
}
