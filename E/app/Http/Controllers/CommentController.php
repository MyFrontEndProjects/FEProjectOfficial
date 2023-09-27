<?php

namespace App\Http\Controllers;
use App\Models\Comment;
use App\Models\Product;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function add(Request $request) {
        $product = Product::find($request->productId);
        $user = User::find($request->user_id);
        $comment = $request->comment;
        if ($comment ==null || $comment =='') {
            return response()->json([
                "message" => 'Comment not found',
            ]);
        } else {
            if ($product && $user) {
                $cmt = new Comment();
                $cmt->user_id = $request->user_id;
                $cmt->product_id = $request->productId;
                $cmt->comment= $request->comment;
                $cmt->save();
                return $cmt;
            } else {
                return response()->json([
                    "message" => 'San Pham hoac nguoi dung khong ton tai'
                ]);
            }
        }
       
    }
    public function update(Request $request, $id)
    {
        $cmt = Comment::findOrFail($id);
        $cmt->comment = $request->comment;
        $cmt->save();
        return $cmt;
    }
    public function show($id)
    {
        return Comment::find($id);
    }
    function list(Request $request)
    {   $id = $request->user_id;
        return Comment::where('user_id', $id)->get();
    }
    public function delete($id)
    {
        Comment::destroy($id);
        return Comment::all();
    }
}
