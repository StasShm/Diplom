<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alcohol;

class AlcoholController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
        'name' => 'required|string',
        'price' => 'required|string',
        'class' => 'required|string',                     
        'image' => 'nullable|string',
        'volume' => 'required|string',                     

    ]);

    Alcohol::Create($data); 
    return to_route('alcohols.create');}

    public function create()
    {return inertia('Alcohols/Create');}
    public function index()
    {return inertia('Alcohols/Index',[
        'alcohols'=>Alcohol::all(),
    ]);}
}