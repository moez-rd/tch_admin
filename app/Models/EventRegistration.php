<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class EventRegistration extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'event_id',
        'name',
        'confirmed',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uid = nanoUid();
        });
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'event_registration_participant')
            ->withPivot('role')
            ->withTimestamps()
            ->as('event_registrant')
            ->orderByPivot('created_at');
    }

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function eventRegistrationPayment(): HasOne
    {
        return $this->hasOne(EventRegistrationPayment::class);

    }
}
