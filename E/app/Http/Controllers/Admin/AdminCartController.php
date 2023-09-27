<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;

class AdminCartController extends Controller
{
    public function index()
    {
        $Data = [];
        $Data['title'] = 'Admin Cart';
        $Data['carts'] = Cart::all();
        return view('Admin.Cart.index')->with('Data', $Data);
    }
    public function add(Request $request)
    {
        $product = Product::find($request->productId);

        if ($product) {
            $item = new Cart();
            $item->product_id = $request->productId;
            $item->quantityPro = $request->quantityPro;
            $item->price = $product->price;
            $item->name = $product->name;
            $item->file_path = $product->file_path;
            $item->save();
            return back();
        } else {
            session()->flash('product_not_found', 'Sản phẩm không tồn tại.');
            return redirect()->route('admin.cart.index');
        }
    }
    public function edit($id)
    {
        $data = [];
        $data['title'] = 'Edit Cart';
        $data['cart'] = Cart::findOrFail($id);
        return view('Admin.Cart.edit')->with('data', $data);
    }
    public function updateQuantityPro(Request $request, $id)
    {
        $product = Product::find($request->productId);
        $item = Cart::findOrFail($id);
        $item->quantityPro = $request->quantityPro;
        $item->product_id = $request->productId;
        $item->price = $product->price;
        $item->name = $product->name;
        $item->file_path = $product->file_path;
        $item->save();
        return redirect()->route('admin.cart.index');
    }
    public function delete($id)
    {
        Cart::destroy($id);
        return back();
    }
}
