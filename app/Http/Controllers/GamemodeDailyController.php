<?php

namespace App\Http\Controllers;

use App\Models\GamemodeDaily;
use Illuminate\Http\Request;

class GamemodeDailyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dailies = GamemodeDaily::all();
     
        return response()->json([
            "success" => true,
            "message" => "All Daily",
            "data" => $dailies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'card_id' => 'required'
        ]);
    
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
    
        $daily = GamemodeDaily::create($request->all());
 
        return response()->json([
            "success" => true,
            "message" => "GamemodeDaily created successfully.",
            "data" => $daily
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $daily = GamemodeDaily::find($id);
   
        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }
         
        return response()->json([
            "success" => true,
            "message" => "GamemodeDaily retrieved successfully.",
            "data" => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GamemodeDaily $gamemodeDaily)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, GamemodeDaily $gamemodeDaily)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GamemodeDaily $gamemodeDaily)
    {
        $gamemodeDaily->delete();
    
        return response()->json([
            "success" => true,
            "message" => "GamemodeDaily deleted successfully.",
            "data" => null
        ]);
    }
}
