<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class ContactPerson extends Model
{
    use HasFactory, HasUlids;

    protected $table = 'contact_persons';

    protected $fillable = [
        'name',
        'whatsapp',
        'instagram',
        'line',
    ];

    public function contactPersonable(): MorphTo
    {
        return $this->morphTo();
    }
}
