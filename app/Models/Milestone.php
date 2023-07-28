<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Milestone extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
        'date',
        'description',
        'milestoneable_id',
    ];

    public function milestoneable(): MorphTo
    {
        return $this->morphTo();
    }
}
