<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessageLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_locations', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->string('userId');
            $table->string('chatId');
            $table->float('latitude', 10, 6);
            $table->float('longitude', 10, 6);
            $table->text('image')->nullable();
            $table->text('address')->nullable();
            $table->string('deleterId')->nullable();
            $table->string('deleted')->default('false');
            $table->timestamp('deleteTime')->nullable();
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
        Schema::dropIfExists('message_locations');
    }
}
