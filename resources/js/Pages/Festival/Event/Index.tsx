import React, {useState} from "react";
import {Head, Link, router, usePage} from "@inertiajs/react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {
    ActionIcon,
    Button,
    Group, Menu,
    Tabs, Text,
} from "@mantine/core";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {
    IconAdjustments,
    IconCategory,
    IconCategory2, IconCircuitSwitchClosed, IconCircuitSwitchOpen,
    IconPlus, IconSettings,
} from "@tabler/icons-react";
import DataList from "@/Components/molecules/data-list";
import DataListItem from "@/Components/molecules/data-list-item";
import {Competition, PageProps, Seminar, Event, Faq} from "@/types";
import {Data} from "@/types/app";
import {data} from "autoprefixer";
import {formatPrice} from "@/lib/utils";
import {modals} from "@mantine/modals";
import {notifications} from "@mantine/notifications";
import {useEvent} from "@/hooks/useEvent";

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
export default function EventIndexPage(props: Props): React.JSX.Element {
    const {auth, events}: Props = props

    const {constants}: any = usePage().props;

    const {handleRegistrationClose, handleRegistrationOpen, getCompetitions, getSeminars} = useEvent()

    const competitions: Event<Competition>[] = events.filter(
        (event) => event.eventable_type == constants.event_type.competition
    ) as Event<Competition>[];

    const seminars: Event<Seminar>[] = events.filter(
        (event) => event.eventable_type == constants.event_type.seminar
    ) as Event<Seminar>[];

    return (
        <FestivalLayout>
            <Head title="Events"/>

            <SectionHeader title="Event" subTitle="Kelola kompetisi dan seminar"/>

            <SectionContent>
                <Tabs variant="pills" defaultValue="competition">
                    <Tabs.List sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                        <Group spacing="xs" bg="gray.1" p={4} sx={(theme) => ({borderRadius: theme.radius.sm})}>
                            <Tabs.Tab value="competition">Kompetisi</Tabs.Tab>
                            <Tabs.Tab value="seminar">Seminar</Tabs.Tab>
                        </Group>
                        <Group spacing="4px">
                            <Button component={Link} size="xs" color="green" leftIcon={<IconPlus/>}
                                    href={route('events.create')}>Tambah</Button>
                            <Menu shadow="md" width={200} position="bottom-end">
                                <Menu.Target>
                                    <ActionIcon color="blue" variant="outline">
                                        <IconAdjustments/>
                                    </ActionIcon>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Label>Pendaftaran</Menu.Label>
                                    <Menu.Item onClick={handleRegistrationOpen} icon={<IconCircuitSwitchOpen size={14}/>}>Buka</Menu.Item>
                                    <Menu.Item onClick={handleRegistrationClose} icon={<IconCircuitSwitchClosed size={14}/>}>Tutup</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Tabs.List>

                    <Tabs.Panel value="competition" pt="xs">
                        <DataList title="Data Kompetisi" data={getCompetitions(competitions)}/>
                    </Tabs.Panel>

                    <Tabs.Panel value="seminar" pt="xs">
                        <DataList title="Data Seminar" data={getSeminars(seminars)}/>
                    </Tabs.Panel>
                </Tabs>
            </SectionContent>
        </FestivalLayout>
    )
}
