<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCampaignOfferParametersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campaign_offer_parameters', function (Blueprint $table) {
            $table->id();
            $table->string('offerId');
            $table->string('inputType');
            $table->string('label');
            $table->string('value');
            $table->text('placeHolder');
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
        Schema::dropIfExists('campaign_offer_parameters');
    }
}
