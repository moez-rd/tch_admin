<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\AvatarController;
use App\Http\Controllers\Api\V1\CompetitionController;
use App\Http\Controllers\Api\V1\EventController;
use App\Http\Controllers\Api\V1\FaqController;
use App\Http\Controllers\Api\V1\FestivalController;
use App\Http\Controllers\Api\V1\SeminarController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/v1')->group(function () {
    Route::controller(AuthController::class)->group(function () {
        Route::post('/auth/credentials/attempt', 'attempt');
        Route::post('/auth/credentials/register', 'register');
        Route::post('/auth/login', 'login');
    });

    Route::controller(FestivalController::class)->group(function () {
        Route::get('/festivals/current', 'findCurrent');
    });

    Route::controller(EventController::class)->group(function () {
        Route::get('/events', 'findAll');
        Route::get('/events/{event:codename}', 'findByCodename');
        Route::get('/events/{event:codename}/type', 'getEventableType');
    });

    Route::controller(CompetitionController::class)->group(function () {
        Route::get('/competitions', 'findAll');
        Route::get('/competitions/{event:codename}', 'findByCodename');
    });

    Route::controller(SeminarController::class)->group(function () {
        Route::get('/seminars', 'findAll');
        Route::get('/seminars/{event:codename}', 'findByCodename');
    });

    Route::controller(FaqController::class)->group(function () {
        Route::get('/faqs', 'findAll');
    });

    Route::controller(AvatarController::class)->group(function () {
        Route::get('/avatars', 'findAll');
    });

    Route::controller(UserController::class)->group(function () {
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/user', 'getCurrent');
            Route::put('/user', 'updateCurrent');
            Route::put('/user/password', 'updatePassword');

            Route::post('/user/auth/logout', 'logout');

            Route::get('/user/events', 'getAllEvents');
            Route::get('/user/events/{event:codename}/registration', 'getRegistrationByEventCodename');
            Route::post('/user/events/{event:codename}/registration', 'createRegistrationByEventCodename');

            Route::get('/user/registrations', 'getAllRegistrations');
            Route::put('/user/registrations/{eventRegistration:uid}', 'updateRegistration');
            Route::delete('/user/registrations/{eventRegistration:uid}', 'deleteRegistration');

            Route::post('/user/registrations/{eventRegistration:uid}/attach', 'attachCurrentToRegistrationByUid');
            Route::delete('/user/registrations/{eventRegistration:uid}/detach', 'detachCurrentFromRegistrationByUid');

            Route::post('/user/registrations/{eventRegistration:uid}/users/{user:uid}/attach', 'attachOtherUserToRegistrationByUid')->withoutScopedBindings();
            Route::delete('/user/registrations/{eventRegistration:uid}/users/{user:uid}/detach', 'detachOtherUserFromRegistrationByUid')->withoutScopedBindings();

            Route::get('/user/payments/{eventRegistrationPayment:id}', 'getPaymentById');
            Route::put('/user/payments/{eventRegistrationPayment:id}', 'updatePaymentById');
        });
    });

});
