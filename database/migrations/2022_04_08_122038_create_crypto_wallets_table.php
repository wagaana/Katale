<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCryptoWalletsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crypto_wallets', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('currencyCode')->unique();
            $table->string('label');
            $table->string('description');
            $table->float('exchangeRate', 255, 2)->nullable();
            $table->float('buy', 255, 2)->nullable();
            $table->float('sell', 255, 2)->nullable();
            $table->float('chargePercentage', 255, 2)->nullable();
            $table->float('transactionFee', 255, 2)->nullable();
            $table->float('directionPercentage', 255, 2)->nullable();
            $table->string('userId');
            $table->string('image');
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
        Schema::dropIfExists('crypto_wallets');
    }
}
