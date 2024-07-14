<?php

namespace App\Http\Controllers;

use App\Models\EventRegistration;
use App\Models\EventRegistrationPayment;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $participant_count = User::where('role', config('constants.user_role.participant'))
            ->whereRelation('festivals', 'festival_id', $request->user()->selected_festival)
            ->count();

        $competition_registration_count = EventRegistration::whereRelation('event', 'festival_id', $request->user()->selected_festival)
            ->whereRelation('event', 'eventable_type', config('constants.event_type.competition'))
            ->count();

        $not_confirmed_payment_count = EventRegistrationPayment::whereRelation('eventRegistration.event', 'festival_id', $request->user()->selected_festival)
            ->where('status', config('constants.payment_status.not_confirmed'))
            ->count();

        $online_seminar_registration_count = EventRegistration::where('participation_method', 0)
            ->whereRelation('event', 'eventable_type', config('constants.event_type.seminar'))
            ->whereRelation('event', 'festival_id', $request->user()->selected_festival)
            ->count(); // online

        $offline_seminar_registration_count = EventRegistration::where('participation_method', 1)
            ->whereRelation('event', 'eventable_type', config('constants.event_type.seminar'))
            ->whereRelation('event', 'festival_id', $request->user()->selected_festival)
            ->count(); // offline

        return Inertia::render('Dashboard', [
            'participant_count' => $participant_count,
            'not_confirmed_payment_count' => $not_confirmed_payment_count,
            'online_seminar_registration_count' => $online_seminar_registration_count,
            'offline_seminar_registration_count' => $offline_seminar_registration_count,
            'competition_registration_count' => $competition_registration_count
        ]);
    }
}
