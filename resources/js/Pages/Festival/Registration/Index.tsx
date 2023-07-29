import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, usePage} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Button, Group, Tabs} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import DataList from "@/Components/molecules/data-list";
import DataListItem from "@/Components/molecules/data-list-item";
import {PageProps} from "@/types";
import {Data} from "@/types/app";
import {paymentStatusToColor, paymentStatusToLabel} from "@/lib/utils";

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
export default function RegistrationIndexPage(props: Props): React.JSX.Element {
    const {auth, registrations}: Props = props

    const {constants}: any = usePage().props;

    type DataWithType = Data & { type: string }

    console.log(registrations)

    const registrationData = registrations.map((registration) => {
        return {
            id: registration.id,
            title: registration.name || `UID: ${registration.uid}`,
            type: registration.event?.eventable_type,
            link: route('registrations.show', {id: registration.id}),
            information: [
                registration.event?.name,
                registration.users_count > 1 ? `${registration.users_count} orang` : registration.users![0].name
            ],
            badges: [
                {
                    name: paymentStatusToLabel(registration.event_registration_payment?.status!),
                    color: paymentStatusToColor(registration.event_registration_payment?.status!)
                }
            ],
            menu: [
                {
                    label: "Hapus",
                    props: {
                        color: "red"
                    },
                    linkProps: {
                        method: "delete",
                        href: route('registrations.destroy', {id: registration.id})
                    }
                }
            ]
        }
    }) as DataWithType[]

    const registrationCompetitionsData = registrationData.filter((registration) =>
        registration.type == constants.event_type.competition
    );
    const registrationSeminarsData = registrationData.filter((registration) =>
        registration.type == constants.event_type.seminar
    );


    return (
        <FestivalLayout>
            <Head title="Pendaftaran"/>

            <SectionHeader title="Pendaftaran" subTitle="Kelola pendaftaran event"/>

            <SectionContent>
                <Tabs variant="pills" defaultValue="all">
                    <Tabs.List sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                        <Group spacing="xs" bg="gray.1" p={4} sx={(theme) => ({borderRadius: theme.radius.sm})}>
                            <Tabs.Tab value="all">Semua</Tabs.Tab>
                            <Tabs.Tab value="competition">Kompetisi</Tabs.Tab>
                            <Tabs.Tab value="seminar">Seminar</Tabs.Tab>
                        </Group>
                    </Tabs.List>

                    <Tabs.Panel value="all" pt="xs">
                        <DataList title="Data Pendaftaran" data={registrationData}/>
                    </Tabs.Panel>

                    <Tabs.Panel value="competition" pt="xs">
                        <DataList title="Data Pendaftaran: Kompetisi" data={registrationCompetitionsData}/>
                    </Tabs.Panel>

                    <Tabs.Panel value="seminar" pt="xs">
                        <DataList title="Data Pendaftaran: Seminar" data={registrationSeminarsData}/>
                    </Tabs.Panel>
                </Tabs>
            </SectionContent>
        </FestivalLayout>
    )
}
