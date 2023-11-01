<?php

namespace App\Http\Controllers;

use App\Models\SetGroup;
use Illuminate\Http\Request;

class SetGroupController extends Controller
{
    /**
     * Values from Blizzard => Values from database
     */
    public $propertyMapping = [
        'slug' => 'slug',
        'year' => 'year',
        'svg' => 'svg',
        'cardSets' => 'cardSets',
        'name' => 'name',
        'standard' => 'standard',
        'icon' => 'icon'
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
            return ApiResponse::error('Failed to store all sets');
        }
    }
}
