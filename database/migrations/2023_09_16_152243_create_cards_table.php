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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->integer('cardId');
            $table->integer('collectible');
            $table->string('slug');
            $table->integer('classId')->nullable();
            $table->string('multiclassIds')->nullable();
            $table->integer('minionTypeId')->nullable();
            $table->integer('spellSchoolIds')->nullable();
            $table->integer('cardTypeId')->nullable();
            $table->integer('cardSetId')->nullable();
            $table->integer('rarityId')->nullable();
            $table->string('artistName')->nullable();
            $table->integer('health')->nullable();
            $table->integer('attack')->nullable();
            $table->integer('armor')->nullable();
            $table->integer('manaCost')->nullable();
            $table->integer('durability')->nullable();
            $table->string('name');
            $table->text('text');
            $table->string('image');
            $table->string('imageGold');
            $table->text('flavorText')->nullable();
            $table->string('cropImage')->nullable();
            $table->string('runeCost')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
