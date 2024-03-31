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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id')->unique();
            $table->bigInteger('seller_id')->nullable()->comment('seller user id');
            $table->bigInteger('user_id')->nullable()->comment('customer');
            $table->bigInteger('delivery_hero_id')->nullable()->comment('from delivery hero table');
            $table->longText('billing_address');
            $table->longText('shipping_address')->nullable();

            $table->enum('delivery_status', ['pending', 'cancelled', 'rejected', 'awarded', 'accepted', 'deliverd', 'confirmed'])->default('pending');
            $table->timestamp('delivery_award_date')->nullable();
            $table->string('mobilemoney_phone')->nullable();

            $table->bigInteger('payment_method')->comment('Payment method id');
            $table->enum('payment_type', ['WALLET', 'CARD', 'PAYPAL', 'MOBILE_MONEY', 'BANK_TRANSFER', 'DPO', 'FLUTTER_WAVE', 'OTHER'])->nullable();
            $table->enum('payment_status', ['unpaid', 'paid'])->default('unpaid');
            $table->tinyInteger('payment_status_viewed')->default(0);

            $table->double('sub_total')->nullable();
            $table->double('discount')->nullable();
            $table->double('coupon_discount')->nullable();
            $table->double('total_tax')->nullable();
            $table->double('total_amount')->nullable();
            $table->double('shipping_cost')->nullable();
            $table->double('total_payable')->nullable();
            $table->string('code')->nullable();
            $table->timestamp('date')->nullable();

            $table->tinyInteger('viewed')->default(0);
            $table->tinyInteger('delivery_viewed')->default(0);
            $table->tinyInteger('commission_calculated')->default(0);
            $table->string('is_cancelled')->default('0');
            $table->string('is_deleted')->default('0');

            $table->string('trx_id')->nullable();
            $table->tinyInteger('is_mailed')->default(0);
            $table->string('offline_method_id')->nullable();
            $table->string('offline_method_file')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->bigInteger('pickup_hub_id')->nullable();
            $table->tinyInteger('cancel_request')->default(0);
            $table->timestamp('cancel_request_at')->nullable();
            $table->timestamp('delivery_hero_assign_at')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->tinyInteger('is_draft')->default(0);
            $table->string('shipping_method')->nullable();
            $table->tinyInteger('is_coupon_system_active')->nullable(1);
            $table->string('tax_method')->default('{"vat_tax_type" : "","tax_type" : "" }');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
