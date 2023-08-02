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

    const competitions: Event<Competition>[] = events.filter(
        (event) => event.eventable_type == constants.event_type.competition
    ) as Event<Competition>[];

    const seminars: Event<Seminar>[] = events.filter(
        (event) => event.eventable_type == constants.event_type.seminar
    ) as Event<Seminar>[];

    const competitionData = competitions.map((competition) => {
        return {
            id: competition.id,
            title: competition.name,
            link: route('events.show', {event: competition.id}),
            information: [
                formatPrice(competition.price!),
                competition.eventable?.max_participants === 1 ? "Individual" : `Maks ${competition.eventable?.max_participants} peserta`,
                `${competition.event_registrations_count || 0} pendaftaran`
            ],
            badges: [
                {
                    name: Number(competition.is_opened) ? "Buka" : "Tutup",
                    color: Number(competition.is_opened) ? "green" : "red"
                }
            ],
            menu: [
                {
                    label: "Edit",
                    linkProps: {
                        href: route('events.edit', {id: competition.id})
                    }
                },
                {
                    label: "Hapus",
                    props: {
                        color: "red"
                    },
                    linkProps: {
                        href: "",
                        onClick: () => handleDelete(competition)
                    }
                }
            ]
        }
    }) as Data[]

    const seminarData = seminars.map((seminar) => {
        return {
            id: seminar.id,
            title: seminar.name,
            link: route('events.show', {id: seminar.id}),
            information: [
                formatPrice(seminar.price!),
                `${seminar.event_registrations_count || 0} pendaftaran`
            ],
            badges: [
                {
                    name: seminar.is_opened ? "Buka" : "Tutup",
                    color: seminar.is_opened ? "green" : "red"
                }
            ],
            menu: [
                {
                    label: "Edit",
                    linkProps: {
                        href: route('events.edit', {id: seminar.id})
                    }
                },
                {
                    label: "Hapus",
                    props: {
                        color: "red"
                    },
                    linkProps: {
                        href: "",
                        onClick: () => handleDelete(seminar)
                    }
                }
            ]
        }
    }) as Data[]

    const handleDelete = (event: Event<Seminar | Competition>) => {
        modals.openConfirmModal({
            title: 'Hapus Event',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus event <Text span weight={600}>{event.name}</Text>?. Tindakan ini akan
                    menghapus seluruh pendaftaran event ini.
                </Text>
            ),
            labels: {confirm: 'Hapus', cancel: "Batal"},
            confirmProps: {color: 'red'},
            onConfirm: () => {
                router.delete(route('events.destroy', {id: event.id}))
            }
        })
    }

    const handleRegistrationOpen = () => {
        modals.openConfirmModal({
            title: 'Buka Seluruh Pendaftaran',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin <Text span weight={600}>membuka</Text> seluruh pendaftaran?
                </Text>
            ),
            labels: {confirm: 'Ya, buka', cancel: "Batal"},
            confirmProps: {color: 'green'},
            onConfirm: () => {
                router.patch(route('options.events.open'))
            }
        })
    }

    const handleRegistrationClose = () => {
        modals.openConfirmModal({
            title: 'Tutup Seluruh Pendaftaran',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin <Text span weight={600}>menutup</Text> seluruh pendaftaran?
                </Text>
            ),
            labels: {confirm: 'Ya, tutup', cancel: "Batal"},
            confirmProps: {color: 'red'},
            onConfirm: () => {
                router.patch(route('options.events.close'))
            }
        })
    }

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
                                    <ActionIcon>
                                        <IconCategory/>
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
                        <DataList title="Data Kompetisi" data={competitionData}/>
                    </Tabs.Panel>

                    <Tabs.Panel value="seminar" pt="xs">
                        <DataList title="Data Seminar" data={seminarData}/>
                    </Tabs.Panel>
                </Tabs>
            </SectionContent>
        </FestivalLayout>
    )
}
