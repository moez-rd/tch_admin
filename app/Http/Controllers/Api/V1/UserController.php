<?php

namespace App\Http\Controllers\Api\V1;

use App\Enums\ErrorCode;
use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\EventRegistration;
use App\Models\EventRegistrationPayment;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    /**
     * Get current authenticated user with given access token.
     * This API can pass relationship tables with 'rel' array query.
     */
    public function getCurrent(Request $request): JsonResponse
    {
        $user = $request->user()->load($request->query('rel', []));

        return jsonResponse(Response::HTTP_OK, 'OK', $user);
    }

    /**
     * Update current authenticated user and user profile with given access token.
     */
    public function updateCurrent(Request $request): JsonResponse
    {
        Log::channel('api')->info("HOW");
        Log::channel('api')->info($request);

        $request->user()->update([
            'name' => $request->input('name'),
//            'avatar' => $request->input('avatar'),
        ]);

        UserProfile::updateOrCreate(
            [
                'user_id' => $request->user()->id,
            ],
            [
                'id_number' => $request->input('user_profile.id_number'),
                'id_card_image' => $request->input('user_profile.id_card_image'),
                'institution' => $request->input('user_profile.institution'),
                'education_level' => $request->input('user_profile.education_level'),
                'gender' => $request->input('user_profile.gender'),
                'whatsapp' => $request->input('user_profile.whatsapp'),
                'instagram' => $request->input('user_profile.instagram'),
            ]);

        Log::channel('api')->info("RES");
        Log::channel('api')->info($request->user()->load('userProfile'));

        return jsonResponse(Response::HTTP_OK, 'OK', $request->user()->load('userProfile'));
    }

    public function updatePassword(Request $request): JsonResponse
    {
        if (!Hash::check($request->input('old_password'), $request->user()->password)) {
            return jsonResponse(Response::HTTP_UNAUTHORIZED, 'Wrong password', errorCode: ErrorCode::WRONG_PASSWORD);
        }

        $request->user()->update([
            'password' => Hash::make($request->input('new_password')),
        ]);

        return jsonResponse(Response::HTTP_RESET_CONTENT, 'OK');
    }

    /**
     * Remove user access token with given access token.
     */
    public function logout(Request $request): JsonResponse
    {
        Auth::user()->tokens()->delete();

        return jsonResponse(Response::HTTP_RESET_CONTENT, 'OK');
    }

    public function getAllRegistrations(Request $request): JsonResponse
    {
        $query = EventRegistration::query();

        $query->whereRelation('users', 'id', $request->user()->id);

        $query->with(['eventRegistrationPayment', 'event', 'users']);

        $eventRegistrations = $query->get();

        return jsonResponse(Response::HTTP_OK, 'OK', $eventRegistrations);
    }

    public function updateRegistration(Request $request, EventRegistration $eventRegistration): JsonResponse
    {
        Log::channel('api')->info($request->input());

        $eventRegistration = tap($eventRegistration)->update($request->input());

        return jsonResponse(Response::HTTP_OK, 'OK', $eventRegistration);
    }

    public function deleteRegistration(Request $request, EventRegistration $eventRegistration): JsonResponse
    {
        $eventRegistration->delete();

        return jsonResponse(Response::HTTP_RESET_CONTENT, 'Deleted');
    }

    public function getAllEvents(Request $request): JsonResponse
    {
        $query = Event::query();

        $query->with(['eventable']);

        $query->whereRelation('festival', 'is_active', true);

        $query->with(['eventRegistrations' => function (Builder $query) use ($request) {
            $query->whereRelation('users', 'id', $request->user()->id);
        }]);

        $events = $query->get();

        return jsonResponse(Response::HTTP_OK, 'OK', $events);
    }

    /**
     * Get registration where has current authenticated user and given event codename.
     * This API will return one registration object.
     */
    public function getRegistrationByEventCodename(Request $request, Event $event): JsonResponse
    {
        $query = EventRegistration::query();

        $query->where('event_id', $event->id);

        $query->with(['event.eventable', 'users', 'eventRegistrationPayment',]);

        $query->whereRelation('users', 'id', $request->user()->id);

        $eventRegistration = $query->first();

        if (!$eventRegistration) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        return jsonResponse(Response::HTTP_OK, 'OK', $eventRegistration);
    }

    /**
     * Create empty registration with given event codename.
     * This function will attach current authenticated user as leader
     * if event type is team and as individual if event type is individual.
     * Also, this function will create new event registration payment.
     */
    public function createRegistrationByEventCodename(Request $request, Event $event): JsonResponse
    {
        // Check if user already register this event
        if ($event->eventRegistrations()->whereRelation('users', 'id', $request->user()->id)->exists()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Already registered', errorCode: ErrorCode::ALREADY_REGISTERED);
        }

        $eventRegistration = $event->eventRegistrations()->create($request->input());

        Log::channel('api')->info($event->eventable_type);
        Log::channel('api')->info($event->eventable['max_participants']);

        // Check whether the event is individual or team type.
        // 0 => individual, 1 => leader
        $role = ($event->eventable_type === config('constants.event_type.seminar')) || ($event->eventable['max_participants'] === 1)
            ? config('constants.event_registrant_role.individual')
            : config('constants.event_registrant_role.leader');

        Log::channel('api')->info('Harusnya muncul');
        Log::channel('api')->info($role);

        // Attach current authenticated user to the registration with determined role
        $eventRegistration->users()->attach($request->user()->id, ['role' => $role]);

        // Create new payment with status not confirmed
        $eventRegistration->eventRegistrationPayment()->create([
            'status' => config('constants.payment_status.not_confirmed'),
        ]);

        return jsonResponse(Response::HTTP_OK, 'OK', $eventRegistration->load(['users', 'eventRegistrationPayment', 'event']));
    }

    public function attachCurrentToRegistrationByUid(Request $request, EventRegistration $eventRegistration): JsonResponse
    {

        if ($eventRegistration->users()->where('id', $request->user()->id)->exists()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Already attached', errorCode: ErrorCode::ALREADY_ATTACHED);
        }

        if ($eventRegistration->users()->count() >= $eventRegistration->event->maxParticipants()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Reaches the limit', errorCode: ErrorCode::REACHES_THE_LIMIT);
        }

        $eventRegistration->users()->attach(
            $request->user()->id,
            ['role' => config('constants.event_registrant_role.member')]
        );

        return jsonResponse(Response::HTTP_RESET_CONTENT, 'OK');
    }

    public function detachCurrentFromRegistrationByUid(Request $request, EventRegistration $eventRegistration): JsonResponse
    {
        $eventRegistration->users()->detach(
            $request->user()->id
        );

        // If registration has 0 user, then delete it
        if ($eventRegistration->users()->count() === 0) {
            $eventRegistration->delete();
        }

        return jsonResponse(Response::HTTP_RESET_CONTENT, 'OK');
    }

    public function attachOtherUserToRegistrationByUid(EventRegistration $eventRegistration, User $user)
    {
        if ($user->eventRegistrations()->whereRelation('event', 'codename', $eventRegistration->event->codename)->first()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Already attached', errorCode: ErrorCode::ALREADY_ATTACHED);
        }

        if ($eventRegistration->users()->count() >= $eventRegistration->event->maxParticipants()) {
            return jsonResponse(Response::HTTP_CONFLICT, 'Reaches the limit', errorCode: ErrorCode::REACHES_THE_LIMIT);
        }

        if (!$user->userProfile) {
            return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
        }

        $eventRegistration->users()->attach(
            $user->id,
            ['role' => config('constants.event_registrant_role.member')]
        );

        return jsonResponse(Response::HTTP_RESET_CONTENT, 'OK');
    }

    public function detachOtherUserFromRegistrationByUid(EventRegistration $eventRegistration, User $user): JsonResponse
    {
        $eventRegistration->users()->detach(
            $user->id
        );



        return jsonResponse(Response::HTTP_RESET_CONTENT, 'OK');
    }

    public function getPaymentById(Request $request, EventRegistrationPayment $eventRegistrationPayment): JsonResponse
    {
        return jsonResponse(Response::HTTP_OK, 'OK', $eventRegistrationPayment);
    }

    public function updatePaymentById(Request $request, EventRegistrationPayment $eventRegistrationPayment): JsonResponse
    {
        $eventRegistrationPayment = $eventRegistrationPayment->update($request->input());

        return jsonResponse(Response::HTTP_OK, 'OK', $eventRegistrationPayment);
    }
}
