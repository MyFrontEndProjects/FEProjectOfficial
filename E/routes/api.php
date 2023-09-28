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
Route::get('login', function (){
    $response = ['errorCode'=>401, 'message'=>'Unauthenticated'];
    return response()->json($response, 401);
})->name('login');

Route::get ('search/{key}', [ProductController::class,'search']);
// Route lấy danh sách sản phẩm 
Route::post ('list', [ProductController::class,'list']);

// Route lấy category của sản phẩm
Route::get ('getCategory', [ProductController::class,'getCategory']);

// Route lấy danh sách theo giá 
Route::post ('listprice', [ProductController::class,'listprice']);

// Route lấy price của sản phẩm
Route::get ('getPrice', [ProductController::class,'getPrice']);


// Route show sản phẩm
Route::get ('show/{id}', [ProductController::class,'showApi']);
// Route::middleware('auth')->group(function () {
// Route::get ('cart/list', 'App\Http\Controllers\CartApi@list');
// Route::post('/cart/add', 'App\Http\Controllers\CartApi@add');
// Route::get('/cart/show/{id}', 'App\Http\Controllers\CartApi@showApi');
// Route::put('/cart/update/{id}', 'App\Http\Controllers\CartApi@updateQuantityPro');
// Route::delete('/cart/delete/{id}', 'App\Http\Controllers\CartApi@delete');
// });
Route::get ('cart/list', 'App\Http\Controllers\CartApi@list');
Route::post('/cart/add', 'App\Http\Controllers\CartApi@add');
Route::get('/cart/show/{id}', 'App\Http\Controllers\CartApi@showApi');
Route::put('/cart/update/{id}', 'App\Http\Controllers\CartApi@updateQuantityPro');
Route::delete('/cart/delete/{id}', 'App\Http\Controllers\CartApi@delete');

Route::post ('/Comment/list', 'App\Http\Controllers\CommentController@list');
Route::post ('/Comment/listPro', 'App\Http\Controllers\CommentController@listCmtPro');
Route::post('/Comment/add', 'App\Http\Controllers\CommentController@add');
Route::get('/Comment/show/{id}', 'App\Http\Controllers\CommentController@show');
Route::put('/Comment/update/{id}', 'App\Http\Controllers\CommentController@update');
Route::delete('/Comment/delete/{id}', 'App\Http\Controllers\CommentController@delete');


Route::post ('/Reviews/list', 'App\Http\Controllers\ReviewsController@list');
Route::get ('/Reviews/getAll', 'App\Http\Controllers\ReviewsController@getAll');
Route::post('/Reviews/add', 'App\Http\Controllers\ReviewsController@add');
// Route::get('/Reviews/show/{id}', 'App\Http\Controllers\ReviewsController@show');
Route::put('/Reviews/update/{id}', 'App\Http\Controllers\ReviewsController@update');
Route::delete('/Reviews/delete/{id}', 'App\Http\Controllers\ReviewsController@delete');

