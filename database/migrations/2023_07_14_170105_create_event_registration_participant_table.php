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
        Schema::create('event_registration_participant', function (Blueprint $table) {
            $table->tinyInteger('role', unsigned: true);
            $table->ulid('user_id')->constrained()->cascadeOnDelete();
            $table->ulid('event_registration_id')->constrained()->cascadeOnDelete();
            $table->unique(['user_id', 'event_registration_id'], 'user_registration_unique');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_registration_participant');
    }
};
