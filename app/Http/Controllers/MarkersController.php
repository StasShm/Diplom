<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Markers;


class MarkersController extends Controller
{
    public function show()
    {
        
        return inertia('Main', [
            'markers' => Markers::all(),
            ]);
    }
}
