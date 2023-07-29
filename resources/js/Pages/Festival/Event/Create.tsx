import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, router} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {
    Box,
    Button,
    Card,
    FileInput,
    Group,
    Input,
    NumberInput,
    Select,
    Text,
    Textarea,
    TextInput
} from "@mantine/core";
import {IconArrowBackUp, IconPencil, IconTrash} from "@tabler/icons-react";
import FormCard from "@/Components/molecules/form-card";
import FormGroup from "@/Components/molecules/form-group";
import {useForm} from '@mantine/form';
import {DateInput} from "@mantine/dates";
import {EventType} from "@/enums/constants";
import {Competition, Event, Seminar, SeminarCast} from "@/types"


/**
 * interface
 */
interface Props {

}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function EventCreatePage(props: Props): React.JSX.Element {
    const {} = props

    const form = useForm({
        initialValues: {
            name: "",
            codename: "",
            description: "",
            image: "",
            is_opened: false,
            price: 0,
            held_in: "",
            held_on: new Date(),
            group_link: "",
            eventable_type: "",

            // For competition
            max_participants: 1,

            // For seminar
            theme: "",
        },
        validate: {
            name: (value) => !value.length ? 'Nama wajib diisi' : null,
            codename: (value) => !value.length ? 'Codename wajib diisi' : null,
            description: (value) => !value.length ? 'Deskripsi wajib diisi' : null,
            price: (value) => !value ? 'Harga harus lebih dari 0' : /.*\./.test(String(value)) ? "Harga mengandung titik" : null,
            group_link: (value) => !value.length ? 'Link grup wajib diisi' : /^(?:https?:\/\/)?(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[^\s]*)?$/.test(value) ? null : "Link harus berupa URL",
            eventable_type: (value) => !value.length ? 'Jenis event wejib diisi' : null,
        }
    })

    return (
        <FestivalLayout>
            <Head title="Events"/>

            <SectionHeader title="Buat Event" subTitle="Buat Event"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        {/*<Button size="xs" color="yellow" leftIcon={<IconPencil/>}>Edit</Button>*/}
                        {/*<Button size="xs" color="red" leftIcon={<IconTrash/>}>Hapus</Button>*/}
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <form onSubmit={form.onSubmit((values, _event) => {
                        _event.preventDefault()
                        form.validate();

                        if (form.isValid()) {
                            router.post(route('events.store'), values)
                        }
                    })}>
                        <FormCard title="Formulir Event">
                            <FormGroup title="Informasi Event">
                                <TextInput withAsterisk placeholder="Nama"
                                           label="Nama" {...form.getInputProps('name')}/>
                                <TextInput withAsterisk placeholder="Codename"
                                           label="Codename" {...form.getInputProps('codename')}/>
                                <Select withAsterisk label="Jenis"
                                        placeholder="Pilih jenis" {...form.getInputProps('eventable_type')}
                                        data={[
                                            {value: 'competition', label: "Kompetisi"},
                                            {value: 'seminar', label: "Seminar"},
                                        ]}/>
                                <Textarea withAsterisk placeholder="Deskripsi"
                                          label="Deskripsi" {...form.getInputProps('description')}/>
                                <FileInput placeholder="Unggah logo" label="Logo" {...form.getInputProps('image')} />
                                <Select withAsterisk label="Status pendaftaran"
                                        placeholder="Pilih status pendaftaran" {...form.getInputProps('is_opened')}
                                        data={[
                                            {value: '0', label: "Tutup"},
                                            {value: '1', label: "Buka"},
                                        ]}/>
                                <TextInput description="Masukkan tanpa titik" withAsterisk label="Biaya"
                                           icon="Rp" {...form.getInputProps('price')}/>
                                <TextInput placeholder="Diadakan di"
                                           label="Diadakan di" {...form.getInputProps('held_in')}/>
                                <DateInput placeholder="Diadakan pada"
                                           label="Diadakan pada" {...form.getInputProps('held_on')} />
                                <TextInput description="Masukkan URL link grup WhatsApp." withAsterisk
                                           placeholder="Link grup"
                                           label="Link grup" {...form.getInputProps('group_link')}/>
                            </FormGroup>
                            {form.values.eventable_type == EventType.COMPETITION &&
                                <FormGroup title="Informasi Kompetisi">
                                    <NumberInput withAsterisk description="Masukan angka 1 jika individual."
                                                 label="Maks peserta" {...form.getInputProps('max_participants')} />
                                </FormGroup>
                            }
                            {form.values.eventable_type == EventType.SEMINAR &&
                                <FormGroup title="Informasi Seminar">
                                    <TextInput label="Tema" {...form.getInputProps('theme')}/>
                                </FormGroup>
                            }
                            <Group position="right" mt="md">
                                <Button type="submit">Submit</Button>
                            </Group>
                        </FormCard>
                    </form>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
