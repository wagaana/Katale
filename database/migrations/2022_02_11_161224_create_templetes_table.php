<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempletesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templetes', function (Blueprint $table) {
            $table->string('templateID')->unique();
            $table->string('userId');
            $table->string('label');
            $table->string('purpose')->nullable();
            $table->string('deleted');
            $table->string('description');
            $table->text('html');
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
        Schema::dropIfExists('templetes');
    }
}
