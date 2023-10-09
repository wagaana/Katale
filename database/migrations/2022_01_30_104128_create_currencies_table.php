<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('entity');
            $table->string('country_code');
            $table->string('minorUnit');
            $table->float('numericCode', 255, 2)->nullable();
            $table->string('userId');
            $table->string('suport_userId')->nullable();
            $table->string('suport_name')->nullable();
            $table->string('suport_gender')->nullable();
            $table->string('suport_religion')->nullable();
            $table->string('suport_phone')->nullable();
            $table->string('suport_email')->nullable();
            $table->string('suport_website')->nullable();
            $table->float('suport_latitude', 10, 6)->default(0.00);
            $table->float('suport_longitude', 10, 6)->default(0.00);
            $table->float('exchange_rate', 10, 4)->default(0.00);
            $table->float('conversionChargePercentage', 255, 2)->default(0.00);
            $table->float('bidAskPercentageBuy', 255, 2)->default(0.00);
            $table->float('bidAskPercentageSell', 255, 2)->default(0.00);
            $table->float('transactionFee', 255, 2)->default(0.00);
            $table->float('buy', 255, 4)->default(0.00);
            $table->float('sell', 255, 4)->default(0.00);
            $table->string('deleterId')->nullable();
            $table->string('deleted')->default('false');
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
        Schema::dropIfExists('currencies');
    }
}
