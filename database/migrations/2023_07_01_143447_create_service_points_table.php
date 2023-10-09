<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicePointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_points', function (Blueprint $table) {
            $table->id();
            $table->integer('userId');
            $table->string('label');
            $table->text('description');
            $table->text('imageUrl');

            $table->string('address')->nullable();
            $table->float('latitude', 10, 6)->nullable();
            $table->float('longitude', 10, 6)->nullable();

            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('phone')->nullable();

            $table->float('handlingFee', 255, 2)->nullable();
            $table->float('deliveryFeePerKM', 255, 2)->nullable();
            $table->float('minDeliveryFee', 255, 2)->nullable();
            $table->float('maxDeliveryFee', 255, 2)->nullable();

            $table->string('deleted')->default('false');
            $table->timestamp('deleteTime')->nullable();
            $table->string('deleterId')->nullable();
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
        Schema::dropIfExists('service_points');
    }
}
