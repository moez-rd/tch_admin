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

        $managers = User::with(['avatar:id,image'])
            ->where('role', config('constants.user_role.manager'))
            ->whereRelation('festivals', 'festival_id', $request->user()->selected_festival)
            ->get();

        return Inertia::render('User/Manager/Index', [
            'managers' => $managers,
        ]);
    }
}
