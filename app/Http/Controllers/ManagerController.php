<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ManagerController extends Controller
{
    public function index(Request $request): Response
    {

        $managers = User::
            where('role', config('constants.user_role.manager'))
            ->whereRelation('festivals', 'festival_id', $request->user()->selected_festival)
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

}
