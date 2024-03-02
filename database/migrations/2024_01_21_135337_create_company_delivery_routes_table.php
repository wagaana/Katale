<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('company_delivery_routes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->bigInteger('company_id');
            $table->bigInteger('depature_addr_id');
            $table->bigInteger('destination_addr_id');
            $table->decimal('deliveryFeePerKg');
            $table->decimal('minDeliveryFee');
            $table->string('deleterId')->nullable();
            $table->string('deleted')->default('false');
            $table->timestamp('deleteTime')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_delivery_routes');
    }
};
