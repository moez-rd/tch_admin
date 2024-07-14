<?php

namespace App\Http\Middleware;

use App\Models\Festival;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'festivals' => Festival::get(['id', 'period'])
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'constants' => config('constants'),
            'festivals' => Festival::all(),
            'flash' => [
                'notification_info' => fn () => $request->session()->get('notification_info'),
                'notification_error' => fn () => $request->session()->get('notification_error'),
                'notification_success' => fn () => $request->session()->get('notification_success'),

                'message_info' => fn () => $request->session()->get('message_info'),
                'message_error' => fn () => $request->session()->get('message_error'),
                'message_success' => fn () => $request->session()->get('message_success'),
            ],
        ]);
    }
}
