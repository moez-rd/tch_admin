<?php

function nanoUid(): string
{
    $client = new \Hidehalo\Nanoid\Client();

    return $client->formattedId('0123456789ABCDEF', 8);
}

function jsonResponse(int $status, string $message, $data = null, $errorCode = null): Illuminate\Http\JsonResponse
{
    if (!isset($data) && isset($errorCode)) {
        return response()->json(
            [
                'status' => $status,
                'message' => $message,
                'error_code' => $errorCode
            ],
            $status
        );
    }

    if (!isset($data)) {
        return response()->json(
            [
                'status' => $status,
                'message' => $message,
            ],
            $status
        );
    }

    return response()->json(
        [
            'status' => $status,
            'message' => $message,
            'data' => $data,
        ],
        $status
    );
}
