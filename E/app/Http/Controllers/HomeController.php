<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
   

  
    public function home()
    {
        $homeData =[] ;
        $homeData['title'] = 'Official LexuZ Website';
        return view('welcome')->with('homeData', $homeData);
    }
    public function income()
    {
        $homeData =[] ;
        $homeData['title'] = 'Login';
        return view('auth.login')->with('homeData', $homeData);
    }

    public function about(){
        return view('home.about');
    }
    
    public function service(){
        return view('home.service');
    }
    public function team(){
        $users =[];
        $users['account'] = Auth::user();
        return view('home.team')->with('users',$users);
    }
    public function testimonial(){
        return view('home.testimonial');
    }
}
