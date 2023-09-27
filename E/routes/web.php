<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Route::get('/home', 'App\Http\Controllers\HomeController@home')
//     ->name("home");
Route::get('/', 'App\Http\Controllers\HomeController@income')
    ->name("income");
Route::get('/about', 'App\Http\Controllers\HomeController@about')
    ->name("home.AboutPage");

Route::get('/store/index', 'App\Http\Controllers\ProductController@index')
    ->name("store.index");

Route::get('/store/show/{id}', 'App\Http\Controllers\ProductController@show')
    ->name("store.show");

Route::get('/carpart/show/{id}', 'App\Http\Controllers\ProductController@carpartshow')
    ->name("carpart.show");

Route::post('/filter-stores', 'App\Http\Controllers\ProductController@filterStores')
    ->name('filterStores');


//get images
Route::get('/store/showItem/{filename}', 'App\Http\Controllers\ProductController@showImage')
    ->name('store.showImage');

Route::get('search', [
    'as' => 'search',
    'uses' => 'App\Http\Controllers\ProductController@getSearch',
]);
//suggest
Route::get('/suggest', 'App\Http\Controllers\ProductController@suggest_ajax')->name('suggest_ajax');

//Cart routes
Route::get('/cart', 'App\Http\Controllers\CartController@index')
    ->name('cart.index');
Route::get('/cart/delete', 'App\Http\Controllers\CartController@delete')
    ->name('cart.delete');

Route::post('/cart/add/{id}', 'App\Http\Controllers\CartController@add')
    ->name('cart.add');

Route::post('/cart/addToCard{id}', 'App\Http\Controllers\CartController@addToCard')
    ->name('cart.addNew');


//admin routes
Route::middleware('admin')->group(function () {
    Route::get('/admin', 'App\Http\Controllers\Admin\AdminStoreHomeController@index')
        ->name("admin.home.index");
    Route::get('/admin/store', 'App\Http\Controllers\Admin\AdminStorePageController@index')
        ->name("admin.store.index");
    Route::post('/admin/store/create', 'App\Http\Controllers\Admin\AdminStorePageController@CreateNewStore')
        ->name("admin.store.create");
    Route::delete('admin/store/{id}/delete', 'App\Http\Controllers\Admin\AdminStorePageController@deleteStore')
        ->name("admin.store.delete");
    Route::get('admin/store/{id}/edit', 'App\Http\Controllers\Admin\AdminStorePageController@editStore')
        ->name("admin.store.edit");
    Route::put('admin/store/{id}/update', 'App\Http\Controllers\Admin\AdminStorePageController@updateStore')
        ->name("admin.store.update");
    Route::get('admin/user', 'App\Http\Controllers\Admin\AdminUsersController@index')
        ->name("admin.user");
    Route::post('createUser', 'App\Http\Controllers\Admin\AdminUsersController@create')
        ->name('createUser');
    Route::delete('admin/user/{id}/delete', 'App\Http\Controllers\Admin\AdminUsersController@deleteUser')
        ->name("admin.user.delete");
    Route::get('/userProfile/{id}', 'App\Http\Controllers\Admin\AdminUsersController@userProfile')
        ->name('userProfile');
    Route::get('/userProfile/{id}/edit', 'App\Http\Controllers\Admin\AdminUsersController@editUser')
        ->name("userProfile.edit");
    Route::put('/userProfile/{id}/update', 'App\Http\Controllers\Admin\AdminUsersController@updateUser')
        ->name("userProfile.update");
    //cart
    Route::get('/admin/cart', 'App\Http\Controllers\Admin\AdminCartController@index')
        ->name("admin.cart.index");

    Route::post('/admin/cart/add', 'App\Http\Controllers\Admin\AdminCartController@add')
        ->name("admin.cart.add");
        
    Route::delete('admin/cart/{id}/delete', 'App\Http\Controllers\Admin\AdminCartPageController@delete')
        ->name("admin.cart.delete");
    Route::get('admin/cart/{id}/edit', 'App\Http\Controllers\Admin\AdminCartPageController@edit')
        ->name("admin.cart.edit");
    Route::put('admin/cart/{id}/update', 'App\Http\Controllers\Admin\AdminCartPageController@update')
        ->name("admin.cart.update");
});



Auth::routes();
Route::post('/register', 'App\Http\Controllers\Auth\RegisterController@register')->name('register');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'home'])->name('home');


