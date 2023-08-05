import {Data} from "@/types/app";
import {educationLevelToString, formatDate, genderToString} from "@/lib/utils";
import {User} from "@/types";
import {modals} from "@mantine/modals";
import {Text} from "@mantine/core";
import {router} from "@inertiajs/react";
import { MouseEvent, KeyboardEvent } from "react";

export function useParticipant() {


    const handleDelete = (e: any, participant: User) => {
        e.preventDefault()

        modals.openConfirmModal({
            title: 'Hapus Partisipan',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus partisipan <Text span weight={600}>{participant.name}</Text>?
                </Text>
            ),
            labels: {confirm: 'Hapus', cancel: "Batal"},
            confirmProps: {color: 'red'},
            onConfirm: () => {
                router.delete(route('participants.destroy', {id: participant.id}), {preserveScroll: true})
            }
        })
    }

    const getParticipants = (participants: User[]): Data[] => {
        return participants.map((participant) => {
            return {
                id: participant.id,
                title: participant.name,
                avatar: participant.avatar,
                link: route('participants.show', {id: participant.id}),
                information: [
                    `@${participant.uid}`,
                    `${participant.event_registrations_count} event`
                ],
                menu: [
                    {
                        label: "Hapus",
                        props: {
                            color: "red"
                        },
                        linkProps: {
                            href: "",
                            onClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent<HTMLAnchorElement>) => handleDelete(event, participant)
                        }
                    }
                ]
            }
        }) as Data[]
    }

    const getPartisipantDisplay = (participant: User) => {
        return [
            {
                title: "Informasi Partisipan",
                data: [
                    {
                        key: "Nama",
                        value: participant.name
                    },
                    {
                        key: "UID",
                        value: participant.uid
                    },
                    {
                        key: "Email",
                        value: participant.email
                    },
                    {
                        key: "Jumlah pendaftaran",
                        value: `${participant.event_registrations_count || 0} event diikuti`
                    },
                    {
                        key: "Bergabung pada",
                        value: formatDate(participant.created_at, "datetime")
                    }
                ]
            },
            {
                title: "Informasi Profil",
                data: [
                    {
                        key: "Institusi",
                        value: participant.user_profile?.institution
                    },
                    {
                        key: "Status",
                        value: educationLevelToString(participant.user_profile?.education_level!)
                    },
                    {
                        key: "NIM/NISN",
                        value: participant.user_profile?.id_number
                    },
                    {
                        key: "Kartu tanda mahasiswa/siswa",
                        value: participant.user_profile?.id_card_image,
                        imagePreview: true
                    },
                    {
                        key: "Jenis kelamin",
                        value: genderToString(participant.user_profile?.gender!)
                    },
                    {
                        key: "WhatsApp",
                        value: participant.user_profile?.whatsapp
                    }
                ]
            }
        ]
    }

    return {getParticipants, getPartisipantDisplay, handleDelete}
}
