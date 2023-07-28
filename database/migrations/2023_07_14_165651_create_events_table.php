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
        Schema::create('events', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name');
            $table->string('codename');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_opened')->default(false);
            $table->integer('price', unsigned: true)->nullable();
            $table->string('held_in')->nullable();
            $table->dateTime('held_on')->nullable();
            $table->string('group_link')->nullable();
            $table->ulid('festival_id')->constrained()->cascadeOnDelete();
            $table->ulid('eventable_id')->constrained()->cascadeOnDelete();
            $table->string('eventable_type');
            $table->timestamps();
            $table->unique(['name', 'festival_id']);
            $table->unique(['codename', 'festival_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
