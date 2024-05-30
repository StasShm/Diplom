<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beer;
use App\Models\Alcohol;
use App\Models\Snacks;
use App\Models\Cigarets;
use App\Models\Other;
use App\Models\News;

class TovarController extends Controller
{
    public function show()
    {
        return inertia('Catalog', [
            'beer' => Beer::all(),
            'alcohol' => Alcohol::all(),
            'snack'=> Snacks::all(),
            'cigaret'=> Cigarets::all(),
            'other' => Other::all(),
            'news'=> News::all(),
        ]);
    }
}
