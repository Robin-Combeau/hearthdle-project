<?php

namespace App\Models;

use App\Http\Responses\ApiResponse;
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

    public static function findbyCardId($cardId)
    {
        return Card::where('cardId', $cardId)->first();
    }

    public static function getRandomCard()
    {
        return Card::inRandomOrder()->first();
    }

    public static function getCard($id)
    {
        return Card::findByCardId($id);
    }

    public static function getAllCardNames()
    {
        return Card::select('name')->get();
    }

    public static function getCardInGamemode(string $gamemode)
    {
        $setGroup = SetGroup::where('slug', $gamemode)->first();
        $setArray = json_decode($setGroup['cardSets'], true);
        $setIds = Set::whereIn('slug', $setArray)->pluck('setId')->toArray();
        return Card::whereIn('cardSetId', $setIds)->inRandomOrder()->first();
    }


    /**
     * Returns the latest card selected for the gamemode
     */
    public static function getLatestGamemodeCard(string $gamemode)
    {
        try {
            $data = GamemodeCard::where('gamemode', $gamemode)
                ->orderBy('created_at', 'desc')
                ->first();
            $card = Card::where('cardId', $data->cardId)->first();
            return ApiResponse::success($card, 'Latest GamemodeCard fetched');
        } catch (\Exception $e) {
            return ApiResponse::error('Error fetching latest GamemodeCard');
        }
    }
}
