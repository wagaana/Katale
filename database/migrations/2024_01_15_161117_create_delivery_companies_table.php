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
        Schema::create('delivery_companies', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unique();
            $table->string('company_name');
            $table->string('slug')->unique();
            $table->text('logo')->nullable();
            $table->float('dimensional_divisor', 10, 6)->default(5000)->comment('Dimensional divisor is a standard number used to determine the dimensional weight of a package acording to its cubic cm');
            $table->string('express_delivery_enabled')->default('false');
            $table->float('express_delivery_fee', 10, 6)->default(0.00)->comment('Express Delivery Fee / kg / km');
            $table->bigInteger('logo_id')->nullable();
            $table->text('banner')->nullable();
            $table->bigInteger('banner_id')->nullable();
            $table->text('company_description')->nullable();
            $table->text('company_tagline')->nullable();
            $table->string('phone_no')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('address_id')->nullable();

            $table->string('rating_count')->default(0);
            $table->string('reviews_count')->default(0);

            $table->bigInteger('pending_shipments')->default(0);
            $table->double('pending_balance', 255, 2)->default(0.00);

            $table->string('nin')->nullable();
            $table->text('national_id')->nullable();
            $table->bigInteger('national_id_file_id')->nullable();

            $table->string('verified')->default('false');
            $table->dateTime('verified_at')->nullable();

            $table->string('deleted')->default('false');
            $table->timestamp('deleteTime')->nullable();
            $table->string('deleterId')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_companies');
    }
};
