import { Link } from "@/types/app";

export const links: Link[] = [
    {
        label: "Festival",
        link: route("festivals.index"),
        basePath: "/festival/festivals",
    },
    {
        label: "Partisipan",
        link: route("participants.index"),
        basePath: "/festival/participants",
    },
    {
        label: "Event",
        link: route("events.index"),
        basePath: "/festival/events",
    },
    {
        label: "Pendaftaran",
        link: route("registrations.index"),
        basePath: "/festival/registrations",
    },
    {
        label: "Pembayaran",
        link: route("payments.index"),
        basePath: "/festival/payments",
    },
    {
        label: "Submission",
        link: route("submissions.index"),
        basePath: "/festival/submissions",
    },
    {
        label: "Faqs",
        link: route("faqs.index"),
        basePath: "/festival/faqs",
    },
];
