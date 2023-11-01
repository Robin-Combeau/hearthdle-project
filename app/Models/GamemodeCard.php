<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class GamemodeCard extends Model
{
    use HasFactory;

    protected $table = 'gamemode_daily';
    
    protected $fillable = [
        'cardId'
    ];

    /**
     * Sets a new daily card for Wild
     * Can't return a daily card that has been there in the last month
     */
    public static function storeNewCardForWild(string $gamemode){
        $randomCard = Card::inRandomOrder()->first();
        $latestDailyCard = GamemodeCard::where('card_id',$randomCard->cardId)
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
