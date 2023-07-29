import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Box, Button, Group} from "@mantine/core";
import {IconArrowBackUp, IconPencil, IconTrash} from "@tabler/icons-react";
import DescriptionList from "@/Components/molecules/description-list";
import {PageProps} from "@/types";
import {DataDisplay} from "@/types/app";
import {educationLevelToString, formatDate, genderToString} from "@/lib/utils";

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
export default function ParticipantShowPage(props: Props): React.JSX.Element {
    const {auth, participant} = props

    const participantDisplay: DataDisplay[] = [
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
                    value: formatDate(participant.created_at)
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
                    value: participant.user_profile?.id_number_image
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


    return (
        <FestivalLayout>
            <Head title="Partisipan"/>

            <SectionHeader title="Detail Partisipan" subTitle="Kelola partisipan"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        <Button size="xs" color="red" leftIcon={<IconTrash/>}>Hapus</Button>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={participant.name} data={participantDisplay}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
