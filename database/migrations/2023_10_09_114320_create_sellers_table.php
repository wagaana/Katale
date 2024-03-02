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
        Schema::create('sellers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unique();
            $table->string('shop_name');
            $table->string('slug')->unique();
            $table->text('logo')->nullable();
            $table->bigInteger('logo_id')->nullable();
            $table->text('banner')->nullable();
            $table->text('shop_description')->nullable();
            $table->bigInteger('banner_id')->nullable();
            $table->text('shop_tagline')->nullable();
            $table->string('phone_no')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('address_id');
            $table->string('rating_count')->default(0);
            $table->string('reviews_count')->default(0);

            $table->float('dimensional_divisor', 10, 6)->default(5000)->comment('Dimensional divisor is a standard number used to determine the dimensional weight of a package acording to its cubic cm');
            $table->string('express_delivery_enabled')->default('false');
            $table->float('express_delivery_fee', 10, 6)->default(0.00)->comment('Express Delivery Fee / kg / km');
            $table->string('delivery_options_enabled')->default('true');

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
        Schema::dropIfExists('sellers');
    }
};
