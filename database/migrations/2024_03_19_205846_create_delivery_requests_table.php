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
        Schema::create('delivery_requests', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id')->unique();
            $table->string('ext_invoice_id')->nullable();
            $table->enum('client_type', ['shop', 'user'])->default('user')->comment('"shop" is from the marketplace, and "user" is from platform users');
            $table->bigInteger('sender_id')->nullable()->comment('UserID for client_type "user" and ShopID for "shop"');
            $table->bigInteger('reciever_id')->nullable()->comment('recieving customer');
            $table->longText('billing_address')->nullable();
            $table->bigInteger('billing_address_id')->nullable();
            $table->longText('shipping_address');
            $table->bigInteger('shipping_address_id');

            $table->timestamp('shipping_date')->nullable();
            $table->enum('delivery_type', ['route', 'seller', 'express'])->nullable();
            $table->bigInteger('delivery_company_id')->comment('Shipping Company')->nullable();
            $table->bigInteger('delivery_hero_id')->nullable()->comment('For express deliveries');

            $table->integer('order_quantity')->default(1);

            $table->double('shipment_value')->nullable();
            $table->double('shipping_cost')->nullable();
            $table->double('total_payable')->nullable();

            $table->enum('delivery_status', ['pending', 'cancelled', 'rejected', 'accepted', 'deliverd', 'confirmed'])->default('pending');
            $table->string('trx_id')->nullable();

            $table->string('tracking_number')->nullable();

            $table->enum('payment_status', ['unpaid', 'paid'])->default('unpaid');
            $table->tinyInteger('payment_status_viewed')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_requests');
    }
};
