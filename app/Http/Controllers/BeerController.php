<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beer;

class BeerController extends Controller
{
    public function create()
    {return inertia('Beers/Create');}
    public function index()
    {return inertia('Beers/Index',[
        'beers'=>Beer::all(),
    ]);}
}
