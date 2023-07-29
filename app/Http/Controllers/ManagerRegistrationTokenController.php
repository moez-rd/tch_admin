<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ManagerRegistrationTokenController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Token/Index');
    }
}
