<?php
use App\Http\Controllers\Admin as AdminController;
use App\Http\Controllers\TovarController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeerController;
use App\Http\Controllers\AlcoholController;
use App\Http\Controllers\SnacksController;
use App\Http\Controllers\CigaretsController;
use App\Http\Controllers\MarkersController;
use App\Http\Controllers\OthersController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\BlogController;
use App\Http\Middleware\Admin;




use Inertia\Inertia;
Route::get('/', [MarkersController::class,'show']);
Route::get('/blog', [BlogController::class,'index']);
Route::get('/about', function () {
    return inertia('About');
});

Route::get('/catalog', [TovarController::class,'show'])->name('main');
Route::post('/login', [AdminController::class, 'login'])->name('login');
Route::post('/logout', [AdminController::class, 'logout'])->name('logout');

Route::get('/admin', function () {
    return inertia('Admin');
})->name('admin');

Route::middleware('admin')->group(function () {
Route::get('/admin/beers/create',[BeerController::class,'create'])->name('beers.create');
Route::post('/admin/beers/create',[BeerController::class,'store'])->name('beers.store');
Route::get('/admin/beers/index',[BeerController::class,'index']);



Route::get('/admin/cigarets/create',[CigaretsController::class,'create'])->name('cigarets.create');
Route::post('/admin/cigarets/create',[CigaretsController::class,'store'])->name('cigarets.store');
Route::get('/admin/cigarets/index',[CigaretsController::class,'index']);

Route::get('/admin/snacks/create',[SnacksController::class,'create'])->name('snacks.create');
Route::post('/admin/snacks/create',[SnacksController::class,'store'])->name('snacks.store');
Route::get('/admin/snacks/index',[SnacksController::class,'index']);

Route::get('/admin/others/create',[OthersController::class,'create'])->name('others.create');
Route::post('/admin/others/create',[OthersController::class,'store'])->name('others.store');
Route::get('/admin/others/index',[OthersController::class,'index']);

Route::get('/admin/alcohols/create',[AlcoholController::class,'create'])->name('alcohols.create');
Route::post('/admin/alcohols/create',[AlcoholController::class,'store'])->name('alcohols.store');
Route::get('/admin/alcohols/index',[AlcoholController::class,'index']);

Route::get('/admin/news/create',[NewsController::class,'create'])->name('news.create');
Route::post('/admin/news/create',[NewsController::class,'store'])->name('news.store');
Route::get('/admin/news/index',[NewsController::class,'index']);

Route::get('/admin/markers/create',[MarkersController::class,'create'])->name('markers.create');
Route::post('/admin/markers/create',[MarkersController::class,'store'])->name('markers.store');
Route::get('/admin/markers/index',[MarkersController::class,'index']);
});
