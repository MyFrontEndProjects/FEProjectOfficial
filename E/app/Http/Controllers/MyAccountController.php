<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Laravolt\Avatar\Avatar;
use Illuminate\Support\Facades\Storage;

class MyAccountController extends Controller
{
    public function showImage($filename)
    {
        $path = storage_path('app/avatars/' . $filename);
        return response()->file($path);
    }
    public function orders()
    {
        $myOrder = [];
        $myOrder["title"] = "My Orders - Online Store";
        $myOrder["subtitle"] = "My Orders";
        $myOrder["orders"] = Order::with(['items.product'])->where('user_id', Auth::user()->id)->get();
        return view('my-account.orders')->with("myOrder", $myOrder);
    }
    public function MyProfile()
    {
        $myProfile = [];
        $profile = Auth::user();
        $myProfile["title"] = "My profile - Online Store";
        $myProfile["subtitle"] = "My Orders";
        $myProfile['profile'] = $profile;
        $myProfile["orders"] = Order::with(['items.product'])->where('user_id', Auth::user()->id)->get();
        // $myProfile['avatarUrl'] = route('showAvatar', ['filename' => $profile->avatar]);
        return view('my-account.profile')->with("myProfile", $myProfile);
    }
    public function editAccount()
    {
        $data = [];
        $data['title'] = 'Edit user';
        $data['info'] = Auth::user();
        return view('my-account.edit')->with('data', $data);
    }
    public function updateAccount(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
            'avatar' => 'required|file',
            'balance' => 'required|numeric|gt:0'
        ]);

        $User = User::findOrFail($id);
        $User->name = $request->input('name');
        $User->password = $request->input('password');
        $User->balance = $request->input('balance');
        $User->email = $request->input('email');
        $User->phone = $request->input('email');
        $User->address = $request->input('email');
        $User->avatar = $request->file('avatar')->store('avatars');
        $User->save();
        return redirect()->route('userProfile', $id);
    }
}
