import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Group, Tabs} from "@mantine/core";
import DataList from "@/Components/molecules/data-list";
import {PageProps} from "@/types";
import {Data} from "@/types/app";
import {formatPrice, paymentStatusToColor, paymentStatusToLabel} from "@/lib/utils";
import {EventType, PaymentStatus} from "@/enums/constants";

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
export default function PaymentIndexPage(props: Props): React.JSX.Element {
    const {payments}: Props = props

    type DataWithType = Data & { type: string }

    const paymentData = payments.map((payment) => {
        return {
            id: payment.id,
            title: `UID: ${payment.event_registration.uid}`,
            type: String(payment.status),
            link: route('payments.show', {id: payment.id}),
            information: [
                payment.event_registration.event?.name,
                formatPrice(payment.event_registration.event?.price!),
                payment.user && `Dikonfirmasi oleh: ${payment.user.name}`
            ],
            badges: [
                {
                    name: paymentStatusToLabel(payment?.status!),
                    color: paymentStatusToColor(payment?.status!)
                }
            ],
        }
    }) as DataWithType[]

    const paymentNotConfirmedData = paymentData.filter(
        (payment) => Number(payment.type) == PaymentStatus.NOT_CONFIRMED
    );
    const paymentConfirmedData = paymentData.filter(
        (payment) => Number(payment.type) != PaymentStatus.NOT_CONFIRMED
    );


    return (
        <FestivalLayout>
            <Head title="Pembayaran"/>

            <SectionHeader title="Pembayaran" subTitle="Kelola pembayaran registrasi"/>

            <SectionContent>
                <Tabs variant="pills" defaultValue="all">
                    <Tabs.List sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                        <Group spacing="xs" bg="gray.1" p={4} sx={(theme) => ({borderRadius: theme.radius.sm})}>
                            <Tabs.Tab value="all">Semua</Tabs.Tab>
                            <Tabs.Tab value="not_confirmed">Belum dikonfirmasi</Tabs.Tab>
                            <Tabs.Tab value="confirmed">Dikonfirmasi</Tabs.Tab>
                        </Group>
                    </Tabs.List>

                    <Tabs.Panel value="all" pt="xs">
                        <DataList title="Data Pembayaran" data={paymentData}/>
                    </Tabs.Panel>

                    <Tabs.Panel value="not_confirmed" pt="xs">
                        <DataList title="Data Pembayaran: Belum Dikonfirmasi" data={paymentNotConfirmedData}/>
                    </Tabs.Panel>

                    <Tabs.Panel value="confirmed" pt="xs">
                        <DataList title="Data Pembayaran: Dikonfirmasi" data={paymentConfirmedData}/>
                    </Tabs.Panel>
                </Tabs>
            </SectionContent>
        </FestivalLayout>
    )
}
