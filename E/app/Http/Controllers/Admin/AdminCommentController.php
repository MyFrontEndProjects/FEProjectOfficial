<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Product;
use App\Models\User;

class AdminCommentController extends Controller
{
    public function index()
    {
        $Data = [];
        $Data['title'] = 'Admin Comment';
        $Data['Comments'] = Comment::all();
        return view('Admin.Comment.index')->with('Data', $Data);
    }
    public function add(Request $request) {
        $product = Product::find($request->productId);
        $user = User::find($request->user_id);
        $comment = $request->comment;
        if ($comment ==null || $comment =='') {
            session()->flash('ID_not_found', 'Bình luận trống');
            return redirect()->route('admin.Comment.index');
        } else {
            if ($product && $user) {
                $cmt = new Comment();
                $cmt->user_id = $request->user_id;
                $cmt->product_id = $request->productId;
                $cmt->comment= $request->comment;
                $cmt->save();
                return back();
            } else {
                session()->flash('ID_not_found', 'Sản phẩm hoặc người dùng không tồn tại.');
            return redirect()->route('admin.Comment.index');
            }
        }
    }
    public function edit($id)
    {
        $data = [];
        $data['title'] = 'Edit Comment';
        $data['Comment'] = Comment::findOrFail($id);
        return view('Admin.Comment.edit')->with('data', $data);
    }
    public function update(Request $request, $id)
    {
        $cmt = Comment::findOrFail($id);
        $cmt->product_id = $request->productId;
        $cmt->comment = $request->comment;
        $cmt->save();
        return redirect()->route('admin.Comment.index');
    }
    // public function show($id)
    // {
    //     return Comment::find($id);
    // }
    function list()
    {
        return Comment::all();
    }
    public function delete($id)
    {
        Comment::destroy($id);
        return back();
    }
}
