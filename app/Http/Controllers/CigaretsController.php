<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cigarets;


class CigaretsController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
        'name' => 'required|string',
        'price' => 'required|string',
        'nicotine' => 'required|string',                     
        'image' => 'nullable|string',
    ]);
    Cigarets::Create($data); return to_route('cigarets.create');
}
    public function create()
    {return inertia('Cigarets/Create');}
    public function index()
    {return inertia('Cigarets/Index',[
        'cigarets'=>Cigarets::all(),
    ]);}
}
