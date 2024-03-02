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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('name');
            $table->string('email');
            $table->string('phone_no')->nullable();
            $table->text('address');
            $table->string('unit_apt')->nullable();
            $table->string('address_ids')->nullable();
            $table->string('country_id')->nullable();
            $table->string('state_id')->nullable();
            $table->string('city_id')->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('postal_code')->nullable();
            $table->tinyInteger('default_shipping')->default(0)->comment('1 = default');
            $table->tinyInteger('default_billing')->default(0)->comment('1 = default');
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
        Schema::dropIfExists('addresses');
    }
};
