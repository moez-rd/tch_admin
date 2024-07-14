<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFestivalRequest;
use App\Http\Requests\UpdateFestivalRequest;
use App\Models\Event;
use App\Models\Festival;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FestivalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $festivals = Festival::all();

        return Inertia::render('Festival/Festival/Index', [
            'festivals' => $festivals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Festival/Festival/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $period = new Carbon($request->input('period'));
        $period = $period->addDays(1)->year;

        if (Festival::where('period', $period)->exists()) {
            return to_route('festivals.create')->with('message_error', "Festival dengan periode {$period} sudah tersedia");
        }


        $festival = Festival::create([
            'period' => $period,
            'name' => $request->input('name'),
            'theme' => $request->input('theme'),
            'logo' => $request->input('logo'),
            'description' => $request->input('description'),
            'start_date' => new Carbon($request->input('start_date')),
            'end_date' => new Carbon($request->input('end_date')),
            'is_active' => 0,
        ]);

        return redirect()
            ->route('festivals.index')
            ->with('notification_success', "Festival {$festival->name} berhasil dibuat");
    }

    /**
     * Display the specified resource.
     */
    public function show(Festival $festival)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Festival $festival)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Festival $festival)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        $festival = Festival::find($id);
        $festival->delete();

        return redirect()
            ->route('festivals.index')
            ->with('notification_info', "Festival {$festival->name} berhasil dihapus");
    }

    public function activate(Festival $festival)
    {
        Festival::query()->update(["is_active" => 0]);

        Festival::where('id', $festival->id)->update(["is_active" => 1]);

        return redirect()
            ->route('festivals.index')
            ->with('notification_info', "Festival {$festival->name} berhasil diaktivasi");
    }

    public function addMilestone(Event $event)
    {
    }
}
