<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessageContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_contacts', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->string('userId')->nullable();
            $table->string('chatId')->nullable();
            $table->string('firstName')->nullable();
            $table->string('lastName')->nullable();
            $table->string('custom_email')->nullable();
            $table->string('home_email')->nullable();
            $table->string('work_email')->nullable();
            $table->string('other_email')->nullable();
            $table->string('mobile_email')->nullable();
            $table->string('custom_phone')->nullable();
            $table->string('home_phone')->nullable();
            $table->string('mobile_phone')->nullable();
            $table->string('work_phone')->nullable();
            $table->string('fax_work_phone')->nullable();
            $table->string('fax_home_phone')->nullable();
            $table->string('pager_phone')->nullable();
            $table->string('other_phone')->nullable();
            $table->string('callback_phone')->nullable();
            $table->string('car_phone')->nullable();
            $table->string('company_main_phone')->nullable();
            $table->string('isdn_phone')->nullable();
            $table->string('main_phone')->nullable();
            $table->string('other_fax_phone')->nullable();
            $table->string('radio_phone')->nullable();
            $table->string('telex_phone')->nullable();
            $table->string('tty_tdd_phone')->nullable();
            $table->string('work_mobile_phone')->nullable();
            $table->string('work_pager_phone')->nullable();
            $table->string('assistant_phone')->nullable();
            $table->string('mms_phone')->nullable();
            $table->text('custom_address')->nullable();
            $table->text('home_address')->nullable();
            $table->text('work_address')->nullable();
            $table->text('other_address')->nullable();
            $table->text('photo_uri')->nullable();
            $table->string('deleterId')->nullable();
            $table->string('deleted')->default('false');
            $table->timestamp('deleteTime')->nullable();
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
        Schema::dropIfExists('message_contacts');
    }
}
