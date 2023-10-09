<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessApiRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_api_requests', function (Blueprint $table) {
            $table->id();
            $table->string('userId');
            $table->string('request_token')->unique();
            $table->string('applicationId');
            $table->string('externalKey');
            $table->float('ammount', 255, 2);
            $table->string('country');
            $table->string('currency');
            $table->string('message');
            $table->string('status')->default('CREATED');
            $table->string('transactionId')->nullable();
            $table->string('callback')->nullable();
            $table->string('redirectUrl')->nullable();
            $table->string('balanceWithWallet')->default('false')->nullable();
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
        Schema::dropIfExists('business_api_requests');
    }
}
