<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MessageLocation;

class MessageLocationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MessageLocation::create([
            'id' => 1,
            'userId' => "1",
            'chatId' => "1",
            'latitude' => 1,
            'longitude' => 1,
        ]);
    }
}
