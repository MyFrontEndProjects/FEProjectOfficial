<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Bill;
use App\Models\User;
class BillController extends Controller
{
    public function checkout(Request $request){
        $user = User::find($request->user_id);
        if ($user){
            $bill = new Bill();
            $bill->total = $request->total;
            $bill->user_id = $user->id;
            $bill->save();
            Cart::where('user_id', $user->id)->delete();
            return $bill;
        }else {
            return response()->json([
                "message" => 'Thanh toan that bai'
            ]);
        }
    }
    public function getCheckout(Request $request){
        
        $bills = Bill::where('user_id',$request->user_id)->get();
        return $bills;
    }
    public function getId(Request $request){
        
        return Bill::where('user_id', $request->user_id)->latest();
    }

    public function deleteCheckout($id){
        try {
            $bill = Bill::findOrFail($id);
            $bill->delete();

            return response()->json([
                "message" => 'Xóa thành công'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "message" => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }
}
