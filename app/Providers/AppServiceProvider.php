<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Relation::enforceMorphMap([
            'festival' => 'App\Models\Festival',
            'event' => 'App\Models\Event',
            'competition' => 'App\Models\Competition',
            'seminar' => 'App\Models\Seminar',
            'user' => 'App\Models\User',
        ]);
    }
}
