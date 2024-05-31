<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Snacks;

class SnacksController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
        'name' => 'required|string',
        'price' => 'required|string',
        'class' => 'required|string',                     
        'image' => 'nullable|string',
        'mass' => 'required|string',                     

    ]);

    Snacks::Create($data); 
    return to_route('snacks.create');}
    
    public function create()
    {return inertia('Snacks/Create');}
    public function index()
    {return inertia('Snacks/Index',[
        'snacks'=>Snacks::all(),
    ]);}
}
