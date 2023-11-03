<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class GamemodeCard extends Model
{
    use HasFactory;

    protected $table = 'gamemode_card';
    
    protected $fillable = [
        'gamemode',
        'cardId'
    ];

    /**
     * Sets a new daily card
     * Can't return a daily card that has been there in the last month
     */
    public static function storeNewCard(string $gamemode){
        switch ($gamemode) {
            case 'standard':
                $randomCard = Card::getStandardCard();
        }

        $randomStandardCard = Card::getStandardCard();
        $latestStandardCard = GamemodeCard::where('card_id', $randomStandardCard->cardId)
                        ->where('gamemode', $gamemode)
                        ->orderBy('created_at')
                        ->first();
        if ($latestDailyCard && $latestDailyCard['created_at'] > Carbon::now()->subMonth()) {
            GamemodeCard::storeNewCardForGamemode($gamemode);
        }

        $gamemodeCard = new GamemodeCard();
        $gamemodeCard->card_id = $randomCard->cardId;
        $gamemodeCard->save();
        return $gamemodeCard;
    }

}
