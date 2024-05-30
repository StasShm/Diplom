<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alcohol;

class AlcoholController extends Controller
{
    public function create()
    {return inertia('Alcohols/Create');}
    public function index()
    {return inertia('Alcohols/Index',[
        'alcohols'=>Alcohol::all(),
    ]);}
}