<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactBackupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_backups', function (Blueprint $table) {
            $table->id();
            $table->string('userId');
            $table->string('name')->nullable();
            $table->string('phoneNumber');
            $table->string('countryCode')->nullable();
            $table->string('country')->nullable();
            $table->string('imageUrl')->nullable();
            $table->string('status');
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
        Schema::dropIfExists('contact_backups');
    }
}
