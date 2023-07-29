import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Badge, Box, Button, Group} from "@mantine/core";
import {IconArrowBackUp, IconCheck, IconPencil, IconTrash} from "@tabler/icons-react";
import DescriptionList from "@/Components/molecules/description-list";
import {PageProps} from "@/types";
import {DataDisplay} from "@/types/app";
import {formatDate, formatPrice, paymentStatusToColor, paymentStatusToLabel} from "@/lib/utils";
import {PaymentStatus} from "@/enums/constants";

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
export default function PaymentShowPage(props: Props): React.JSX.Element {
    const {auth, payment} = props

    const paymentDisplay: DataDisplay[] = [
        {
            title: "Informasi Pembayaran",
            data: [
                {
                    key: "UID pendaftaran",
                    value: payment.event_registration.uid,
                    link: route('registrations.show', {id: payment.event_registration.id})
                },
                {
                    key: "Biaya",
                    value: formatPrice(payment.event_registration.event?.price!)
                },
                {
                    key: "Bukti pembayaran",
                    value: payment.proof,
                    link: payment.proof
                },
                {
                    key: "Diunggah pada",
                    value: formatDate(payment.uploaded_at, 'datetime')
                },
                {
                    key: "Status",
                    value: <Badge variant="filled"
                                  color={paymentStatusToColor(payment.status) || 'gray'}>{paymentStatusToLabel(payment.status)}</Badge>
                },
                {
                    key: "Dikonfirmasi oleh",
                    value: payment.user?.name
                }
            ]
        }
    ]

    return (
        <FestivalLayout>
            <Head title="Pembayaran"/>

            <SectionHeader title="Detail Pembayaran" subTitle="Kelola pembayaran"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        {payment.status === PaymentStatus.NOT_CONFIRMED &&
                            <Button size="xs" color="blue" leftIcon={<IconCheck/>}>Konfirmasi pembayaran</Button>
                        }
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={payment.event_registration.name || `UID: ${payment.event_registration.uid}`}
                                     data={paymentDisplay}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
