<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class BlogController extends Controller
{
    public function index()
    {return inertia('Blog',[
        'news'=>News::all(),
    ]);}
}
