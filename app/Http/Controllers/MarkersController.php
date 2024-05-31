<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Markers;


class MarkersController extends Controller
{
    
    public function store(Request $request){
        $data = $request->validate([
        'x' => 'required|string',
        'y' => 'required|string',
        'adress' => 'required|string',                     
                        

    ]);

    Markers::Create($data); 
    return to_route('markers.create');}

    public function create()
    {return inertia('Markers/Create');}
    public function index()
    {return inertia('Markers/Index',[
        'markers'=>Markers::all(),
    ]);}
    public function show()
    {
        
        return inertia('Main', [
            'markers' => Markers::all(),
            ]);
    }
}
