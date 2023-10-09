<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->string('senderId');
            $table->string('recieverId');
            $table->string('media')->unique();
            $table->string('status')->default('SENT');
            $table->bigInteger('tocken')->default(0);
            $table->string('notificationKey')->unique();
            $table->text('message')->nullable();
            $table->text('iconUrl')->nullable();
            $table->string('deleted')->default('false');
            $table->string('deleterId')->nullable();
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
        Schema::dropIfExists('notifications');
    }
}
