<?php

namespace App\Http\Controllers\Api\V2;

use App\Enums\ErrorCode;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Models\Avatar;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function attempt(Request $request)
    {
        $withToken = $request->query('token');

        if (!Auth::attempt($request->only(['email', 'password']))) {
            Log::channel('api')->error(sprintf("ATTEMPT email: %s, with token: %s [Invalid credentials]", $request->input('email'), $request->input('password'), $withToken));
            return jsonResponse(Response::HTTP_UNAUTHORIZED, 'Invalid credentials', errorCode: ErrorCode::INVALID_CREDENTIALS);
        }

        $user = Auth::user();
        $token = "";

        if (filter_var($withToken, FILTER_VALIDATE_BOOLEAN)) {
            $token = $user->createToken('participant_auth')->plainTextToken;

            $user['access_token'] = $token;
        }

        Log::channel('api')->info(sprintf("ATTEMPT email: %s, with token: %s", $request->input('email'), $withToken));

        return jsonResponse(Response::HTTP_OK, 'OK', ['access_token' => $token, 'user' => $user]);
    }

    public function register(Request $request)
    {
        $withToken = $request->query('token');

        if (User::where('email', $request->input('email'))->exists()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Email already exists', errorCode: ErrorCode::EMAIL_ALREADY_EXISTS);
        }

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role' => config('constants.user_role.participant'),
            'provider' => config('constants.provider.credentials'),
            'avatar' => Avatar::inRandomOrder()->first()->image,
        ]);

        if (filter_var($withToken, FILTER_VALIDATE_BOOLEAN)) {
            $token = $user->createToken('participant_auth')->plainTextToken;

            $user['access_token'] = $token;
        }

        return jsonResponse(Response::HTTP_CREATED, 'Created', $user);
    }

    public function login(LoginRequest $request)
    {
        if (!$request->verifyToken()) {
            return jsonResponse(Response::HTTP_UNAUTHORIZED, 'Invalid access token', errorCode: ErrorCode::INVALID_ACCESS_TOKEN);
        }

        $user = User::firstOrCreate([
            'email' => $request->input('email'),
        ], [
            'name' => $request->input('name'),
            'avatar' => $request->input('avatar'),
            'role' => config('constants.user_role.participant'),
            'provider' => $request->input('provider'),
        ]);

        if ($user->provider != $request->input('provider')) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Email already used by other provider', errorCode: ErrorCode::ACCOUNT_NOT_LINKED);
        }

        $token = $user->createToken('participant_auth')->plainTextToken;

        return jsonResponse(Response::HTTP_OK, 'OK', [
            'access_token' => $token,
        ]);
    }
}
