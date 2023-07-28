<?php

namespace App\Http\Controllers\Api\V1;

use App\Enums\ErrorCode;
use App\Http\Controllers\Controller;
use App\Models\Competition;
use App\Models\Event;
use App\Models\Festival;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CompetitionController extends Controller
{
    public function findAll(Request $request)
    {
        $competitions = Event::with(['eventable:id,max_participants'])
            ->whereRelation('festival', 'is_active', true)
            ->whereMorphedTo('eventable', Competition::class)
            ->get();

        return jsonResponse(Response::HTTP_OK, 'OK', $competitions);
    }

    public function findByCodename(Request $request, Event $event)
    {
        $festival = Festival::where('is_active', true)->first(['id']);

        if ($event->eventable_type !== config('constants.event_type.competition')) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        if ($event->festival_id !== $festival->id) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        return jsonResponse(
            Response::HTTP_OK,
            'OK',
            $event->load('eventable', 'milestones', 'contactPersons')
        );
    }
}
