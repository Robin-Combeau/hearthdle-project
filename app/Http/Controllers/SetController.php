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

    public function updateAllSets()
    {
        $jsonFilePath = storage_path('app/hearthstone_sets.json');
        $jsonData = File::get($jsonFilePath);
        $jsonData = json_decode($jsonData, true);

        try {
            foreach ($jsonData['original']['data'] as $jsonSet) {
                // Mapping
                $dataToStore = [];
                foreach ($this->propertyMapping as $jsonKey => $dbField) {
                    if (isset($jsonSet[$jsonKey])) {
                        $dataToStore[$dbField] = $jsonSet[$jsonKey];
                    }
                }

                // Duplicate ?
                $existingSet = Set::where('setId', $dataToStore['setId'])->first();

                if ($existingSet) {
                    $existingSet->update($dataToStore);
                } else {
                    Set::create($dataToStore);
                }
            }
            return ApiResponse::success(null, 'All sets have been updated in database');
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to update all sets');
        }
    }


}
