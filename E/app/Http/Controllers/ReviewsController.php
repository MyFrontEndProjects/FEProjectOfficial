<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Review;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function add(Request $request) {

        $user = User::find($request->user_id);
        $review = $request->review;
        if ($review ==null || $review =='') {
            return response()->json([
                "message" => 'review not found',
            ]);
        } else {
            if ($user) {
                $review = new Review();
                $review->user_id = $request->user_id;
                if ($request->phone ){
                    $review->phone = $request->phone;
                } else {
                    $review->phone = $user->phone;
                }
                $review->review= $request->review;
                $review->save();
                return $review;
            } else {
                return response()->json([
                    "message" => 'nguoi dung khong ton tai'
                ]);
            }
        }
       
    }
    public function update(Request $request, $id)
    {   
        try {
            $review = Review::findOrFail($id);
            $review->review = $request->review;
            $review->phone = $request->phone;
            $review->save();
            return $review;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => 'Mã này có thể đã bị xóa hoặc chưa được thiết lập'
            ]);
        }
        
    }
    
    function list(Request $request)
    {   $id = $request->user_id;
        return Review::where('user_id', $id)->get();
    }
    public function delete($id)
    {
        Review::destroy($id);
        return Review::all();
    }
}
