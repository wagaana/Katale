<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'user_name',
        'email',
        'password',
        'pin',
        'country',
        'phone',
        'profile_picture',
        'cover_picture'
    ];

    /*
        Default values
    */

    protected $attributes = [
        'profile_picture' => 'images/default_profile.png',
        'cover_picture' => 'images/default_cover.jpg'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'api_token',
        'pin',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function generateToken()
    {
        $this->api_token = Str::random(60);
        $this->save();

        return $this->api_token;
    }

    public static function getClientIP()
    {
        // Nothing to do without any reliable information
        if (!isset($_SERVER['REMOTE_ADDR'])) {
            return NULL;
        }

        // Header that is used by the trusted proxy to refer to
        // the original IP
        $proxy_header = "HTTP_X_FORWARDED_FOR";

        // List of all the proxies that are known to handle 'proxy_header'
        // in known, safe manner
        $trusted_proxies = array("2001:db8::1", "192.168.50.1");

        if (in_array($_SERVER['REMOTE_ADDR'], $trusted_proxies)) {

            // Get the IP address of the client behind trusted proxy
            if (array_key_exists($proxy_header, $_SERVER)) {

                // Header can contain multiple IP-s of proxies that are passed through.
                // Only the IP added by the last proxy (last IP in the list) can be trusted.
                $proxy_list = explode(",", $_SERVER[$proxy_header]);
                $client_ip = trim(end($proxy_list));

                // Validate just in case
                if (filter_var($client_ip, FILTER_VALIDATE_IP)) {
                    return $client_ip;
                } else {
                    // Validation failed - beat the guy who configured the proxy or
                    // the guy who created the trusted proxy list?
                    // TODO: some error handling to notify about the need of punishment
                }
            }
        }

        // In all other cases, REMOTE_ADDR is the ONLY IP we can trust.
        return $_SERVER['REMOTE_ADDR'];
    }
}
