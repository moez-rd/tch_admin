<?php

namespace App\Enums;

enum ErrorCode: string
{
    case NOT_FOUND = "0001";
    case VALIDATION_ERROR = "0002";
    case NOT_AUTHENTICATED = "0003";
    case INVALID_CREDENTIALS = "0004";
    case EMAIL_ALREADY_EXISTS = "0005";
    case INVALID_ACCESS_TOKEN = "0006";
    case WRONG_PASSWORD = "0007";
    case ALREADY_REGISTERED = "0008";
    case ALREADY_ATTACHED = "0009";
    case REACHES_THE_LIMIT = "0010";
    case ACCOUNT_NOT_LINKED = "0011";
}
