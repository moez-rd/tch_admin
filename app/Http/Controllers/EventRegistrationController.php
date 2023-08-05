<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRegistrationRequest;
use App\Http\Requests\UpdateEventRegistrationRequest;
use App\Models\EventRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class EventRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $registrations = EventRegistration::with(['event:id,name,eventable_type', 'users', 'eventRegistrationPayment'])
            ->whereRelation('event', 'festival_id', $request->user()->selected_festival)
            ->get();

        return Inertia::render('Festival/Registration/Index', [
            'registrations' => $registrations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRegistrationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $registration = EventRegistration::with(['users', 'eventRegistrationPayment', 'event'])->find($id);

        if (!$registration) {
            return to_route('registrations.index');
        }

        return Inertia::render('Festival/Registration/Show', [
            'registration' => $registration,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EventRegistration $eventRegistration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRegistrationRequest $request, EventRegistration $eventRegistration)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $eventRegistration = EventRegistration::find($id);
        $eventRegistration->delete();

        return redirect()
            ->route('registrations.index')
            ->with('notification_info', 'Pendaftaran #' . $eventRegistration->uid . ' berhasil dihapus');
    }

    public function acceptPayment(Request $request, string $id)
    {
        $eventRegistration = EventRegistration::find($id);
        $eventRegistration->eventRegistrationPayment()->update([
            'status' => config('constants.payment_status.accepted')
        ]);

        return redirect()
        ->back()
        ->with('notification_info', 'Pendaftaran #' . $eventRegistration->uid . ' berhasil diterima');
    }

    public function rejectPayment(string $id)
    {
        $eventRegistration = EventRegistration::find($id);
        $eventRegistration->eventRegistrationPayment()->update([
            'status' => config('constants.payment_status.rejected')
        ]);

        return redirect()
        ->back()
        ->with('notification_info', 'Pendaftaran #' . $eventRegistration->uid . ' berhasil ditolak');    }
}
