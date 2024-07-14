<?php

namespace App\Http\Controllers;

use App\Models\Festival;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ManagerController extends Controller
{
    public function index(Request $request): Response
    {

        $managers = User::where('role', config('constants.user_role.manager'))
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('Manager/Manager/Index', [
            'managers' => $managers,
        ]);
    }

    public function show(string $id)
    {
        $manager = User::find($id);

        if (!$manager) {
            return to_route('managers.index');
        }

        return Inertia::render('Manager/Manager/Show', ['manager' => $manager]);
    }

    public function selectFestivalPeriod(Request $request, Festival $festival): RedirectResponse
    {
        $user = $request->user()->fill([
            'selected_festival' => $festival->id,
        ]);

        $user->save();


        $request->session()->put('current_festival_id', $festival->id);

        return redirect()->route("dashboard");
    }
}
