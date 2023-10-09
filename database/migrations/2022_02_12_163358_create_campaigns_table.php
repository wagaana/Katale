<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCampaignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campaigns', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->string('userId');
            $table->text('label');
            $table->text('description');
            $table->string('targetId');
            $table->string('offerId');
            $table->string('campaignInterval');
            $table->string('startDate');
            $table->string('endDate');
            $table->string('deleted');
            $table->string('consent');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('campaigns');
    }
}
