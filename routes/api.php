<?php

use App\Http\Controllers\SetController;
use App\Http\Controllers\SetGroupController;
use App\Models\GamemodeCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CardController;
use App\Models\Card;
use App\Models\GamemodeDaily;
use App\Http\Controllers\ExternalApiController;


use App\Http\Controllers\BlizzardApiController;
use App\Models\AccessToken;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('card', CardController::class);

Route::prefix('blizzard')->group(function () {

    Route::post('/getAllCardsFromApi', [ExternalApiController::class, 'getAllCardsFromBlizzardApi']);
});;



// Cards
Route::resource('card', CardController::class);
Route::get('/getCardImageWithoutName/{id}', [CardController::class, 'getCardImageWithoutName']);
Route::get('/getRandomCard' , [Card::class, 'getRandomCard']);
Route::get('/getAllCardNames' , [Card::class, 'getAllCardNames']);



// Data From Api
Route::get('/blizzard/token/new', [BlizzardApiController::class, 'getNewToken']);
Route::get('/blizzard/token/store', [AccessToken::class, 'saveOrUpdateBlizzardToken']);
Route::get('/blizzard/cards/getAll', [BlizzardApiController::class, 'getAllCards']);
Route::get('/blizzard/cards/storeAllInJson', [BlizzardApiController::class, 'storeAllCardsInJson']);
Route::get('/blizzard/cards/updateAll', [CardController::class, 'updateAllCards']);
Route::get('/blizzard/sets/getAll', [BlizzardApiController::class, 'getAllSets']);
Route::get('/blizzard/sets/storeAllInJson', [BlizzardApiController::class, 'storeAllSetsInJson']);
Route::get('/blizzard/sets/updateAll', [SetController::class, 'updateAllSets']);
Route::get('/blizzard/setGroups/getAll', [BlizzardApiController::class, 'getAllSetGroups']);
Route::get('/blizzard/setGroups/storeAllInJson', [BlizzardApiController::class, 'storeAllSetGroupsInJson']);
Route::get('/blizzard/setGroups/updateAll', [SetGroupController::class, 'updateAllSetGroups']);


Route::get('/card/{gamemode}/get', [Card::class, 'getCardInGamemode']);

Route::get('/gamemode/card/new/{gamemode}', [GamemodeCard::class, 'storeNewCard']);