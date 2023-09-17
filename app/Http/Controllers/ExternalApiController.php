<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class ExternalApiController extends Controller
{

    const BLIZZARD_API_URL_CARDS = 'https://us.api.blizzard.com/hearthstone/cards';

    /**
     * Do a CURL to Blizzard API
     * Doesn't return all results but only a page
     */
    public static function apiCallBlizzard($url, $locale = 'en_US', $pageSize = 500, $page = 1, $access_token){
        $url = $url . '?' . "locale=$locale" . "&pageSize=$pageSize" . "&page=$page" ."&access_token=$access_token";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL certificate verification (not recommended for production)
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            return 'cURL Error: ' . curl_error($ch);
        }
        curl_close($ch);
        return $response;
    }
    
    /**
     * Get all the cards from Blizzard API
     */
    public static function getAllCardsFromBlizzardApi()
    {
        ini_set('max_execution_time', 300);
        $data = ExternalApiController::apiCallBlizzard(self::BLIZZARD_API_URL_CARDS, 'en_US', 500, 1, env('ACCESS_TOKEN_BLZZARD_HEARTHSTONE_API'));
        $infosFromAPI = json_decode($data, true);
        $cardsFromAPI = $infosFromAPI['cards'];

        // For testing
        // return $cardsFromAPI['cards'];

        // All the pages
        for ($i = 2; $i <= $infosFromAPI['pageCount']; $i++) {
            // New CURL call
            $data = ExternalApiController::apiCallBlizzard(self::BLIZZARD_API_URL_CARDS, 'en_US', 500, $i, env('ACCESS_TOKEN_BLZZARD_HEARTHSTONE_API'));
            $cardsToAdd = json_decode($data, true);
        
            // Flatten the nested arrays and merge them
            foreach ($cardsToAdd['cards'] as $card) {
                $cardsFromAPI[] = $card;
            }
        }
        
        return $cardsFromAPI;
    }
}
