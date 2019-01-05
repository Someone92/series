<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {

    public function login(Request $request) {
        if(Auth::attempt(['email' => request('username'), 'password' => request('password')])) { 
            $user = Auth::user();
            $success['name'] = $user->name;
            $success['email'] = $user->email;
            $success['token'] = $user->createToken('Wiking')-> accessToken;
            return response()->json($success, 200);
        } else { 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
    
}
