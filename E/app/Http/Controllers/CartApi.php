<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use App\Models\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Database\Console\Migrations\StatusCommand;
use Illuminate\Http\Request;

class CartApi extends Controller
{
    public function showApi($id)
    {
        return Cart::find($id);
    }
    function list()
    {
        return Cart::all();
    }
    public function delete($id)
    {
        Cart::destroy($id);
        return Cart::all();
    }
    public function add(Request $request)
    {
        $product = Product::find($request->productId);
        $user = User::find($request->user_id);
        if ($product && $user) {
            $item = new Cart();
            $item->user_id = $request->user_id;
            $item->product_id = $request->productId;
            $item->quantityPro = $request->quantityPro;
            $item->price = $product->price;
            $item->name= $product->name;
            $item->file_path = $product->file_path;
            $item->save();
            return $item;
        } else {
            return response()->json([
                "message" => 'San Pham hoac nguoi dung khong ton tai'
            ]);
        }
    }

    public function updateQuantityPro(Request $request, $id)
    {
        $item = Cart::findOrFail($id);
        $item->quantityPro = $request->quantityPro;
        $item->save();
        return $item;
    }
}
