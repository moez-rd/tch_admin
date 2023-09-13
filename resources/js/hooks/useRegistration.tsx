import {Data, DataDisplayChild} from "@/types/app";
import {Badge, Text} from "@mantine/core";
import {
    eventRegistrantRoleToColor,
    eventRegistrantRoleToString,
    formatPrice, participationMethodToColor, participationMethodToString,
    paymentStatusToColor,
    paymentStatusToLabel
} from "@/lib/utils";
import DescriptionChildList from "@/Components/molecules/description-child-list";
import {EventRegistration} from "@/types";
import {modals} from "@mantine/modals";
import {router} from "@inertiajs/react";
import {PaymentStatus} from "@/enums/constants";
import {MouseEvent, KeyboardEvent} from "react";

export function useRegistration() {

    const handleDelete = (e: any, registration: EventRegistration) => {
        e.preventDefault()
        modals.openConfirmModal({
            title: 'Hapus Pendaftaran',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus pendaftaran <Text span
                                                            weight={600}>{`${registration.name || registration.users![0].name}@${registration.event?.name}`}</Text>?
                </Text>
            ),
            labels: {confirm: 'Hapus', cancel: "Batal"},
            confirmProps: {color: 'red'},
            onConfirm: () => {
                router.delete(route('registrations.destroy', {id: registration.id}), {preserveScroll: true})
            }
        })
    }

    const handleAcceptConfirmation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.KeyboardEvent<HTMLAnchorElement>, registration: EventRegistration) => {
        e.preventDefault()
        modals.openConfirmModal({
            title: 'Terima pendaftaran',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin <Text span weight={600} color="green.5">menerima</Text> pendaftaran <Text span
                                                                                                          weight={600}>{`${registration.name || registration.users![0].name}@${registration.event?.name}`}</Text>?
                </Text>
            ),
            labels: {confirm: 'Ya', cancel: "Batal"},
            onConfirm: () => {
                router.patch(route('registrations.update.accept', {id: registration.id}), {}, {preserveScroll: true})
            }
        })
    }

    const handleRejectConfirmation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.KeyboardEvent<HTMLAnchorElement>, registration: EventRegistration) => {
        e.preventDefault()
        modals.openConfirmModal({
            title: 'Tolak pendaftaran',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin <Text span weight={600} color="red.5">menolak</Text> pendaftaran <Text span
                                                                                                       weight={600}>{`${registration.name || registration.users![0].name}@${registration.event?.name}`}</Text>?
                </Text>
            ),
            labels: {confirm: 'Ya', cancel: "Batal"},
            onConfirm: () => {
                router.patch(route('registrations.update.reject', {id: registration.id}), {}, {preserveScroll: true})
            }
        })
    }

    const displayRegistration = (registration: EventRegistration) => {

        const participantDisplay: DataDisplayChild[] = registration.users!.map((participant) => {
            return {
                data: [
                    {
                        key: "Nama",
                        value: participant.name,
                        link: route('participants.show', {id: participant.id})
                    },
                    {
                        key: "UID",
                        value: participant.uid
                    },
                    {
                        key: "Sebagai",
                        value: <Badge variant="filled"
                                      color={eventRegistrantRoleToColor(participant.event_registrant?.role!
                                          ) ||
                                          'gray'
                                      }>
                            {
                                eventRegistrantRoleToString(participant.event_registrant?.role!)
                            }
                        </Badge>
                    }
                ]
            }
        })

        const registrationInformation = [
            {
                key: "UID",
                value: registration.uid
            },
            {
                key: "Nama event",
                value: registration.event?.name
            },
            {
                key: "Biaya",
                value: formatPrice(registration.event?.price!)
            },
        ]

        if (registration.participation_method != undefined) {
            registrationInformation.push({
                key: "Metode partisipasi",
                value:  participationMethodToString(registration.participation_method)!
            })
        }

        return [
            {
                title: "Informasi Pendaftaran",
                data: registrationInformation,
            },
            {
                title: "Informasi Pembayaran",
                data: [
                    {
                        key: "Status pembayaran",
                        value: <Badge variant="filled"
                                      color={paymentStatusToColor(registration.event_registration_payment?.status!
                                          ) ||
                                          'gray'
                                      }>
                            {
                                paymentStatusToLabel(registration.event_registration_payment?.status!)
                            }
                        </Badge>
                    },
                    {
                        key: "Bukti pembayaran",
                        value: registration.event_registration_payment?.proof,
                        imagePreview: true
                    }
                ]
            },
            {
                title: "Informasi Peserta",
                data: [
                    {
                        key: "Peserta",
                        value: <DescriptionChildList data={participantDisplay}/>
                    }
                ]
            }
        ]
    }

    const getRegistrations = (registrations: EventRegistration[]) => {
        type DataWithType = Data & { type: string }

        return registrations.map((registration) => {

            const badges = registration.participation_method != undefined ? [{
                name: participationMethodToString(registration.participation_method),
                color: participationMethodToColor(registration.participation_method)
            }] : [{
                name: paymentStatusToLabel(registration.event_registration_payment?.status!),
                color: paymentStatusToColor(registration.event_registration_payment?.status!)
            }]

            return {
                id: registration.id,
                title: `${registration.name || registration.users![0].name}@${registration.event?.name}`,
                type: registration.event?.eventable_type,
                link: route('registrations.show', {id: registration.id}),
                information: [
                    `#${registration.uid}`,
                    registration.users_count > 1 ? `${registration.users_count} orang` : registration.users![0].name
                ],
                badges: badges,
                menu: [
                    ...(registration.event_registration_payment?.status === PaymentStatus.NOT_CONFIRMED ? [
                        {
                            label: "Terima",
                            linkProps: {
                                href: "",
                                onClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent<HTMLAnchorElement>) => handleAcceptConfirmation(event, registration)
                            }
                        },
                        {
                            label: "Tolak",
                            linkProps: {
                                href: "",
                                onClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent<HTMLAnchorElement>) => handleRejectConfirmation(event, registration)
                            }
                        }
                    ] : []),
                    {
                        label: "Hapus",
                        props: {
                            color: "red"
                        },
                        linkProps: {
                            href: "",
                            onClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent<HTMLAnchorElement>) => handleDelete(event, registration)
                        }
                    }
                ]
            }
        }) as DataWithType[]
    }

    return {
        displayRegistration,
        getRegistrations,
        handleDelete
    }
}
