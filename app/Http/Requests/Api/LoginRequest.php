<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'avatar' => ['nullable'],
            'email' => ['required'],
            'access_token' => ['required'],
            'provider' => ['required', Rule::in(config('constants.provider'))],
            'provider_id' => ['required'],
        ];
    }

    public function verifyToken(): bool
    {
        return match ($this->input('provider')) {
            config('constants.provider.credentials') => $this->verifyCredentialsAccessToken(),
            config('constants.provider.google') => $this->verifyGoogleAccessToken(),
            config('constants.provider.github') => $this->verifyGithubAccessToken(),
            default => false,
        };
    }

    private function verifyCredentialsAccessToken(): bool
    {
        Log::channel('api')->info("QWERTY");
        $accessToken = hash('sha256', explode('|', $this->input('access_token'))[1]);

        return DB::table('personal_access_tokens')
            ->where('name', 'participant_auth')
            ->where('token', $accessToken)
            ->delete();
    }

    private function verifyGoogleAccessToken(): bool
    {
        $response = Http::get('https://www.googleapis.com/oauth2/v3/tokeninfo', [
            'access_token' => $this->input('access_token'),
        ]);

        $userData = $response->json();

        return $response->status() === Response::HTTP_OK && isset($userData['sub']);
    }

    private function verifyGithubAccessToken(): bool
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer '.$this->input('access_token'),
        ])->get('https://api.github.com/user');

        $userData = $response->json();

        return $response->status() === Response::HTTP_OK && isset($userData['id']);
    }
}
