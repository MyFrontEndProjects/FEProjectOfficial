<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
class MyAccountController extends Controller
{
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
