import React from "react";
import {Head, Link, router} from "@inertiajs/react";
import FestivalLayout from "@/Pages/Festival/Layout";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {ActionIcon, Badge, Box, Button, FileInput, Group, Menu, Select, Stack, TextInput} from "@mantine/core";
import {
    IconAdjustments,
    IconArrowBackUp,
    IconCategory,
    IconPencil,
    IconPlus,
    IconTrash
} from "@tabler/icons-react";
import DescriptionList from "@/Components/molecules/description-list";
import {Competition, PageProps, Seminar, Event} from "@/types";
import {DataDisplay, DataDisplayChild} from "@/types/app";
import {capitalize, formatDate, formatPrice, seminarCastRoleToColor, seminarCastRoleToString} from "@/lib/utils";
import {EventType, SeminarCastRole} from "@/enums/constants";
import DescriptionChildList from "@/Components/molecules/description-child-list";
import {modals} from "@mantine/modals";
import {useForm} from "@mantine/form";
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
export default function EventShowPage(props: Props): React.JSX.Element {
    const {auth, event} = props

    const {handleDelete, handleContactPersonAdd, handleMilestoneAdd, handleSeminarCastAdd, getEventDisplay} = useEvent()


    return (
        <FestivalLayout>
            <Head title="Events"/>

            <SectionHeader title="Detail Event" subTitle="Kelola kompetisi dan seminar"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>

                    <Group spacing="4px">

                        <Button component={Link} href={route('events.edit', {event: event.id})} size="xs" color="yellow"
                                leftIcon={<IconPencil/>}>Edit</Button>

                        <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleDelete(e, event)} size="xs" color="red"
                                leftIcon={<IconTrash/>}>Hapus</Button>

                        <Menu shadow="md" width={200} position="bottom-end">
                            <Menu.Target>
                                <ActionIcon color="blue" variant="outline">
                                    <IconAdjustments/>
                                </ActionIcon>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Event</Menu.Label>
                                {
                                    event.eventable_type === EventType.SEMINAR &&
                                    <Menu.Item onClick={() => handleSeminarCastAdd(event.id)} icon={<IconPlus size={14}/>}>Tambah
                                        pemeran</Menu.Item>
                                }
                                <Menu.Item onClick={() => handleMilestoneAdd(event.id)} icon={<IconPlus size={14}/>}>Tambah
                                    milestone</Menu.Item>

                                <Menu.Item onClick={() => handleContactPersonAdd(event.id)} icon={<IconPlus size={14}/>}>Tambah
                                    narahubung</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={event.name} data={getEventDisplay(event)}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
