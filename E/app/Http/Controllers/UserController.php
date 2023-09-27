<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\BaseResponse;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // $data = ['name'=>$request->name, 'email' =>$request->email, 'password' => $request->password];

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);
        $newUser = new User();
        $newUser->name = $request->input('name');
        $newUser->password = Hash::make($request->input('password'));
        $newUser->email = $request->input('email');
        $newUser->balance = 50000000;
        $newUser->role = 'client';
        $newUser->phone = 1314791837;
        $newUser->address = '123 Main';
        $newUser->avatar = 'avatars/user.png';
        $token = hash('sha1', time(). Str::random(50));
        $newUser->forceFill(['api_token' => $token])->save();
        $newUser->save();
        // $data = ['id' => $newUser->id, 'name' => $newUser->name,'email'=>$newUser->email, 'token'=>$token];
        
        // return BaseResponse::withData($data);
        return $newUser;

    }
    // function login(Request $request)
    // {
    //     $newUser = User::where('email', $request->email)->first();
    //     if (!$user || !Hash::check($request->password, $user->password)) {
    //         return ["error" => "Email or password is not matched."];
    //     }
    //     return $user;
    // }
    // function login(Request $request)
    // {
    //     // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required'
    //     ]);

    //     // Tìm người dùng theo email
    //     $user = User::where('email', $request->email)->first();

    //     // Nếu không tìm thấy người dùng hoặc mật khẩu không khớp
    //     if (!$user || !Hash::check($request->password, $user->password)) {
    //         // Trả về mã lỗi 401 và thông báo lỗi
    //         return response()->json([
    //             'error' => 'Email or password is not matched.'
    //         ]);
    //     }

    //     // Nếu tìm thấy người dùng và mật khẩu khớp
    //     else {
    //         return $user;
    //     }
    // }

    public function login (Request $request){
        $data = ['email' =>$request->email, 'password' => $request->password];
        if (auth()->attempt($data)){
            $user = auth()->user();
            $token = hash('sha1', time(). Str::random(50));
            $user->forceFill(['api_token' => $token])->save();
            $data = ['id' => $user->id, 'name' => $user->name,'email'=>$user->email, 'token'=>$token, 'avatar' => $user->avatar, 'role' => $user->role, 'balance' => $user->balance];
            return BaseResponse::withData($data);
        } else {
            return BaseResponse::error(1, 'wrong name or password');
        }

    }
}
