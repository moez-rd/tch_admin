import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, usePage} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {ActionIcon, Button, Group, Menu, Tabs} from "@mantine/core";
import {IconCategory, IconCircuitSwitchClosed, IconCircuitSwitchOpen, IconPlus} from "@tabler/icons-react";
import DataList from "@/Components/molecules/data-list";
import DataListItem from "@/Components/molecules/data-list-item";
import {PageProps} from "@/types";
import {Data} from "@/types/app";
import {paymentStatusToColor, paymentStatusToLabel} from "@/lib/utils";
import {useRegistration} from "@/hooks/useRegistration";
import {EventType} from "@/enums/constants";

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
    
    const {getRegistrations} = useRegistration()

    const registrationCompetitionsData = getRegistrations(registrations).filter((registration) =>
        registration.type == EventType.COMPETITION
    );
    const registrationSeminarsData = getRegistrations(registrations).filter((registration) =>
        registration.type == EventType.SEMINAR
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
                        <DataList title="Data Pendaftaran" data={getRegistrations(registrations)}/>
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
