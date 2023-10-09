<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banks', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('label');
            $table->text('description');
            $table->text('image');
            $table->string('userId');
            $table->string('country');
            $table->string('status')->default('ACTIVE');
            $table->string('suport_name')->nullable();
            $table->string('suport_phone')->nullable();
            $table->string('suport_email')->nullable();
            $table->string('suport_website')->nullable();
            $table->float('latitude', 10, 6)->nullable();
            $table->float('longitude', 10, 6)->nullable();
            $table->float('maxLimit', 255, 2)->nullable();
            $table->float('minLimit', 255, 2)->nullable();
            $table->string('deleterId')->nullable();
            $table->string('deleted')->default('false');
            $table->string('canDeposit')->default('false');
            $table->string('canSend')->default('false');
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
        Schema::dropIfExists('banks');
    }
}
