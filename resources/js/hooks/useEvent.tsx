import { Competition, Event, Seminar } from "@/types";
import { modals } from "@mantine/modals";
import { Badge, Text } from "@mantine/core";
import { router } from "@inertiajs/react";
import React from "react";
import { useForm } from "@mantine/form";
import {
    capitalize,
    formatDate,
    formatPrice,
    seminarCastRoleToColor,
    seminarCastRoleToString,
} from "@/lib/utils";
import { Data, DataDisplay, DataDisplayChild } from "@/types/app";
import { EventType } from "@/enums/constants";
import DescriptionChildList from "@/Components/molecules/description-child-list";
import { useSetRecoilState } from "recoil";
import { seminarCastModalState } from "@/lib/recoil/seminarCastModalAtom";
import { milestoneModalState } from "@/lib/recoil/milestoneModalAtom";
import { contactPersonModalState } from "@/lib/recoil/contactPersonModalAtom";
import { useMilestone } from "./useMilestone";
import { useContactPerson } from "./useContactPerson";

export function useEvent() {
    const setSeminarCastModal = useSetRecoilState(seminarCastModalState);
    const setMilestoneModal = useSetRecoilState(milestoneModalState);
    const setContactPersonModal = useSetRecoilState(contactPersonModalState);

    const { getMilestoneDisplayChild } = useMilestone();
    const { getContactPersonDisplayChild } = useContactPerson();

    const form = useForm({
        initialValues: {
            name: "",
            codename: "",
            description: "",
            image: "",
            price: 0,
            held_in: "",
            held_on: new Date(),
            group_link: "",
            eventable_type: "",

            // For competition
            max_participants: 1,
            submission: "",

            // For seminar
            theme: "",
        },
        validate: {
            name: (value) => (!value.length ? "Nama wajib diisi" : null),
            codename: (value) =>
                !value.length ? "Codename wajib diisi" : null,
            description: (value) =>
                !value.length ? "Deskripsi wajib diisi" : null,
            price: (value) =>
                /.*\./.test(String(value)) ? "Harga mengandung titik" : null,
            group_link: (value) =>
                !value.length
                    ? "Link grup wajib diisi"
                    : /^(?:https?:\/\/)?(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[^\s]*)?$/.test(
                          value
                      )
                    ? null
                    : "Link harus berupa URL",
            eventable_type: (value) =>
                !value.length ? "Jenis event wejib diisi" : null,
        },
    });

    const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.validate();

        if (form.isValid()) {
            router.post(route("events.store"), form.values);
        }
    };

    const handleDelete = (
        e:
            | React.MouseEvent<HTMLAnchorElement, MouseEvent>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>,
        event: Event<Seminar | Competition>
    ) => {
        e.preventDefault();
        modals.openConfirmModal({
            title: "Hapus Event",
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus event{" "}
                    <Text span weight={600}>
                        {event.name}
                    </Text>
                    ?. Tindakan ini akan menghapus seluruh pendaftaran event
                    ini.
                </Text>
            ),
            labels: { confirm: "Hapus", cancel: "Batal" },
            confirmProps: { color: "red" },
            onConfirm: () => {
                router.delete(route("events.destroy", { id: event.id }), {
                    preserveScroll: true,
                });
            },
        });
    };

    const handleRegistrationOpen = () => {
        modals.openConfirmModal({
            title: "Buka Seluruh Pendaftaran",
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin{" "}
                    <Text span weight={600}>
                        membuka
                    </Text>{" "}
                    seluruh pendaftaran?
                </Text>
            ),
            labels: { confirm: "Ya, buka", cancel: "Batal" },
            confirmProps: { color: "green" },
            onConfirm: () => {
                router.patch(route("options.events.open"));
            },
        });
    };

    const handleRegistrationClose = () => {
        modals.openConfirmModal({
            title: "Tutup Seluruh Pendaftaran",
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin{" "}
                    <Text span weight={600}>
                        menutup
                    </Text>{" "}
                    seluruh pendaftaran?
                </Text>
            ),
            labels: { confirm: "Ya, tutup", cancel: "Batal" },
            confirmProps: { color: "red" },
            onConfirm: () => {
                router.patch(route("options.events.close"));
            },
        });
    };

    const handleMilestoneAdd = (eventId: string) => {
        setMilestoneModal({
            opened: true,
            milestoneableType: "event",
            milestoneableId: eventId,
        });
    };

    const handleContactPersonAdd = (eventId: string) => {
        setContactPersonModal({
            opened: true,
            contactPersonableType: "event",
            contactPersonableId: eventId,
        });
    };

    const handleSeminarCastAdd = (eventId: string) => {
        setSeminarCastModal({
            opened: true,
            eventId: eventId,
        });
    };

    const getCompetitions = (competitions: Event<Competition>[]) => {
        return competitions.map((competition) => {
            return {
                id: competition.id,
                title: competition.name,
                link: route("events.show", { event: competition.id }),
                information: [
                    competition.price === 0
                        ? "Gratis"
                        : formatPrice(Number(competition.price)!),
                    Number(competition.eventable?.max_participants) === 1
                        ? "Individual"
                        : `Maks ${Number(
                              competition.eventable?.max_participants
                          )} peserta`,
                    `${
                        Number(competition.event_registrations_count) || 0
                    } pendaftaran`,
                ],
                badges: [
                    {
                        name: Number(competition.is_opened) ? "Buka" : "Tutup",
                        color: Number(competition.is_opened) ? "green" : "red",
                    },
                ],
                menu: [
                    {
                        label: "Edit",
                        linkProps: {
                            href: route("events.edit", { id: competition.id }),
                        },
                    },
                    {
                        label: "Hapus",
                        props: {
                            color: "red",
                        },
                        linkProps: {
                            href: "",
                            onClick: (
                                event:
                                    | React.MouseEvent<
                                          HTMLAnchorElement,
                                          MouseEvent
                                      >
                                    | React.KeyboardEvent<HTMLAnchorElement>
                            ) => handleDelete(event, competition),
                        },
                    },
                ],
            };
        }) as Data[];
    };

    const getSeminars = (seminars: Event<Seminar>[]) => {
        return seminars.map((seminar) => {
            return {
                id: seminar.id,
                title: seminar.name,
                link: route("events.show", { id: seminar.id }),
                information: [
                    seminar.price
                        ? "Gratis"
                        : formatPrice(Number(seminar.price!)),
                    `${
                        Number(seminar.event_registrations_count) || 0
                    } pendaftaran`,
                ],
                badges: [
                    {
                        name: Number(seminar.is_opened) ? "Buka" : "Tutup",
                        color: Number(seminar.is_opened) ? "green" : "red",
                    },
                ],
                menu: [
                    {
                        label: "Edit",
                        linkProps: {
                            href: route("events.edit", { id: seminar.id }),
                        },
                    },
                    {
                        label: "Hapus",
                        props: {
                            color: "red",
                        },
                        linkProps: {
                            href: "",
                            onClick: (
                                event:
                                    | React.MouseEvent<
                                          HTMLAnchorElement,
                                          MouseEvent
                                      >
                                    | React.KeyboardEvent<HTMLAnchorElement>
                            ) => handleDelete(event, seminar),
                        },
                    },
                ],
            };
        }) as Data[];
    };

    const getEventDisplay = (event: Event<Competition | Seminar>) => {
        const eventDisplay: DataDisplay[] = [
            {
                title: "Informasi Event",
                data: [
                    {
                        key: "Nama",
                        value: event.name,
                    },
                    {
                        key: "Deskripsi",
                        value: event.description,
                    },
                    {
                        key: "Jenis Event",
                        value: capitalize(event.eventable_type),
                    },
                    {
                        key: "Biaya",
                        value:
                            event.price === 0
                                ? "Gratis"
                                : formatPrice(event.price!),
                    },
                    {
                        key: "Diadakan di",
                        value: event.held_in,
                    },
                    {
                        key: "Diadakan pada",
                        value: formatDate(event.held_on!),
                    },
                    {
                        key: "Status",
                        value: event.is_opened ? (
                            <Badge color="green" variant="filled">
                                Buka
                            </Badge>
                        ) : (
                            <Badge color="red" variant="filled">
                                Tutup
                            </Badge>
                        ),
                    },
                    {
                        key: "Jumlah pendaftaran",
                        value: `${
                            Number(event.event_registrations_count) || 0
                        } pendaftaran`,
                    },
                    {
                        key: "Dibuat pada",
                        value: formatDate(event.created_at, "datetime"),
                    },
                ],
            },
        ];

        if (event.eventable_type === EventType.COMPETITION) {
            const competition = event.eventable as Competition;

            eventDisplay.push({
                title: "Informasi Kompetisi",
                data: [
                    {
                        key: "Maks peserta",
                        value:
                            competition.max_participants > 1
                                ? `${competition.max_participants} peserta`
                                : "Individual",
                    },
                ],
            });
        }

        if (event.eventable_type === EventType.SEMINAR) {
            const seminar = event.eventable as Seminar;

            const seminarCastDisplay: DataDisplayChild[] =
                seminar.seminar_casts.map((seminarCast) => {
                    return {
                        data: [
                            {
                                key: "Nama",
                                value: seminarCast.name,
                            },
                            {
                                key: "Title",
                                value: seminarCast.title,
                            },
                            {
                                key: "Sebagai",
                                value: (
                                    <Badge
                                        variant="filled"
                                        color={
                                            seminarCastRoleToColor(
                                                seminarCast.role
                                            ) || "gray"
                                        }
                                    >
                                        {seminarCastRoleToString(
                                            seminarCast.role
                                        )}
                                    </Badge>
                                ),
                            },
                            {
                                key: "Gambar",
                                value: seminarCast.image,
                                link: seminarCast.image,
                                linkTarget: "_blank",
                            },
                        ],
                    };
                });

            eventDisplay.push({
                title: "Informasi Seminar",
                data: [
                    {
                        key: "Tema seminar",
                        value: seminar.theme,
                    },
                    {
                        key: "Pemeran",
                        value: (
                            <DescriptionChildList data={seminarCastDisplay} />
                        ),
                    },
                ],
            });
        }

        eventDisplay.push({
            title: "Informasi Agenda",
            data: [
                {
                    key: "Milestones",
                    value: (
                        <DescriptionChildList
                            data={getMilestoneDisplayChild(event.milestones!)}
                        />
                    ),
                },
            ],
        });

        eventDisplay.push({
            title: "Informasi Narahubung",
            data: [
                {
                    key: "Narahubung",
                    value: (
                        <DescriptionChildList
                            data={getContactPersonDisplayChild(
                                event.contact_persons!
                            )}
                        />
                    ),
                },
            ],
        });

        return eventDisplay;
    };

    return {
        form,
        handleCreate,
        handleDelete,
        handleRegistrationOpen,
        handleRegistrationClose,
        handleSeminarCastAdd,
        handleMilestoneAdd,
        handleContactPersonAdd,
        getCompetitions,
        getSeminars,
        getEventDisplay,
    };
}
