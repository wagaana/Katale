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
        Schema::create('campaign_banners', function (Blueprint $table) {
            $table->id();
            $table->integer('fileId');
            $table->string('redirect_url');
            $table->string('campaign_title');
            $table->string('campaign_offer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaign_banners');
    }
};
