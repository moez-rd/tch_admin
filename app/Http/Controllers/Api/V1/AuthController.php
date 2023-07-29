<?php

namespace App\Http\Controllers\Api\V1;

use App\Enums\ErrorCode;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Models\Avatar;
use App\Models\Festival;
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
            \Log::channel('api')->error(sprintf("ATTEMPT email: %s, with token: %s [Invalid credentials]", $request->input('email'), $request->input('password'), $withToken));
            return jsonResponse(Response::HTTP_UNAUTHORIZED, 'Invalid credentials', errorCode: ErrorCode::INVALID_CREDENTIALS);
        }

        $user = Auth::user();

        if (filter_var($withToken, FILTER_VALIDATE_BOOLEAN)) {
            $token = $user->createToken('participant_auth')->plainTextToken;

            $user['access_token'] = $token;
        }

        \Log::channel('api')->info(sprintf("ATTEMPT email: %s, with token: %s", $request->input('email'), $withToken));

        return jsonResponse(Response::HTTP_OK, 'OK', $user);
    }

    public function register(Request $request)
    {
        $withToken = $request->query('token');

        if (User::where('email', $request->input('email'))->exists()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Email already exists', errorCode: ErrorCode::EMAIL_ALREADY_EXISTS);
        }

        $festival = Festival::where('is_active', true)->first();

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role' => config('constants.user_role.participant'),
            'avatar' => Avatar::inRandomOrder()->first()->image,
        ]);

        $festival->users()->attach($user->id);

        $user->providers()->create([
            'provider_id' => $user->id,
            'provider' => config('constants.provider.credentials'),
        ]);

        if (filter_var($withToken, FILTER_VALIDATE_BOOLEAN)) {
            $token = $user->createToken('participant_auth')->plainTextToken;

            $user['access_token'] = $token;
        }

        return jsonResponse(Response::HTTP_CREATED, 'Created', $user);
    }

    public function login(LoginRequest $request)
    {
        Log::channel('api')->info('SSD');

        if (!$request->verifyToken()) {
            return jsonResponse(Response::HTTP_UNAUTHORIZED, 'Invalid access token', errorCode: ErrorCode::INVALID_ACCESS_TOKEN);
        }

        $festival = Festival::where('is_active', true)->first();

        $user = User::firstOrCreate(
            [
                'email' => $request->input('email'),
            ],
            [
                'name' => $request->input('name'),
                'avatar' => $request->input('avatar'),
                'role' => config('constants.user_role.participant'),
            ]);

        $user->providers()->updateOrCreate([
            'provider_id' => $request->input('provider_id'),
            'provider' => $request->input('provider'),
        ]);

        $festival->users()->attach($user->id);

        $token = $user->createToken('participant_auth')->plainTextToken;

        $user['access_token'] = $token;

        return jsonResponse(Response::HTTP_OK, 'OK', $user);
    }
}
