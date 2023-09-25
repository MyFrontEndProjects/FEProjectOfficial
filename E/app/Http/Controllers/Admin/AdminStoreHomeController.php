<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminStoreHomeController extends Controller
{
    public function index(){
        $viewAdminLayout = [];
        $viewAdminLayout['title'] = 'Admin pages';
        return view('Admin.home.index')->with('viewAdminLayout', $viewAdminLayout);
    }
}
