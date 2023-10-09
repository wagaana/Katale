<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('flag');
            $table->string('dial_code');
            $table->float('latitude', 10, 6)->nullable();
            $table->float('longitude', 10, 6)->nullable();
            $table->string('currency')->nullable();
            $table->string('currencyCode')->nullable();
            $table->string('capital')->nullable();
            $table->string('president')->nullable();
            $table->string('primeMinister')->nullable();
            $table->string('financeMinister')->nullable();
            $table->string('userId');
            $table->string('suport_userId')->nullable();
            $table->string('suport_name')->nullable();
            $table->string('suport_gender')->nullable();
            $table->string('suport_religion')->nullable();
            $table->string('suport_phone')->nullable();
            $table->string('suport_email')->nullable();
            $table->string('suport_website')->nullable();
            $table->float('suport_latitude', 10, 6)->nullable();
            $table->float('suport_longitude', 10, 6)->nullable();
            $table->string('deleted')->nullable();
            $table->string('deleterId')->nullable();
            $table->string('deleteTime')->nullable();
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
        Schema::dropIfExists('countries');
    }
}
