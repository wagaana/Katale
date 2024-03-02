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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('parent_id')->nullable();
            $table->string('parent')->nullable();
            $table->integer('position')->nullable();
            $table->integer('ordering')->default(0);
            $table->string('slug');
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->double('commission')->default(0.000);
            $table->tinyInteger('is_featured')->default(0);
            $table->tinyInteger('status')->default(1);
            $table->bigInteger('logo_id')->nullable();
            $table->text('logo');
            $table->string('banner_id')->nullable();
            $table->string('banner')->nullable();

            $table->integer('adsCount')->default(0)->nullable();
            $table->integer('views')->default(0)->nullable();
            $table->string('suport_name')->nullable();
            $table->string('suport_phone')->nullable();
            $table->string('suport_email')->nullable();
            $table->string('suport_website')->nullable();
            $table->float('latitude', 10, 6)->nullable();
            $table->float('longitude', 10, 6)->nullable();

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
        Schema::dropIfExists('categories');
    }
};
