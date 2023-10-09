<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('contentType');
            $table->string('chatId');
            $table->text('message');
            $table->string('messageType')->default('CHAT')->nullable();
            $table->string('status')->default('SENT')->nullable();
            $table->string('senderId');
            $table->string('recieverId')->nullable();
            $table->string('deleted')->default('false');
            $table->string('isReply')->default('false');
            $table->bigInteger('replyMessageId')->nullable();
            $table->string('replyContentType')->nullable();
            $table->bigInteger('recordTime')->nullable();
            $table->text('replyMessageHint')->nullable();
            $table->timestamp('deliverdTime')->nullable();
            $table->timestamp('readTime')->nullable();
            $table->string('ip_address');
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
        Schema::dropIfExists('messages');
    }
}
