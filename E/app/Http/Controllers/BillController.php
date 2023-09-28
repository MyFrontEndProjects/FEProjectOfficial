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
        
        try {
            // Sử dụng Eloquent để lấy bản ghi mới nhất với điều kiện user_id
            $latestRecord = Bill::where('user_id', $request->user_id)->latest('created_at')->first();
            
            // Kiểm tra xem có bản ghi nào hay không
            if ($latestRecord) {
                return response()->json($latestRecord);
            } else {
                return response()->json(['message' => 'Không tìm thấy bản ghi'], 404);
            }
        } catch (\Exception $e) {
            // Xử lý lỗi nếu có
            return response()->json(['message' => 'Lỗi: ' . $e->getMessage()], 500);
        }
    }
}
