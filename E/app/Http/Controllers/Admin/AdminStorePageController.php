<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class AdminStorePageController extends Controller
{
    public function index()
    {
        $Data = [];
        $Data['title'] = 'Admin Store pages';
        $Data['stores'] = Product::all();
        return view('Admin.Store.index')->with('Data', $Data);
    }
    public function createNewStore(Request $request)
    {

        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric|gt:0',
            'quantity' => 'gt:0',
            'file_path' => 'image',
        ]);
        $product = new Product;
        $product->name = $request->input('name');
        $product->file_path = $request->file('file_path')->store('products');
        $product->quantity = $request->input('quantity');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->category = $request->input('category');
        $product->color = $request->input('color');
        $product->brand = $request->input('brand');
        $product->size = $request->input('size');
        $product->save();

        return back();
    }
    public function deleteStore($id)
    {
        Product::destroy($id);
        return back();
    }
    public function editStore($id)
    {
        $storeData = [];
        $storeData['title'] = 'Edit Store';
        $storeData['store'] = Product::findOrFail($id);
        return view('Admin.Store.edit')->with('storeData', $storeData);
    }
    public function updateStore(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric|gt:0',
            'quantity' => 'gt:0',
            'file_path' => 'image',
        ]);

        $product = Product::findOrFail($id);
        $product->name = $request->input('name');
        $product->file_path = $request->file('file_path')->store('products');
        $product->quantity = $request->input('quantity');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->category = $request->input('category');
        $product->color = $request->input('color');
        $product->brand = $request->input('brand');
        $product->size = $request->input('size');



        $product->save();

        return redirect()->route('admin.store.index');
    }
}
