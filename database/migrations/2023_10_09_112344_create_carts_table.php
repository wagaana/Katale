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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->bigInteger('product_id')->nullable();
            $table->integer('order_quantity')->nullable();
            $table->text('attributes')->nullable();

            $table->double('delivery_cost')->nullable();
            $table->enum('delivery_type', ['route', 'seller', 'express'])->nullable();
            $table->string('delivery_company_id')->nullable();

            $table->text('delivery_address');
            $table->string('delivery_address_id')->nullable();
            $table->string('delivery_country_id')->nullable();
            $table->string('delivery_state_id')->nullable();
            $table->string('delivery_city_id')->nullable();
            $table->decimal('delivery_latitude', 10, 8)->nullable();
            $table->decimal('delivery_longitude', 11, 8)->nullable();
            $table->string('delivery_postal_code')->nullable();

            $table->timestamps();
        });
        /*
            $table->double('discount')->nullable();
            $table->double('tax')->nullable();
            $table->tinyInteger('coupon_applied')->default(0);
            $table->double('coupon_discount')->nullable();
            $table->string('product_referral_code')->nullable();
            $table->double('price')->nullable();
        */
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
