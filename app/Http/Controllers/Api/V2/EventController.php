<?php

namespace App\Http\Controllers\Api\V2;

use App\Enums\ErrorCode;
use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Festival;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EventController extends Controller
{
    public function findAll(Request $request)
    {
        $events = Event::whereRelation('festival', 'is_active', true)
            ->where("is_opened", true)
            ->get();

        return jsonResponse(Response::HTTP_OK, 'OK', $events);
    }

    public function findByCodename(Request $request, Event $event)
    {
        $festival = Festival::where('is_active', true)->first(['id']);

        if ($event->festival_id !== $festival->id) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        return jsonResponse(Response::HTTP_OK, 'OK', $event);
    }

    public function getEventableType(Request $request, Event $event)
    {
        return jsonResponse(Response::HTTP_OK, 'OK', $event->eventable_type);
    }
}
