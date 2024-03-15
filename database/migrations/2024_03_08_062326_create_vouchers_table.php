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
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('title');
            $table->enum('voucher_type', [
                'seller',
                'user',
                'system'
            ]);

            $table->enum('status', ['unpublished', 'published', 'trash'])->default('unpublished');
            $table->enum('system_status', ['unapproved', 'approved', 'suspended', 'removed'])->default('unapproved');

            $table->double('usage_limit');
            $table->double('limit_per_customer');
            $table->double('price')->nullable();
            $table->double('min_spend')->nullable();
            $table->double('capped_price')->nullable();
            $table->string('code')->unique();
            $table->timestamp('start_time')->nullable();
            $table->timestamp('end_time')->nullable();
            $table->text('thumbnail');
            $table->string('thumbnail_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vouchers');
    }
};
