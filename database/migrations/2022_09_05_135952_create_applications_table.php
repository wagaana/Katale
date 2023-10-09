<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('userId');
            $table->string('label');
            $table->string('description');
            $table->string('imageUrl');
            $table->string('app_token')->unique();
            $table->string('country')->default('UG');
            $table->string('approved')->default('false');
            $table->text('callbackURL')->nullable();

            $table->unsignedInteger('requestsCount')->default(0)->nullable();
            $table->unsignedInteger('succesfulRequestsCount')->default(0)->nullable();
            $table->unsignedInteger('failedRequestsCount')->default(0)->nullable();

            $table->string('deleterId')->nullable();
            $table->string('deleted')->default('false');
            $table->string('deleteTime')->nullable();
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
        Schema::dropIfExists('applications');
    }
}
