<?php

namespace App\Http\Controllers;

use App\Models\EventRegistration;
use App\Models\Milestone;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class EventRegistrationSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $registrations = EventRegistration::whereRelation('eventRegistration.event', 'festival_id', $request->user()->selected_festival)
            ->get();

        return Inertia::render('Festival/Payment/Index', [
            'registrations' => $registrations,
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }
}
