<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'cardId',
        'collectible',
        'slug',
        'classId',
        'multiclassIds',
        'minionTypeId',
        'spellSchoolIds',
        'cardTypeId',
        'cardSetId',
        'rarityId',
        'artistName',
        'health',
        'attack',
        'armor',
        'manaCost',
        'durability',
        'name',
        'text',
        'image',
        'imageGold',
        'flavorText',
        'cropImage',
        'runeCost'
    ];
    
    public static function findbyCardId($cardId){
        $card = Card::where('cardId', $cardId)
        ->first();
        return $card;
    }

    public static function getRandomCard(){
        return Card::inRandomOrder()->first();
    }

}
