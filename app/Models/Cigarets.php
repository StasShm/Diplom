<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cigarets extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'price','nicotine', 'image'];

}
