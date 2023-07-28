<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Seminar extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'theme',
    ];

    //    public function event(): BelongsTo
    //    {
    //        return $this->belongsTo(Event::class);
    //    }

    public function event(): MorphOne
    {
        return $this->morphOne(Event::class, 'eventable');
    }

    public function seminarCasts(): HasMany
    {
        return $this->hasMany(SeminarCast::class);
    }
}
