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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('id_number')->nullable();
            $table->string('id_card_image')->nullable();
            $table->string('institution')->nullable();
            $table->tinyInteger('education_level', unsigned: true)->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('line')->nullable();
            $table->string('instagram')->nullable();
            $table->tinyInteger('gender', unsigned: true)->nullable();
            $table->ulid('user_id')->nullable()->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
