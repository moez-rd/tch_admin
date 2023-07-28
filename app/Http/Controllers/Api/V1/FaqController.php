<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FaqController extends Controller
{
    public function findAll(Request $request)
    {
        $faqs = Faq::whereRelation('festival', 'is_active', true)
            ->get(['id', 'question', 'answer']);

        return jsonResponse(Response::HTTP_OK, 'OK', $faqs);
    }
}
