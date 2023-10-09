<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //lets clear the users table first
        User::truncate();

        $user_name = "nsiimbi";
        $i = 0;
        while (User::where('user_name', $user_name)->exists()) {
            $i++;
            $user_name = $user_name . $i;
        }

        User::create([
            'name' => "Nsiimbi",
            'user_name' => $user_name,
            'email' => "info@nsiimbi.com",
            'password' => Hash::make('Nsiimbi@2023'),
            'pin' => Hash::make('0000'),
            'country' => 'UG',
            'level' => 2
        ]);
    }
}
