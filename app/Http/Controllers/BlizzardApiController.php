<?php

namespace App\Http\Controllers;

use App\Models\AccessToken;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Responses\ApiResponse;

class BlizzardApiController extends Controller
{
    public function getNewToken()
    {
        $client = new Client();
        try {
            $response = $client->post('https://oauth.battle.net/token', [
                'auth' => [
                    env('BLIZZARD_CLIENT_ID'),
                    env('BLIZZARD_CLIENT_SECRET')
                ],
                'form_params' => [
                    'grant_type' => 'client_credentials',
                ],
                'verify' => storage_path('app/cacert.pem'),
            ]);
            $data = json_decode($response->getBody(), true);
            return ApiResponse::success($data, 'Access token retrieved successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to retrieve access token');
        }
    }

    public function getAllCards()
    {
        set_time_limit(300);
        $client = new Client();
        $accessToken = new AccessToken();
        $blizzardToken = $accessToken->getBlizzardToken()['access_token'];
        try {
            $cards = [];
            $page = 1;

            while (true) {
                $response = $client->get('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&page=' . $page, [
                    'headers' => [
                        'Authorization' => 'Bearer ' . $blizzardToken,
                    ],
                    'verify' => storage_path('app/cacert.pem'),
                ]);

                $data = json_decode($response->getBody(), true);
                $newCards = $data['cards'];

                if (empty($newCards)) {
                    break; // No more cards to fetch
                }

                $cards = array_merge($cards, $newCards);
                $page++;
            }

            return ApiResponse::success($cards, 'All Hearthstone cards retrieved successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to retrieve Hearthstone cards');
        }
    }


    public function storeAllCardsInJson()
    {
        try {
            $cards = $this->getAllCards();
            $filePath = storage_path('app/hearthstone_cards.json');
            file_put_contents($filePath, json_encode($cards, JSON_PRETTY_PRINT));
            return ApiResponse::success(null, 'All Hearthstone cards stored in json successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to store Hearthstone cards');
        }
    }

    public function getAllSets()
    {
        set_time_limit(60);
        $client = new Client();
        $accessToken = new AccessToken();
        $blizzardToken = $accessToken->getBlizzardToken()['access_token'];
        try {
            $response = $client->get('https://us.api.blizzard.com/hearthstone/metadata/sets?locale=en_US', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $blizzardToken,
                ],
                'verify' => storage_path('app/cacert.pem'),
            ]);

            $data = json_decode($response->getBody(), true);

            return ApiResponse::success($data, 'All Hearthstone sets retrieved successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to retrieve Hearthstone sets');
        }
    }

    public function storeAllSetsInJson()
    {
        try {
            $sets = $this->getAllSets();
            $filePath = storage_path('app/hearthstone_sets.json');
            file_put_contents($filePath, json_encode($sets, JSON_PRETTY_PRINT));
            return ApiResponse::success(null, 'All Hearthstone sets stored in json successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to store Hearthstone sets');
        }
    }

    public function getAllSetGroups()
    {
        set_time_limit(60);
        $client = new Client();
        $accessToken = new AccessToken();
        $blizzardToken = $accessToken->getBlizzardToken()['access_token'];
        try {
            $response = $client->get('https://us.api.blizzard.com/hearthstone/metadata/setGroups?locale=en_US', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $blizzardToken,
                ],
                'verify' => storage_path('app/cacert.pem'),
            ]);

            $data = json_decode($response->getBody(), true);

            return ApiResponse::success($data, 'All Hearthstone set groups retrieved successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to retrieve Hearthstone set groups');
        }
    }

    public function storeAllSetGroupsInJson()
    {
        try {
            $sets = $this->getAllSetGroups();
            $filePath = storage_path('app/hearthstone_set_groups.json');
            file_put_contents($filePath, json_encode($sets, JSON_PRETTY_PRINT));
            return ApiResponse::success(null, 'All Hearthstone set groups stored in json successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to store Hearthstone set groups');
        }
    }
}
