<?php

namespace App\Http\Controllers;

use App\Http\Responses\ApiResponse;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CardController extends Controller
{

    /**
     * Values from Blizzard => Values from database
     */
    public $propertyMapping = [
        'id' => 'cardId',
        'collectible' => 'collectible',
        'slug' => 'slug',
        'classId' => 'classId',
        'multiclassIds' => 'multiclassIds',
        'minionTypeId' => 'minionTypeId',
        'spellSchoolIds' => 'spellSchoolIds',
        'cardTypeId' => 'cardTypeId',
        'cardSetId' => 'cardSetId',
        'rarityId' => 'rarityId',
        'artistName' => 'artistName',
        'health' => 'health',
        'attack' => 'attack',
        'armor' => 'armor',
        'manaCost' => 'manaCost',
        'durability' => 'durability',
        'name' => 'name',
        'text' => 'text',
        'image' => 'image',
        'imageGold' => 'imageGold',
        'flavorText' => 'flavorText',
        'cropImage' => 'cropImage',
        'runeCost' => 'runeCost'
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Card $card)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Card $card)
    {
        //
    }

    /**
     * Update all cards from Blizzard API
     * Called in a cron
     */
    public function updateAllCards()
    {
        $jsonFilePath = storage_path('app/hearthstone_cards.json');
        $jsonData = File::get($jsonFilePath);
        $jsonData = json_decode($jsonData, true);

        try {
            foreach ($jsonData['original']['data'] as $jsonCard) {
                // Mapping
                $dataToStore = [];
                foreach ($this->propertyMapping as $jsonKey => $dbField) {
                    if (isset($jsonCard[$jsonKey])) {
                        if ($dbField === 'multiclassIds' || $dbField === 'runeCost') {
                            // Convert array to JSON string
                            $dataToStore[$dbField] = json_encode($jsonCard[$jsonKey]);
                        } else {
                            $dataToStore[$dbField] = $jsonCard[$jsonKey];
                        }
                    }
                }

                // Duplicate ?
                $existingCard = Card::where('cardId', $dataToStore['cardId'])->first();

                if ($existingCard) {
                    $existingCard->update($dataToStore);
                } else {
                    Card::create($dataToStore);
                }
            }
            return ApiResponse::success(null, 'All cards have been updated in database');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to update all cards');
        }
    }

    public static function getCardImageWithoutName($id)
    {
        $card = Card::findByCardId($id);
        //$card = Card::getRandomCard();
        if ($card) {
            define("WIDTH", 375);
            define("HEIGHT", 517);
            $dest_image = imagecreatetruecolor(WIDTH, HEIGHT);
            // transparency 
            imagesavealpha($dest_image, true);

            // create a fully transparent background
            $trans_background = imagecolorallocatealpha($dest_image, 0, 0, 0, 127);

            // fill the image with a transparent background
            imagefill($dest_image, 0, 0, $trans_background);

            // fill the image with a transparent background
            $cardImage = imagecreatefrompng($card->image);
            if (imagesx($cardImage) == 404) {
                $cardImage = imagecrop($cardImage, ['x' => 15, 'y' => -1, 'width' => 375, 'height' => 518]);
            } else if (imagesx($cardImage) == 375) {
                $cardImage = imagecrop($cardImage, ['x' => 0, 'y' => 0, 'width' => 375, 'height' => 518]);
            } else {
                return 'Image size not managed';
            }
            $coverImage = imagecreatefrompng(self::getCardNameCover($card->id));

            // copy each png file on top of the destination png
            imagecopy($dest_image, $cardImage, 0, 0, 0, 0, WIDTH, HEIGHT);
            imagecopy($dest_image, $coverImage, 0, 0, 0, 0, WIDTH, HEIGHT);
            ob_start();
            imagepng($dest_image);
            $buffer = ob_get_contents();
            ob_end_clean();
            imagedestroy($dest_image);
            return response($buffer, 200)->header('Content-type', 'image/png');
        } else {
            return 'Card not found';
        }
    }


    public static function getCardNameCover($id)
    {
        $card = Card::find($id);
        if ($card) {
            switch ($card->cardTypeId) {
                case 3:
                    return 'C:\Users\robin\Documents\Code\hearthdle\images\ribbons\hero.png';
                case 4:
                    return 'C:\Users\robin\Documents\Code\hearthdle\images\ribbons\minion.png';
                case 5:
                    return 'C:\Users\robin\Documents\Code\hearthdle\images\ribbons\spell.png';
                case 7:
                    return 'C:\Users\robin\Documents\Code\hearthdle\images\ribbons\weapon.png';
                case 39:
                    return 'C:\Users\robin\Documents\Code\hearthdle\images\ribbons\location.png';
                default:
                    return 'Unknown card type';
            }
        }
        return 'Card not found';
    }
}
