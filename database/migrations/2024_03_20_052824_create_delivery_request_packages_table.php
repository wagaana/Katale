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
        Schema::create('delivery_request_packages', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id')->nullable();
            $table->enum('delivery_contents', ['package', 'document'])->default('package');
            $table->string('packaging_config')->comment('This is used to determine the package weight and delivery fees')->default('{\"length\":0,\"width\":0,\"height\":0,\"weight\":0}');
            $table->integer('order_quantity')->default(1);
            $table->string('package_label')->nullable();
            $table->double('package_value')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_request_packages');
    }
};
