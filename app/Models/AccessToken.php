<?php

namespace App\Models;

use App\Http\Responses\ApiResponse;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\BlizzardApiController;
use Carbon\Carbon;

class AccessToken extends Model
{
    protected $table = 'access_tokens';
    protected $fillable = ['name', 'access_token', 'expires_at'];

    public function saveOrUpdateBlizzardToken()
    {
        // Retrieve the current token
        $token = AccessToken::where('name', 'blizzard_api')->first();

        if ($token) {
            // Check if the existing token has expired
            if ($token->expires_at > Carbon::now()) {
                return ApiResponse::success($token, 'Blizzard access token is still valid');
            }
        }

        $blizzardApi = new BlizzardApiController();
        $newToken = json_decode($blizzardApi->getNewToken()->content(), true);

        if ($newToken['status'] === 'success') {
            $accessToken = $newToken['data']['access_token'];
            $expirationTimestamp = Carbon::now()->addSeconds($newToken['data']['expires_in']);

            if ($token) {
                // Update the existing token
                $token->update([
                    'access_token' => $accessToken,
                    'expires_at' => $expirationTimestamp,
                ]);
            } else {
                // Insert token
                $token = AccessToken::create([
                    'name' => 'blizzard_api',
                    'access_token' => $accessToken,
                    'expires_at' => $expirationTimestamp,
                ]);
            }

            return ApiResponse::success($token, 'Blizzard access token updated or stored successfully');
        } else {
            return ApiResponse::error($newToken['message']);
        }
    }

    public function getBlizzardToken()
    {
        return AccessToken::where('name', 'blizzard_api')->first();
    }

}
