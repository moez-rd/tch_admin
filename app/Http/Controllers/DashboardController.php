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
//        $participants_count = User::where('role', config('constants.user_role.participant'))
//            ->whereRelation('festivals', 'festival_id', $request->user()->selected_festival)
//            ->count();
//
//        $registrations_count = EventRegistration::whereRelation('event', 'festival_id', $request->user()->selected_festival)
//            ->count();
//
//        $payments_count = EventRegistrationPayment::whereRelation('eventRegistration.event', 'festival_id', $request->user()->selected_festival)
//            ->where('status', config('constants.payment_status.not_confirmed'))
//            ->count();

        $seminar_registration_online_count = EventRegistration::where('participation_method', 0)->count(); // online
        $seminar_registration_offline_count = EventRegistration::where('participation_method', 1)->count(); // offline

        return Inertia::render('Dashboard', [
            'seminar_registration_online_count' => $seminar_registration_online_count,
            'seminar_registration_offline_count' => $seminar_registration_offline_count
        ]);
    }
}
