<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\Item;
use App\Models\User;
use Illuminate\Console\View\Components\Alert;
use Illuminate\Http\Request;

class CartController extends Controller
{
    

    public function index(Request $request){
        $total = 0;
        $CarsInCart = [];
        $CarsInSession = $request->session()->get('stores');
        if ($CarsInSession) {
            $CarsInCart = Product::findMany(array_keys($CarsInSession));
            $total = Product::sumCarsByQuantity($CarsInCart, $CarsInSession);
        }
        $showCart = [];
        $showCart['title'] = 'Shopping Cart';
        $showCart['total'] = $total;
        $showCart['stores'] = $CarsInCart;
        return view('cart.index')->with('showCart', $showCart);
    }
    
    
    public function add(Request $request, $id)
    {
        $stores = $request->session()->get("stores");
        $quantity = $request->input('quantity') ?? 1;
        $stores[$id] = $quantity;
        
        $request->session()->put("stores", $stores);
        return redirect()->route('cart.index');
    }

    public function addToCard(Request $request, $id)
    {
        $stores = $request->session()->get("stores");
        $quantity = $request->input('quantity') ?? 1;
        $stores[$id] = $quantity;
        $request->session()->put("stores", $stores);
        return redirect()->back();
    }

    // public function carpartAdd(Request $request, $id)
    // {
    //     $carpart = Sanpham::findorFail($id);
    //     $store = $request->session()->get("store");
    //     $quantity = $request->input('quantity') ?? 1;
    //     $store[$id] = $quantity;
    //     $request->session()->put("stores", $stores);
    //     return redirect()->back();
    // }


    public function delete(Request $request)
    {
        $request->session()->forget('stores');
        return back();
    }

    public function purchase(Request $request)
    {
        $showCartInSession = $request->session()->get("stores");
        if ($showCartInSession) {
            $userId = Auth::user()->getId();
            $order = new Order();
            $order->setUserId($userId);
            $order->setTotal(0);
            $order->save();

            $total = 0;
            $showCartInCart = Product::findMany(array_keys($showCartInSession));
            foreach ($showCartInCart as $store) {
                $quantity = $showCartInSession[$store->id];
                $item = new Item();
                $item->setQuantity($quantity);
                $item->setPrice($store->price);
                $item->setProductId($store->id);
                $item->setOrderId($order->id);
                $item->save();
                $total = $total + ($store->price * $quantity);
            }
            $order->setTotal($total);
            $order->save();
            $newBalance = Auth::user()->getBalance() - $total;
            Auth::user()->setBalance($newBalance);
            Auth::user()->save();
            $request->session()->forget('s$showCart');
            $viewPurchase = [];
            $viewPurchase["title"] = "Purchase - Online Store";
            $viewPurchase["subtitle"] = "Purchase Status";
            $viewPurchase["order"] = $order;
            return view('cart.purchase')->with("viewPurchase", $viewPurchase);
        } else {
            return redirect()->route('cart.index');
        }
    }
}
