<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SetGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'year',
        'cardSets',
        'name',
        'standard',
        'icon'
    ];
}
