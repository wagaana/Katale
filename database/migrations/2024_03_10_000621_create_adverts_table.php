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
        Schema::create('adverts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('shop_id')->unique();
            $table->double('budget');
            $table->double('balance', 255, 2)->default(0.00);
            $table->enum('primary_target', [
                'brand',
                'products',
                'both'
            ]);
            $table->timestamp('start_time');
            $table->timestamp('end_time')->nullable();

            $table->bigInteger('today_impressions')->default(0)->comment('total displays of the products or store');
            $table->bigInteger('today_sales')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adverts');
    }
};
