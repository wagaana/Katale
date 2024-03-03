<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Currency;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Currency::truncate();

        $settingsData = [
            ["code" => "UGX", "name" => "Uganda Shilling", "entity" => "Uganda", "country_code" => "UG", "minorUnit" => "0", "userId" => "1"],
            ["code" => "KES", "name" => "Kenyan Shilling", "entity" => "Kenya", "country_code" => "KE", "minorUnit" => "2", "userId" => "1"],
            ["code" => "TZS", "name" => "Tanzanian Shilling", "entity" => "Tanzania, United Republic of Tanzania", "country_code" => "TZ", "minorUnit" => "2", "userId" => "1"],
            ["code" => "RWF", "name" => "Rwanda Franc", "entity" => "Rwanda", "country_code" => "RW", "minorUnit" => "0", "userId" => "1"],
        ];
        collect($settingsData)->each(function ($settingData) {
            Currency::create($settingData);
        });
    }
}
