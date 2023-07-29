import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, usePage} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Badge, Box, Button, Group, Tabs} from "@mantine/core";
import {IconArrowBackUp, IconPencil, IconPlus, IconTrash} from "@tabler/icons-react";
import DataList from "@/Components/molecules/data-list";
import DataListItem from "@/Components/molecules/data-list-item";
import {PageProps} from "@/types";
import {Data, DataDisplay, DataDisplayChild} from "@/types/app";
import {
    eventRegistrantRoleToColor,
    eventRegistrantRoleToString, formatPrice,
    paymentStatusToColor,
    paymentStatusToLabel
} from "@/lib/utils";
import DescriptionList from "@/Components/molecules/description-list";
import DescriptionChildList from "@/Components/molecules/description-child-list";

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
export default function RegistrationShowPage(props: Props): React.JSX.Element {
    const {auth, registration}: Props = props

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
                                  color={eventRegistrantRoleToColor(participant.event_registrant?.role!) || 'gray'}>{eventRegistrantRoleToString(participant.event_registrant?.role!)}</Badge>
                }
            ]
        }
    })

    const registrationDisplay: DataDisplay[] = [
        {
            title: "Informasi Pendaftaran",
            data: [
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
                {
                    key: "Status pembayaran",
                    value: <Badge variant="filled"
                                  color={paymentStatusToColor(registration.event_registration_payment?.status!) || 'gray'}>{paymentStatusToLabel(registration.event_registration_payment?.status!)}</Badge>
                }
            ],
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


    return (
        <FestivalLayout>
            <Head title="Detail Pendaftaran"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        <Button size="xs" color="red" leftIcon={<IconTrash/>}>Hapus</Button>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={registration.name || `UID: ${registration.uid}`}
                                     data={registrationDisplay}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
