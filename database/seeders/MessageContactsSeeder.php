<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MessageContact;

class MessageContactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MessageContact::create([
            'id' => 1,
        ]);
    }
}
