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

        $currenciesData = [
            [
                "code" => "UGX", "name" => "Uganda Shilling", "entity" => "Uganda", "country_code" => "UG", "minorUnit" => "0", "userId" => "1",
                "exchange_rate" => 1.000000, "conversionChargePercentage" => 0.00, "bidAskPercentageBuy" => 0.00, "bidAskPercentageSell" => 0.00, "transactionFee" => 0.00, "buy" => 0.98, "sell" => 1.02
            ],

            [
                "code" => "KES", "name" => "Kenyan Shilling", "entity" => "Kenya", "country_code" => "KE", "minorUnit" => "2", "userId" => "1",
                "exchange_rate" => 25.875150, "conversionChargePercentage" => 0.00, "bidAskPercentageBuy" => 2.00, "bidAskPercentageSell" => 3.00, "transactionFee" => 0.00, "buy" => 25.36, "sell" => 26.65
            ],

            [
                "code" => "TZS", "name" => "Tanzanian Shilling", "entity" => "Tanzania, United Republic of Tanzania", "country_code" => "TZ", "minorUnit" => "2", "userId" => "1",
                "exchange_rate" => 1.490021, "conversionChargePercentage" => 0.00, "bidAskPercentageBuy" => 2.00, "bidAskPercentageSell" => 3.00, "transactionFee" => 0.00, "buy" => 1.46, "sell" => 1.53
            ],

            [
                "code" => "RWF", "name" => "Rwanda Franc", "entity" => "Rwanda", "country_code" => "RW", "minorUnit" => "0", "userId" => "1",
                "exchange_rate" => 3.152729, "conversionChargePercentage" => 0.00, "bidAskPercentageBuy" => 2.00, "bidAskPercentageSell" => 3.00, "transactionFee" => 0.00, "buy" => 3.09, "sell" => 3.25
            ],
        ];
        collect($currenciesData)->each(function ($settingData) {
            Currency::create($settingData);
        });
    }
}
