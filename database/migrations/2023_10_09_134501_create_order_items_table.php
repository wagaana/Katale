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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('invoice_id');
            $table->bigInteger('product_id');
            $table->string('variation')->nullable();
            $table->double('price')->nullable();
            $table->double('tax')->nullable();
            $table->double('discount')->nullable();
            $table->string('coupon_discount')->nullable()->comment('will be json data {"coupon_code" : "BLACK5", "discount" : 5}');
            $table->integer('order_quantity')->default(1);
            $table->bigInteger('product_referral_code')->nullable();
            $table->tinyInteger('is_refundable')->default(0)->comment('1 => can be refunded');
            $table->text('attributes')->nullable();

            $table->double('delivery_cost')->nullable();
            $table->enum('delivery_type', ['route', 'seller', 'express'])->nullable();
            $table->string('delivery_company_id')->nullable();
            $table->enum('delivery_status', ['pending', 'awarded', 'on_route', 'deliverd', 'confirmed'])->default('pending');
            $table->timestamp('delivery_award_date')->nullable();
            $table->timestamp('awarded_time')->nullable();

            $table->string('seller_payment_status')->default('unpaid');
            $table->string('delivery_payment_status')->default('unpaid');
            $table->tinyInteger('seller_payment_status_viewed')->default(0);
            $table->tinyInteger('delivery_payment_status_viewed')->default(0);

            $table->text('delivery_address');
            $table->string('delivery_address_id')->nullable();
            $table->string('delivery_country_id')->nullable();
            $table->string('delivery_state_id')->nullable();
            $table->string('delivery_city_id')->nullable();
            $table->decimal('delivery_latitude', 10, 8)->nullable();
            $table->decimal('delivery_longitude', 11, 8)->nullable();
            $table->string('delivery_postal_code')->nullable();
            $table->string('deliveryTime')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
