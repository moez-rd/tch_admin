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

Route::get('/', fn () => redirect()->route('dashboard'));

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('/festival')->group(function () {
        Route::resource('/festivals', \App\Http\Controllers\FestivalController::class);
        Route::resource('/events', \App\Http\Controllers\EventController::class)->missing(fn () => redirect()->route('events.index'));
        Route::resource('/registrations', \App\Http\Controllers\EventRegistrationController::class)->missing(fn () => redirect()->route('registrations.index'));
        Route::resource('/participants', \App\Http\Controllers\ParticipantController::class)->missing(fn () => redirect()->route('participants.index'));
        Route::resource('/managers', \App\Http\Controllers\ManagerController::class)->missing(fn () => redirect()->route('participants.index'));
        Route::resource('/payments', \App\Http\Controllers\EventRegistrationPaymentController::class)->missing(fn () => redirect()->route('payments.index'));
        Route::resource('/submissions', \App\Http\Controllers\EventRegistrationSubmissionController::class)->missing(fn () => redirect()->route('submission.index'));
        Route::resource('/faqs', \App\Http\Controllers\FaqController::class)->missing(fn () => redirect()->route('faqs.index'));

        Route::resource('/seminar-casts', \App\Http\Controllers\SeminarCastController::class)->only('destroy');
        Route::resource('/milestones', \App\Http\Controllers\MilestoneController::class)->only('destroy');
        Route::resource('/contact-persons', \App\Http\Controllers\ContactPersonController::class)->only('destroy');

        Route::post('/festivals/{festival:id}/milestones', [\App\Http\Controllers\FestivalController::class, 'addMilestone'])->name('festivals.milestones.store');
        Route::post('/festivals/{festival:id}/contact-persons', [\App\Http\Controllers\FestivalController::class, 'addContactPerson'])->name('festivals.contact-persons.store');

        Route::post('/events/{event:id}/milestones', [\App\Http\Controllers\EventController::class, 'addMilestone'])->name('events.milestones.store');
        Route::post('/events/{event:id}/contact-persons', [\App\Http\Controllers\EventController::class, 'addContactPerson'])->name('events.contact-persons.store');
        Route::post('/events/{event:id}/seminar-casts', [\App\Http\Controllers\EventController::class, 'addSeminarCast'])->name('events.seminar-casts.store');

        Route::patch('/registrations/{registration:id}/accept', [\App\Http\Controllers\EventRegistrationController::class, 'acceptPayment'])->name('registrations.update.accept');
        Route::patch('/registrations/{registration:id}/reject', [\App\Http\Controllers\EventRegistrationController::class, 'rejectPayment'])->name('registrations.update.reject');
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

    Route::patch('/festivals/{festival:id}/activate', [\App\Http\Controllers\FestivalController::class, 'activate'])->name('festivals.update.activate');

    Route::patch('/managers/festivals/{festival:id}/select', [\App\Http\Controllers\ManagerController::class, 'selectFestivalPeriod'])->name('managers.festival.select');
});

require __DIR__ . '/auth.php';
