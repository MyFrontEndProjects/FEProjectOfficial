<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use App\Models\User;

class ReviewsController extends Controller
{
    public function index()
    {
        $Data = [];
        $Data['title'] = 'Admin Review';
        $Data['Reviews'] = Review::all();
        return view('Admin.Review.index')->with('Data', $Data);
    }
    public function add(Request $request) {
        $user = User::find($request->user_id);
        $review = $request->review;
        if ($review ==null || $review =='') {
            return back();
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
    public function edit($id)
    {
        $data = [];
        $data['title'] = 'Edit Review';
        $data['Review'] = Review::findOrFail($id);
        return view('Admin.Review.edit')->with('data', $data);
    }
    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);
        $review->review = $request->review;
        $review->save();
        return redirect()->route('admin.Review.index');
    }
    // public function show($id)
    // {
    //     return Review::find($id);
    // }
    function list()
    {
        return Review::all();
    }
    public function delete($id)
    {
        Review::destroy($id);
        return back();
    }
}
