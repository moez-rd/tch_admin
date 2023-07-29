import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, router} from "@inertiajs/react";
import {Competition, Event, PageProps, Seminar, User} from "@/types";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Group, Tabs, Text} from "@mantine/core";
import DataList from "@/Components/molecules/data-list";
import {Data} from "@/types/app";
import {createDataList} from "@/lib/utils";
import {modals} from "@mantine/modals";
import {notifications} from "@mantine/notifications";

/**
 * interface
 */
interface Props extends PageProps {

}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function ParticipantIndexPage(props: Props): React.JSX.Element {
    const {auth, participants} = props

    const participantData: Data[] = createDataList<User>(participants, (data) => {
        return {
            id: data.id,
            title: data.name,
            avatar: data.avatar,
            link: route('participants.show', {id: data.id}),
            information: [
                `NIM/NISN: ${data.user_profile?.id_number}`,
                `${data.event_registrations_count} event`
            ],
            menu: [
                {
                    label: "Hapus",
                    props: {
                        color: "red"
                    },
                    linkProps: {
                        href: "",
                        onClick: () => handleDelete(data)
                    }
                }
            ]
        }
    })

    const handleDelete = (participant: User) => {
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
                router.delete(route('participants.destroy', {id: participant.id}))
            }
        })
    }

    return (
        <FestivalLayout>
            <Head title="Partisipan"/>

            <SectionHeader title="Partisipan" subTitle="Kelola partisipan"/>

            <SectionContent>
                <DataList title="Data Partisipan" data={participantData}/>
            </SectionContent>
        </FestivalLayout>
    )
}
