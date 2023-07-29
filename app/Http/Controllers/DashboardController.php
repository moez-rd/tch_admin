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
        $participants_count = User::where('role', config('constants.user_role.participant'))
            ->whereRelation('festivals', 'festival_id', $request->user()->selected_festival)
            ->count();

        $registrations_count = EventRegistration::whereRelation('event', 'festival_id', $request->user()->selected_festival)
            ->count();

        $payments_count = EventRegistrationPayment::whereRelation('eventRegistration.event', 'festival_id', $request->user()->selected_festival)
            ->where('status', config('constants.payment_status.not_confirmed'))
            ->count();

        return Inertia::render('Dashboard', [
            'participants_count' => $participants_count,
            'registrations_count' => $registrations_count,
            'payments_count' => $payments_count,
        ]);
    }
}
