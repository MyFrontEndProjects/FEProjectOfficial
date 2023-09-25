<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartApi;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route cho đăng ký
Route::post('/register', [UserController::class, 'register']);

// Route cho đăng nhập
Route::post('/login', 'App\Http\Controllers\UserController@login');
Route::get ('search/{key}', [ProductController::class,'search']);
Route::get ('list', [ProductController::class,'list']);
Route::get ('show/{id}', [ProductController::class,'showApi']);

Route::get ('cart/list', 'App\Http\Controllers\CartApi@list');
Route::post('/cart/add', 'App\Http\Controllers\CartApi@add');
Route::get('/cart/show/{id}', 'App\Http\Controllers\CartApi@showApi');
Route::put('/cart/update/{id}', 'App\Http\Controllers\CartApi@updateQuantityPro');
Route::delete('/cart/delete/{id}', 'App\Http\Controllers\CartApi@delete');
