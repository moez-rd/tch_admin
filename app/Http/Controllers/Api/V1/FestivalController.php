<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Festival;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FestivalController extends Controller
{
    public function findCurrent(Request $request)
    {
        $query = Festival::query();

        $query->where('is_active', true);

        $query->with(['milestones', 'contactPersons']);

        $festival = $query->first();

        return jsonResponse(Response::HTTP_OK, 'OK', $festival);
    }
}
