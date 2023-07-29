<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FestivalPeriodController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $user = $request->user()->fill([
            'selected_festival' => $request->input('festival_id'),
        ]);

        $user->save();

        $request->session()->put('current_festival_id', $request->input('festival_id'));

        return redirect()->back();
    }
}
