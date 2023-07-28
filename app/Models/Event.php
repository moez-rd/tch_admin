<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Event extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
        'codename',
        'type',
        'description',
        'image',
        'is_opened',
        'price',
        'held_in',
        'held_on',
        'festival_id',
        'group_link',
        'eventable_type',
        'eventable_id',
    ];

    public function festival(): BelongsTo
    {
        return $this->belongsTo(Festival::class);
    }

    public function eventable(): MorphTo
    {
        return $this->morphTo();
    }

    public function eventRegistrations(): HasMany
    {
        return $this->hasMany(EventRegistration::class);
    }

    public function milestones(): MorphMany
    {
        return $this->morphMany(Milestone::class, 'milestoneable');
    }

    public function contactPersons(): MorphMany
    {
        return $this->morphMany(ContactPerson::class, 'contact_personable');
    }

    public function maxParticipants(): int
    {
        if ($this->eventable_type === config('constants.event_type.seminar')) {
            return 1;
        }

        return $this->eventable()->first()->max_participants;
    }
}
