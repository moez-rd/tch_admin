<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', fn() => redirect()->route('dashboard'));

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('/festival')->group(function () {
        Route::resource('/festivals', \App\Http\Controllers\FestivalController::class);
        Route::resource('/events', \App\Http\Controllers\EventController::class)->missing(fn() => redirect()->route('events.index'));
        Route::resource('/registrations', \App\Http\Controllers\EventRegistrationController::class)->missing(fn() => redirect()->route('registrations.index'));
        Route::resource('/participants', \App\Http\Controllers\ParticipantController::class)->missing(fn() => redirect()->route('participants.index'));
        Route::resource('/payments', \App\Http\Controllers\EventRegistrationPaymentController::class)->missing(fn() => redirect()->route('payments.index'));
        Route::resource('/faqs', \App\Http\Controllers\FaqController::class)->missing(fn() => redirect()->route('faqs.index'));

    });

    Route::prefix('/options')->group(function () {
        Route::patch('/events/open', [\App\Http\Controllers\EventController::class, 'openAllRegistrations'])->name('options.events.open');
        Route::patch('/events/close', [\App\Http\Controllers\EventController::class, 'closeAllRegistrations'])->name('options.events.close');
    });

    Route::prefix('/manager')->group(function () {
        Route::resource('/managers', \App\Http\Controllers\ManagerController::class);
        Route::resource('/token', \App\Http\Controllers\ManagerRegistrationTokenController::class)->only(['index', 'store']);
    });

    Route::prefix('/setting')->group(function () {
        Route::resource('/account', \App\Http\Controllers\AccountController::class);
    });

    Route::patch('/festival-period', [\App\Http\Controllers\FestivalPeriodController::class, 'update'])->name('festival_period.update');
});

require __DIR__ . '/auth.php';
