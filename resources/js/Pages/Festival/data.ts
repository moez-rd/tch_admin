import {Link} from "@/types/app";

export const links: Link[] = [
    {
        label: "Festival",
        link: route("festivals.index"),
        basePath: "/festival/festivals"
    },
    {
        label: "Event",
        link: route("events.index"),
        basePath: "/festival/events"
    },
    {
        label: "Pendaftaran",
        link: route("registrations.index"),
        basePath: "/festival/registrations"
    },
    {
        label: "Partisipan",
        link: route("participants.index"),
        basePath: "/festival/participants"
    },
    {
        label: "Pembayaran",
        link: route("payments.index"),
        basePath: "/festival/payments"
    },
    {
        label: "Faqs",
        link: route("faqs.index"),
        basePath: "/festival/faqs"
    }
]
