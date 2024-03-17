<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('user_name')->unique();

            $table->string('general_notifications')->default('true');
            $table->string('email_notifications')->default('true');
            $table->string('transaction_notifications')->default('true');

            $table->string('api_token', 60)->unique()->nullable();
            $table->text('callbackURL')->nullable();
            $table->string('apiStatus')->default('false');

            $table->string('place_id')->nullable();
            $table->string('location_label')->nullable();
            $table->float('latitude', 10, 6)->nullable();
            $table->float('longitude', 10, 6)->nullable();
            $table->string('country')->nullable();
            $table->string('trackingEnabled')->nullable();

            $table->bigInteger('pending_orders')->default(0)->comment('total orders not recieved yet');
            $table->bigInteger('deliveries_from_me')->default(0)->comment('total deloveries from user they have not reached destinations yet');
            $table->bigInteger('deliveries_to_me')->default(0)->comment('total displays deloveries to user they havent recieved yet');

            $table->string('address_label')->nullable();
            $table->string('address_country_code')->nullable();
            $table->string('address_country')->nullable();
            $table->string('address_placeId')->nullable();
            $table->float('address_latitude', 10, 6)->nullable();
            $table->float('address_longitude', 10, 6)->nullable();

            $table->text('company_description')->nullable();
            $table->string('company_email')->nullable();
            $table->string('company_phone')->nullable();
            $table->string('website')->nullable();

            $table->string('language')->nullable();
            $table->unsignedInteger('level')->default(1)->nullable();
            $table->string('account_type')->nullable();
            $table->string('dob')->nullable();
            $table->string('gender')->nullable();

            $table->text('profile_picture')->nullable();
            $table->bigInteger('profile_picture_file_id')->nullable();
            $table->text('cover_picture')->nullable();
            $table->bigInteger('cover_picture_file_id')->nullable();

            $table->text('about')->nullable();
            $table->float('wallet_balance', 255, 2)->nullable();
            $table->float('outstanding_payments', 255, 2)->nullable();
            $table->string('last_seen')->nullable();
            $table->string('lastLoginTime')->nullable();

            $table->string('email_verified')->nullable();
            $table->string('phone_verified')->nullable();
            $table->unsignedInteger('app_version_code')->nullable();
            $table->string('app_version')->nullable();

            $table->string('password');
            $table->string('pin');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
