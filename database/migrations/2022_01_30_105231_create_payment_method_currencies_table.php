<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentMethodCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_method_currencies', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('currency');
            $table->string('paymentMethod');
            $table->float('exchangeRate', 255, 2)->nullable();
            $table->float('buy', 255, 2)->nullable();
            $table->float('sell', 255, 2)->nullable();
            $table->float('chargePercentage', 255, 2)->nullable();
            $table->float('transactionFee', 255, 2)->nullable();
            $table->string('depositTariffEnabled')->default('false');
            $table->string('withdrowTariffEnabled')->default('false');
            $table->string('depositChargesEnabled')->default('false');
            $table->float('maxWithdrowLimit', 255, 2)->default(0.00);
            $table->float('minWithdrowLimit', 255, 2)->default(0.00);
            $table->float('maxDepositLimit', 255, 2)->default(0.00);
            $table->float('minDepositLimit', 255, 2)->default(0.00);
            $table->string('isDefault')->default('false');
            $table->string('userId');
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
        Schema::dropIfExists('payment_method_currencies');
    }
}
