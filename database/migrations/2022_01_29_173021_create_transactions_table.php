<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->string('userId');
            $table->string('recieverId');
            $table->float('gross', 255, 2)->nullable();
            $table->float('fee', 255, 2)->nullable();
            $table->float('net', 255, 2)->nullable();
            $table->float('exchange_rate', 10, 6)->default(0.00);
            $table->float('conversionChargePercentage', 255, 2)->default(0.00);
            $table->float('senderCurrencyTxnFee', 255, 2)->default(0.00);
            $table->string('currency');
            $table->string('provider');
            $table->string('status');
            $table->string('transactionKey');
            $table->string('requestId');
            $table->text('description')->nullable();
            $table->text('summary')->nullable();
            $table->string('externalId')->nullable();
            $table->string('orderId')->nullable();
            $table->string('responseTime')->nullable();
            $table->string('notificationId')->nullable();
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
        Schema::dropIfExists('transactions');
    }
}
