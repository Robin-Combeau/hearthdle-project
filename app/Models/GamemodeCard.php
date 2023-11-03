<?php

namespace App\Models;

use App\Http\Responses\ApiResponse;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class GamemodeCard extends Model
{
    use HasFactory;

    protected $table = 'gamemode_cards';

    protected $fillable = [
        'gamemode',
        'cardId'
    ];

    /**
     * Returns the latest card selected for the gamemode
     */
    public static function getLatestCardForGamemode(string $gamemode)
    {
        return GamemodeCard::where('gamemode', $gamemode)
            ->orderBy('created_at', 'desc')
            ->first();
        ;
    }

    /**
     * Sets a new daily card
     */
    public static function storeNewCard(string $gamemode)
    {
        switch ($gamemode) {
            case 'standard':
                $randomCard = Card::getCardInGamemode('standard');
                break;
            case 'wild':
                $randomCard = Card::getCardInGamemode('wild');
                break;
            case 'classic':
                $randomCard = Card::getCardInGamemode('classic');
                break;
            default:
                return ApiResponse::error('No gamemode provided');
        }

        // Check if the selected card has no appeared in the last month
        $latestDuplicateCard = GamemodeCard::where('cardId', $randomCard->cardId)
            ->where('gamemode', $gamemode)
            ->orderBy('created_at')
            ->first();
        if ($latestDuplicateCard && $latestDuplicateCard['created_at'] > Carbon::now()->subMonth()) {
            GamemodeCard::storeNewCard($gamemode);
        }
        // Error if we already have a card in the last 23 hours with the same gamemode
        $latestGamemodeCard = GamemodeCard::where('gamemode', $gamemode)
            ->orderBy('created_at')
            ->first();
        if ($latestGamemodeCard && $latestGamemodeCard['created_at'] > Carbon::now()->subHours(23)) {
            return ApiResponse::error('A card with the same gamemode was added in the last 23 hours');
        }

        // Add the card
        $gamemodeCard = new GamemodeCard();
        $gamemodeCard->gamemode = $gamemode;
        $gamemodeCard->cardId = $randomCard->cardId;
        $gamemodeCard->save();
        return $gamemodeCard;
    }


    public static function storeNewCardForAllGamemodes(string $gamemode)
    {
        GamemodeCard::storeNewCard('standard');
        GamemodeCard::storeNewCard('wild');
        GamemodeCard::storeNewCard('classic');
        return ApiResponse::success(null, 'All new cards for gamemodes have been set');
    }

}
