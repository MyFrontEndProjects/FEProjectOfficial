<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        $newUser = new User();
        $newUser->name = $request->input('name');
        $newUser->password = Hash::make($request->input('password'));
        $newUser->email = $request->input('email');
        $newUser->balance = 50000000000;
        $newUser->save();
        return $newUser;
    }
    // function login(Request $request)
    // {
    //     $user = User::where('email', $request->email)->first();
    //     if (!$user || !Hash::check($request->password, $user->password)) {
    //         return ["error" => "Email or password is not matched."];
    //     }
    //     return $user;
    // }
    function login(Request $request)
    {
        // Kiểm tra tính hợp lệ của dữ liệu đầu vào
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Tìm người dùng theo email
        $user = User::where('email', $request->email)->first();

        // Nếu không tìm thấy người dùng hoặc mật khẩu không khớp
        if (!$user || !Hash::check($request->password, $user->password)) {
            // Trả về mã lỗi 401 và thông báo lỗi
            return response()->json([
                'error' => 'Email or password is not matched.'
            ], 401);
        }

        // Nếu tìm thấy người dùng và mật khẩu khớp
        else {
            // Tạo token truy cập cho người dùng
            $token = $user->createToken('LaravelAuthApp')->accessToken;

            // Trả về mã thành công 200 và token truy cập
            return response()->json([
                'token' => $token
            ], 200);
        }
    }
    
}
