<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CardController;
use App\Models\Card;
use App\Http\Controllers\ExternalApiController;

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

Route::prefix('cards')->group(function () {
    Route::get('/addAllCardsFromBlizzardApi', [CardController::class, 'addAllCardsFromBlizzardApi']);
});;
Route::get('/getAllCardsFromApi', [ExternalApiController::class, 'getAllCardsFromBlizzardApi']);






Route::get('/getcardImageWithoutName/{id}', [CardController::class, 'getCardImageWithoutName']);
Route::get('/getRandomCard' , [CardController::class, 'getRandomCard']);

Route::get('/getAllCardNames' , [CardController::class, 'getAllCardNames']);