<?php

namespace App\Http\Controllers;

use App\Http\Responses\ApiResponse;
use App\Models\Set;
use App\Models\SetGroup;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class SetController extends Controller
{

    /**
     * Values from Blizzard => Values from database
     */
    public $propertyMapping = [
        'id' => 'setId',
        'name' => 'name',
        'slug' => 'slug',
        'type' => 'type'
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function updateAllCards()
    {
        $jsonFilePath = storage_path('app/hearthstone_set_groups.json');
        $jsonData = File::get($jsonFilePath);
        $jsonData = json_decode($jsonData, true);

        try {
            foreach ($jsonData['original']['data'] as $jsonSetGroup) {
                // Mapping
                $dataToStore = [];
                foreach ($this->propertyMapping as $jsonKey => $dbField) {
                    if (isset($jsonSetGroup[$jsonKey])) {
                        if ($dbField === 'cardSets') {
                            // Convert array to JSON string
                            $dataToStore[$dbField] = json_encode($jsonSetGroup[$jsonKey]);
                        } else {
                            $dataToStore[$dbField] = $jsonSetGroup[$jsonKey];
                        }
                    }
                }

                // Duplicate ?
                $existingSetGroup = SetGroup::where('cardId', $dataToStore['cardId'])->first();

                if ($existingSetGroup) {
                    $existingSetGroup->update($dataToStore);
                } else {
                    SetGroup::create($dataToStore);
                }
            }
            return ApiResponse::success(null, 'All set groups have been updated in database');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to update all set groups');
        }
    }


}
