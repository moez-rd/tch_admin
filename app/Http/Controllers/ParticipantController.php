<?php

namespace App\Http\Controllers;

use App\Models\Festival;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ParticipantController extends Controller
{
    public function index(Request $request): Response
    {
        $participants = User::with(['userProfile'])
            ->where('role', config('constants.user_role.participant'))
            // ->whereRelation('festivals', 'id', $request->user()->selected_festival)
            ->withCount('eventRegistrations')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('Festival/Participant/Index', ['participants' => $participants]);
    }

    public function show(string $id)
    {
        $participant = User::with(['userProfile', 'eventRegistrations', 'eventRegistrations.event'])
            ->withCount('eventRegistrations')
            ->find($id);

        if (!$participant) {
            return to_route('participants.index');
        }

        return Inertia::render('Festival/Participant/Show', ['participant' => $participant]);
    }

    public function destroy(string $id): RedirectResponse
    {
        $participant = User::find($id);

        $participant->eventRegistrations()->each(function ($registration) {
            if ($registration->event_registrant->role !== config('constants.event_registrant_role.member')) {
                $registration->delete();
            }
        });

        $participant->delete();

        return redirect()
            ->route('participants.index')
            ->with('notification_info', "Partisipan {$participant->name} berhasil dihapus");
    }
}
