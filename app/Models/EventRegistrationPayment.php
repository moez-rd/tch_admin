<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EventRegistrationPayment extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'status',
        'proof',
        'uploaded_at',
        'event_registration_id',
    ];

    protected $attributes = [
        'status' => 0, // not_confirmed
    ];

    public function eventRegistration(): BelongsTo
    {
        return $this->belongsTo(EventRegistration::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'confirmed_by');
    }
}
