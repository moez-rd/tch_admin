import {Festival} from "@/types";
import {usePage} from "@inertiajs/react";
import {EventRegistrationRole, PaymentStatus, SeminarCastRole} from "@/enums/constants";
import {Data} from "@/types/app";

export function getFirstLetters(str: string): string {
    return str
        .split(" ")
        .map((word, index) => (index >= 2 ? "" : word.charAt(0)))
        .join("");
}

export function formatDate(date: string | Date | undefined, option: "date" | "time" | "datetime" = "date"): string | undefined {
    if (!date) {
        return undefined
    }

    const new_date: Date = typeof date === "string" ? new Date(date) : date

    const locale: Intl.LocalesArgument = "id-ID";
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeFormatOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
    };

    if (option == "date") {
        return new_date.toLocaleDateString(locale, dateFormatOptions);
    } else if (option == "time") {
        return new_date.toLocaleTimeString(locale, timeFormatOptions);
    }

    return new_date.toLocaleString(locale, {
        ...dateFormatOptions,
        ...timeFormatOptions,
    });
}

export function currentFestival(): Festival {
    const {festivals, auth}: any = usePage().props;

    return festivals.filter(
        (festival: Festival) => festival.id == auth.user.selected_festival
    )[0];
}

export function activeFestival(): Festival {
    const {festivals}: any = usePage().props;

    return festivals.filter((festival: Festival) => festival.is_active)[0];
}

export function formatPrice(price: number): string {
    return `Rp${price.toLocaleString("id-ID")}`;
}

type TransformedPaymentStatus = { label: string; color: string }

export function paymentStatusToLabel(number: number | string): string | null {

    switch (Number(number)) {
        case PaymentStatus.NOT_CONFIRMED:
            return "Belum dikonfirmasi"
        case PaymentStatus.ACCEPTED:
            return "Diterima"
        case PaymentStatus.REJECTED:
            return "Ditolak"

    }

    return null
}

export function paymentStatusToColor(number: number | string): string | null {
    switch (Number(number)) {
        case PaymentStatus.NOT_CONFIRMED:
            return "gray"
        case PaymentStatus.ACCEPTED:
            return "green"
        case PaymentStatus.REJECTED:
            return "red"

    }

    return null
}

export function seminarCastRoleToString(number: number | string): string | null {
    switch (Number(number)) {
        case SeminarCastRole.MODERATOR:
            return "Moderator"
        case SeminarCastRole.SPEAKER:
            return "Speaker"
    }

    return null
}

export function seminarCastRoleToColor(number: number | string): string | null {
    switch (Number(number)) {
        case SeminarCastRole.MODERATOR:
            return "violet"
        case SeminarCastRole.SPEAKER:
            return "cyan"
    }

    return null
}

export function eventRegistrantRoleToString(number: number | string): string | null {
    switch (Number(number)) {
        case EventRegistrationRole.INDIVIDUAL:
            return "Individual"
        case EventRegistrationRole.LEADER:
            return "Ketua tim"
        case EventRegistrationRole.MEMBER:
            return "Anggota tim"
    }

    return null
}

export function eventRegistrantRoleToColor(number: number | string): string | null {
    switch (Number(number)) {
        case EventRegistrationRole.INDIVIDUAL:
            return "blue"
        case EventRegistrationRole.LEADER:
            return "violet"
        case EventRegistrationRole.MEMBER:
            return "orange"
    }

    return null
}

type OptionsCallback<T> = (data: T) => Data;

export function createDataList<T>(dataList: T[], options: OptionsCallback<T>): Data[] {
    return dataList.map((data) => {
        return options(data)
    })
}

export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase()
        + word.slice(1)
}
