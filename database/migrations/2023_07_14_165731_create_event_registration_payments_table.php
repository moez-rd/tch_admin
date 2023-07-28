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
        Schema::create('event_registration_payments', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->tinyInteger('status', unsigned: true);
            $table->string('proof')->nullable();
            $table->datetime('uploaded_at')->nullable();
            $table->ulid('event_registration_id')->constrained()->cascadeOnDelete();
            $table->foreignUlid('confirmed_by')->nullable()->references('id')->on('users')->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_registration_payments');
    }
};
