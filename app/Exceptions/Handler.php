<?php

namespace App\Exceptions;

use App\Enums\ErrorCode;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (NotFoundHttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return jsonResponse(Response::HTTP_NOT_FOUND, 'Not found', errorCode: ErrorCode::NOT_FOUND);
            }

            //            return true;
        });

        $this->renderable(function (ValidationException $e, Request $request) {
            if ($request->is('api/*')) {
                return jsonResponse(Response::HTTP_UNPROCESSABLE_ENTITY, 'Validation error', errorCode: ErrorCode::VALIDATION_ERROR);
            }

            //            return true;
        });

        $this->renderable(function (AuthenticationException $e, Request $request) {
            if ($request->is('api/*')) {
                return jsonResponse(Response::HTTP_UNAUTHORIZED, 'Not authenticated', errorCode: ErrorCode::NOT_AUTHENTICATED);
            }

            //            return true;
        });
    }
}
