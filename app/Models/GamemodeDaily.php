<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Card;

class GamemodeDaily extends Model
{
    use HasFactory;

    protected $table = 'gamemode_daily';
    
    protected $fillable = [
        'cardId'
    ];

    /**
     * Sets a new daily card
     * Can't return a daily card that has been there in the last month
     */
    public static function createCardForGamemodeDaily(){
        $card = Card::inRandomOrder()->first();
        $pastDailyCard = GamemodeDaily::where('card_id',$card->cardId)
                        ->orderBy('created_at')
                        ->first();
        if ($pastDailyCard && $pastDailyCard.created_at > Carbon::now()->subMonth()) {
            createCardForGamemodeDaily();
        }

        $daily = new GamemodeDaily();
        $daily->card_id = $card->cardId;
        $daily->save();
        return $daily;
    }


    public static function getLatestDailyCard(){

        $dailyCardId = GamemodeDaily::first();
        $dailyCard = Card::findbyCardId($dailyCardId->card_id);
        return $dailyCard;
    }



}
