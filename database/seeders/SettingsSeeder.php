<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::truncate();

        $settingsData = [
            ["setting_name" => "company_address", "setting_value" => "Kampala, Uganda", "type" => "app"],
            ["setting_name" => "company_email", "setting_value" => "info@nsiimbi.com", "type" => "app"],
            ["setting_name" => "company_phone", "setting_value" => "+256784801301", "type" => "app"],
            ["setting_name" => "currency", "setting_value" => "UGX", "type" => "app"],
            ["setting_name" => "date_format", "setting_value" => "Y-m-d", "type" => "app"],
            ["setting_name" => "decimal_separator", "setting_value" => ".", "type" => "app"],
            ["setting_name" => "email_sent_from_address", "setting_value" => "info@nsiimbi.com", "type" => "app"],
            ["setting_name" => "email_sent_from_name", "setting_value" => "Nsiimbi App", "type" => "app"],
            ["setting_name" => "site_logo", "setting_value" => "default-stie-logo.png", "type" => "app"],
            ["setting_name" => "time_format", "setting_value" => "small", "type" => "app"],
            ["setting_name" => "timezone", "setting_value" => "UTC", "type" => "app"]
        ];
        collect($settingsData)->each(function ($settingData) {
            Setting::create($settingData);
        });
    }
}
