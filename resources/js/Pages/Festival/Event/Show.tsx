import React from "react";
import {Head, router} from "@inertiajs/react";
import FestivalLayout from "@/Pages/Festival/Layout";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {ActionIcon, Badge, Box, Button, FileInput, Group, Menu, Select, Stack, TextInput} from "@mantine/core";
import {
    IconArrowBackUp,
    IconCategory, IconCircuitSwitchClosed,
    IconCircuitSwitchOpen,
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
import {File} from "react-bootstrap-icons";
import {useForm} from "@mantine/form";

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

    const seminarCastForm = useForm({
        initialValues: {
            name: "",
            title: "",
            image: "",
            role: ""
        },
        validate: {
            name: (value) => !value.length ? 'Nama wajib diisi' : null,
            title: (value) => !value.length ? 'Title wajib diisi' : null,
            image: (value) => !value.length ? 'Foto wajib diisi' : null,
            role: (value) => !value.length ? 'Peranan wajib diisi' : null,
        }
    })

    const eventDisplay: DataDisplay[] = [
        {
            title: "Informasi Event",
            data: [
                {
                    key: "Nama",
                    value: event.name
                },
                {
                    key: "Deskripsi",
                    value: event.description
                },
                {
                    key: "Jenis Event",
                    value: capitalize(event.eventable_type)
                },
                {
                    key: "Biaya",
                    value: formatPrice(event.price!)
                },
                {
                    key: "Diadakan di",
                    value: event.held_in
                },
                {
                    key: "Diadakan pada",
                    value: formatDate(event.held_on!)
                },
                {
                    key: "Status",
                    value: event.is_opened ? <Badge color="green" variant="filled">Buka</Badge> :
                        <Badge color="red" variant="filled">Tutup</Badge>
                },
                {
                    key: "Jumlah pendaftaran",
                    value: `${event.event_registrations_count || 0} pendaftaran`
                },
                {
                    key: "Dibuat pada",
                    value: formatDate(event.created_at, "datetime")
                }
            ]
        }
    ]

    if (event.eventable_type === EventType.COMPETITION) {
        const competition = event.eventable as Competition

        eventDisplay.push({
            title: "Informasi Kompetisi",
            data: [
                {
                    key: "Maks peserta",
                    value: competition.max_participants > 1 ? `${competition.max_participants} peserta` : 'Individual'
                }
            ]
        })
    }

    if (event.eventable_type === EventType.SEMINAR) {
        const seminar = event.eventable as Seminar

        const seminarCastDisplay: DataDisplayChild[] = seminar.seminar_casts.map((seminarCast) => {
            return {
                data: [
                    {
                        key: "Nama",
                        value: seminarCast.name
                    },
                    {
                        key: "Title",
                        value: seminarCast.title,
                    },
                    {
                        key: "Sebagai",
                        value: <Badge variant="filled"
                                      color={seminarCastRoleToColor(seminarCast.role) || 'gray'}>{seminarCastRoleToString(seminarCast.role)}</Badge>
                    },
                    {
                        key: "Gambar",
                        value: seminarCast.image,
                        link: seminarCast.image,
                        linkTarget: "_blank"
                    }
                ]
            }
        })

        eventDisplay.push({
            title: "Informasi Seminar",
            data: [
                {
                    key: "Tema seminar",
                    value: seminar.theme
                },
                {
                    key: "Pemeran",
                    value: <DescriptionChildList data={seminarCastDisplay}/>
                }
            ]
        })
    }

    const handleSeminarCastAdd = () => {
        modals.open({
            title: 'Tambah pemeran',
            centered: true,
            children: (
                <form onSubmit={seminarCastForm.onSubmit((values, _event) => {
                    _event.preventDefault()
                    seminarCastForm.validate();

                    // if (seminarCastForm.isValid()) {
                    //     router.post(route('events.store'), values)
                    // }
                })}>
                    <Stack>
                        <TextInput label="Nama" placeholder="Nama"
                                   withAsterisk {...seminarCastForm.getInputProps('name')}/>
                        <TextInput label="Title" placeholder="Title"
                                   withAsterisk {...seminarCastForm.getInputProps('title')}/>
                        <FileInput label="Foto" placeholder="Unggah foto"
                                   withAsterisk {...seminarCastForm.getInputProps('image')}/>
                        <Select label="Sebagai" placeholder="Pilih peranan"
                                withAsterisk {...seminarCastForm.getInputProps('role')} data={[
                            {value: String(SeminarCastRole.SPEAKER), label: "Speaker"},
                            {value: String(SeminarCastRole.MODERATOR), label: "Moderator"},
                        ]}/>
                        <Group position="right" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </Stack>
                </form>
            ),
        })
    }

    const handleMilestoneAdd = () => {

    }

    const handleContactPersonAdd = () => {

    }

    return (
        <FestivalLayout>
            <Head title="Events"/>

            <SectionHeader title="Detail Event" subTitle="Kelola kompetisi dan seminar"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        <Button size="xs" color="yellow" leftIcon={<IconPencil/>}>Edit</Button>
                        <Button size="xs" color="red" leftIcon={<IconTrash/>}>Hapus</Button>
                        <Menu shadow="md" width={200} position="bottom-end">
                            <Menu.Target>
                                <ActionIcon>
                                    <IconCategory/>
                                </ActionIcon>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Event</Menu.Label>
                                {
                                    event.eventable_type === EventType.SEMINAR &&
                                    <Menu.Item onClick={handleSeminarCastAdd} icon={<IconPlus size={14}/>}>Tambah
                                        pemeran</Menu.Item>
                                }
                                <Menu.Item onClick={handleMilestoneAdd} icon={<IconPlus size={14}/>}>Tambah
                                    milestone</Menu.Item>
                                <Menu.Item onClick={handleContactPersonAdd} icon={<IconPlus size={14}/>}>Tambah
                                    narahubung</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={event.name} data={eventDisplay}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
