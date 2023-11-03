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
        Schema::create('set_groups', function (Blueprint $table) {
            $table->id();
            $table->string('slug');
            $table->integer('year')->default(0);
            $table->text('cardSets');
            $table->string('name');
            $table->boolean('standard')->default(false);
            $table->string('icon')->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('set_groups');
    }
};
