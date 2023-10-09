<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->string('chatType')->default('SINGLE_CAST');
            $table->text('label')->nullable();
            $table->text('description')->nullable();
            $table->string('deleted')->default('false');
            $table->string('senderId');
            $table->string('recieverId')->nullable();
            $table->string('deletorId')->nullable();
            $table->string('deleteTime')->nullable();
            $table->text('logoUrl')->nullable();
            $table->text('coverUrl')->nullable();
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
        Schema::dropIfExists('chats');
    }
}
