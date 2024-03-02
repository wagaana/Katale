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
        Schema::create('product_discussions', function (Blueprint $table) {
            $table->id();
            $table->string('productId');
            $table->text('message');
            $table->string('userId');
            $table->string('isAComment')->default('false');
            $table->string('discussionId')->default(0)->nullable();
            $table->string('language')->nullable();
            $table->string('ip_address');
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
        Schema::dropIfExists('product_discussions');
    }
};
