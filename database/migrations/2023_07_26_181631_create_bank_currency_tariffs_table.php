<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankCurrencyTariffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_currency_tariffs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userId');
            $table->string('code');
            $table->string('currency');
            $table->float('minAmmount', 255, 2);
            $table->float('maxAmmount', 255, 2);
            $table->float('sending', 255, 2);
            $table->float('withdraw', 255, 2);
            $table->float('payments', 255, 2)->default(0.00);
            $table->float('minTax', 255, 2)->default(0.00);
            $table->float('maxTax', 255, 2)->default(0.00);
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
        Schema::dropIfExists('bank_currency_tariffs');
    }
}
