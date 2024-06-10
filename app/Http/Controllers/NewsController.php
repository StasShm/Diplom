<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
        'image' => 'required|string',
        'title' => 'required|string',
        'main' => 'required|string',                     
                        

    ]);

    News::Create($data); 
    return to_route('news.create');}

    public function create()
    {return inertia('News/Create');}
    
    public function index()
    {return inertia('News/Index',[
        'news'=>News::all(),
    ]);}
}
