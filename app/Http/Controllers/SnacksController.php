<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Snacks;

class SnacksController extends Controller
{
    public function create()
    {return inertia('Snacks/Create');}
    public function index()
    {return inertia('Snacks/Index',[
        'snacks'=>Snacks::all(),
    ]);}
}
