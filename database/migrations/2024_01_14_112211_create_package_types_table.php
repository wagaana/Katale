<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('package_types', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userId');
            $table->enum('package_type', [
                'Document',
                'Package'
            ])->default('Package');
            $table->string('name');
            $table->float('length', 10, 6)->comment('Length in (CM)');
            $table->float('width', 10, 6)->comment('Width in (CM)');
            $table->float('height', 10, 6)->comment('Height in (CM)');
            $table->bigInteger('quantity');
            $table->float('weight', 10, 6)->comment('Weight in (KG)');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_types');
    }
};
