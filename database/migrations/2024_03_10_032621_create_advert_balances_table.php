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
        Schema::create('advert_balances', function (Blueprint $table) {
            $table->id();
            $table->string('shop_id');
            $table->float('gross', 255, 2);
            $table->float('fee', 255, 2);
            $table->float('net', 255, 2);
            $table->string('transactionId');
            $table->string('currency');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advert_balances');
    }
};
