<?php
use App\Http\Controllers\Admin;
use App\Http\Controllers\TovarController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeerController;
use App\Http\Controllers\AlcoholController;
use App\Http\Controllers\SnacksController;
use Inertia\Inertia;
Route::get('/', function () {
    return inertia('Main');
});
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
Route::get('/admin/beer/create',[BeerController::class,'create']);
Route::get('/admin/beer/index',[BeerController::class,'index']);

Route::get('/admin/alcohol/create',[AlcoholController::class,'create']);
Route::get('/admin/alcohol/index',[AlcoholController::class,'index']);

Route::get('/admin/snacks/create',[SnacksController::class,'create']);
Route::get('/admin/snacks/index',[SnacksController::class,'index']);