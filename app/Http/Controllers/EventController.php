<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateEventRequest;
use App\Models\Competition;
use App\Models\Event;
use App\Models\Seminar;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $events = Event::with(['eventable'])
            ->where('festival_id', $request->user()->selected_festival)
            ->orderByDesc('updated_at')
            ->get();

        return Inertia::render('Festival/Event/Index', [
            'events' => $events,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Festival/Event/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $eventable = $request->input('eventable_type') === config('constants.event_type.competition') ? (
            Competition::create([
                'max_participants' => $request->input('max_participants'),
            ])) : (
                Seminar::create([
                    'theme' => $request->input('theme'),
                ]));

        $event = Event::create([
            'name' => $request->input('name'),
            'codename' => $request->input('codename'),
            'description' => $request->input('description'),
            'image' => $request->input('image'),
            'is_opened' => $request->input('is_opened'),
            'price' => $request->input('price'),
            'held_in' => $request->input('held_in'),
            'held_on' => new Carbon($request->input('held_on')),
            'group_link' => $request->input('group_link'),
            'eventable_type' => $request->input('eventable_type'),
            'eventable_id' => $eventable->id,
            'festival_id' => $request->user()->selected_festival,
        ]);

        return redirect()
            ->route('events.index')
            ->with('success', "Event {$event->name} berhasil dibuat");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $event = Event::with(['eventable'])
            ->withCount('eventRegistrations')
            ->find($id);

        if (! $event) {
            return to_route('events.index');
        }

        if ($event->eventable_type === config('constants.event_type.seminar')) {
            $event->load('eventable.seminarCasts');
        }

        return Inertia::render('Festival/Event/Show', [
            'event' => $event,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Event::find($id);
        $event->delete();

        return redirect()
            ->route('events.index')
            ->with('info', "Event {$event->name} berhasil dihapus");
    }

    public function openAllRegistrations()
    {
        Event::query()->update(['is_opened' => true]);

        return redirect()
            ->route('events.index')
            ->with('success', 'Berhasil membuka seluruh pendaftaran');
    }

    public function closeAllRegistrations()
    {
        Event::query()->update(['is_opened' => false]);

        return redirect()
            ->route('events.index')
            ->with('success', 'Berhasil menutup seluruh pendaftaran');
    }
}
