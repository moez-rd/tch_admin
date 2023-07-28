<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Avatar;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AvatarController extends Controller
{
    public function findAll(Request $request)
    {
        $avatars = Avatar::get(['id', 'image']);

        return jsonResponse(Response::HTTP_OK, 'OK', $avatars);
    }
}
