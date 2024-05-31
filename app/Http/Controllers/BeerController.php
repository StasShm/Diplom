<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beer;

class BeerController extends Controller
{
    public function store(Request $request){
            $data = $request->validate([
            'name' => 'required|string',
            'price' => 'required|string',
            'class' => 'required|string',                     
            'image' => 'nullable|string',
        ]);
        Beer::Create($data); return to_route('beers.create');
    }
    public function create()
    {return inertia('Beers/Create');}
    public function index()
    {return inertia('Beers/Index',[
        'beers'=>Beer::all(),
    ]);}
}
