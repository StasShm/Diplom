<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Other;

class OthersController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
        'name' => 'required|string',
        'price' => 'required|string',
        'type' => 'required|string',                     
        'image' => 'nullable|string',
    ]);
    Other::Create($data); return to_route('others.create');
}
    public function create()
    {return inertia('Others/Create');}
    public function index()
    {return inertia('Others/Index',[
        'cigarets'=>Other::all(),
    ]);}
}
