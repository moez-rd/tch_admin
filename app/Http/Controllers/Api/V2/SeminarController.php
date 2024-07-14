<?php

namespace App\Http\Controllers\Api\V2;

use App\Enums\ErrorCode;
use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Festival;
use App\Models\Seminar;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SeminarController extends Controller
{
    public function findAll(Request $request)
    {
        $competitions = Event::with(['eventable.seminarCasts'])
            ->whereRelation('festival', 'is_active', true)
            ->whereMorphedTo('eventable', Seminar::class)
            ->get();

        return jsonResponse(Response::HTTP_OK, 'OK', $competitions);
    }

    public function findByCodename(Request $request, Event $event)
    {
        $festival = Festival::where('is_active', true)->first(['id']);

        if ($event->eventable_type !== config('constants.event_type.seminar')) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        if ($event->festival_id !== $festival->id) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        return jsonResponse(
            Response::HTTP_OK,
            'OK',
            $event->load('eventable.seminarCasts', 'milestones', 'contactPersons')
        );
    }
}
