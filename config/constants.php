<?php

return [
    // The four gender codes specified in ISO/IEC 5218: https://en.wikipedia.org/wiki/ISO/IEC_5218
    // http://dbpedia.org/resource/ISO/IEC_5218
    'gender' => [
        'not_known' => 0,
        'male' => 1,
        'female' => 2,
        'not_applicable' => 9,
    ],

    'user_role' => [
        'admin' => 0,
        'manager' => 1,
        'participant' => 2,
    ],

    'event_registrant_role' => [
        'individual' => 0,
        'leader' => 1,
        'member' => 2,
    ],

    'seminar_cast_role' => [
        'speaker' => 0,
        'moderator' => 1,
    ],

    'event_type' => [
        'seminar' => 'seminar',
        'competition' => 'competition',
    ],

    'payment_status' => [
        'not_confirmed' => 0,
        'accepted' => 1,
        'rejected' => 2,
    ],

    'provider' => [
        'credentials' => 'credentials',
        'google' => 'google',
        'github' => 'github',
    ],

    'education_level' => [
        'high_school' => 0,
        'college' => 1,
    ],
];
