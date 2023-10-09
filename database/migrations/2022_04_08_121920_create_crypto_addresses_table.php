<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCryptoAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crypto_addresses', function (Blueprint $table) {
            $table->id();
            $table->string('wallet');
            $table->string('address')->unique();
            $table->string('address_label');
            $table->string('userId');
            $table->string('archiverId')->nullable();
            $table->string('archived')->default('false');
            $table->string('archiveTime')->nullable();
            $table->float('lastBalance', 255, 8)->nullable();
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
        Schema::dropIfExists('crypto_addresses');
    }
}
