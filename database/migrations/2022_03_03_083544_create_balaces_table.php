<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBalacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('balaces', function (Blueprint $table) {
            $table->id();
            $table->string('userId');
            $table->float('gross', 255, 2);
            $table->float('fee', 255, 2);
            $table->float('net', 255, 2);
            $table->string('transactionId');
            $table->string('currency');
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
        Schema::dropIfExists('balaces');
    }
}
