<?php
use App\Http\Controllers\Admin;
use App\Http\Controllers\TovarController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeerController;
use App\Http\Controllers\AlcoholController;
use App\Http\Controllers\SnacksController;
use App\Http\Controllers\CigaretsController;
use App\Http\Controllers\MarkersController;

use Inertia\Inertia;
Route::get('/', [MarkersController::class,'show']);
Route::get('/blog', function () {
    return inertia('Blog');
});
Route::get('/beer', function () {
    return inertia('Beer');
});
Route::get('/snacks', function () {
    return inertia('Snacks');
});
Route::get('/alcohol', function () {
    return inertia('Alcohol;');
});
Route::get('/about', function () {
    return inertia('About');
});
Route::get('/catalog', [TovarController::class,'show']);
Route::post('/login', [Admin::class, 'login'])->name('login');
Route::get('/admin', function () {
    return inertia('Admin');
});
Route::get('/admin/beer/create',[BeerController::class,'create'])->name('beers.create');
Route::post('/admin/beer/create',[BeerController::class,'store'])->name('beers.store');
Route::get('/admin/beer/index',[BeerController::class,'index']);

Route::get('/admin/alcohol/create',[AlcoholController::class,'create']);
Route::get('/admin/alcohol/index',[AlcoholController::class,'index']);

Route::get('/admin/snacks/create',[SnacksController::class,'create']);
Route::get('/admin/snacks/index',[SnacksController::class,'index']);

// Route::get('/admin/cigarets/create',[CigaretsController::class,'create']);
// Route::get('/admin/cigarets/index',[CigaretsController::class,'index']);

Route::get('/admin/cigarets/create',[CigaretsController::class,'create'])->name('cigarets.create');
Route::post('/admin/cigarets/create',[CigaretsController::class,'store'])->name('cigarets.store');
Route::get('/admin/cigarets/index',[CigaretsController::class,'index']);

