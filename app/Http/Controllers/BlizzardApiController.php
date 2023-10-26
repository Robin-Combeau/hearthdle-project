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
}
