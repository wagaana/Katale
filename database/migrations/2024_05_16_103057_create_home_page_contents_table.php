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
        Schema::create('home_page_contents', function (Blueprint $table) {
            $table->id();
            $table->string('lang')->nullable()->default('en');
            $table->integer('position')->nullable()->default(1);
            $table->string('layout_type');
            $table->string('name')->nullable();
            $table->enum('items_category', ['products', 'campaigns', 'blogs', 'brands', 'categories']);
            $table->string('data_source')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_page_contents');
    }
};
