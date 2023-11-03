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
     * Sets a new daily card
     */
    public static function storeNewGamemodeCard(string $gamemode)
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
            GamemodeCard::storeNewGamemodeCard($gamemode);
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


    public static function storeNewGamemodeCardForAllGamemodes(string $gamemode)
    {
        GamemodeCard::storeNewGamemodeCard('standard');
        GamemodeCard::storeNewGamemodeCard('wild');
        GamemodeCard::storeNewGamemodeCard('classic');
        return ApiResponse::success(null, 'All new cards for gamemodes have been set');
    }

}
