import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, router, usePage} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {
    Alert,
    Box,
    Button,
    FileInput,
    Group,
    NumberInput,
    Select, Text,
    Textarea,
    TextInput
} from "@mantine/core";
import {IconArrowBackUp, IconUpload} from "@tabler/icons-react";
import FormCard from "@/Components/molecules/form-card";
import FormGroup from "@/Components/molecules/form-group";
import {DateInput} from "@mantine/dates";
import {EventType} from "@/enums/constants";
import {useEvent} from "@/hooks/useEvent";


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

    const {flash}: any = usePage().props;

    const {form, handleCreate} = useEvent()

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
                    <form onSubmit={(e) => handleCreate(e)}>
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
                                <FileInput icon={<IconUpload size={16}/>} placeholder="Unggah logo"
                                           label="Logo" {...form.getInputProps('image')} />
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
                                    <TextInput withAsterisk description="Masukan url form pengumpulan submission."
                                               label="URL submission" {...form.getInputProps('submission')} />
                                </FormGroup>
                            }
                            {form.values.eventable_type == EventType.SEMINAR &&
                                <FormGroup title="Informasi Seminar">
                                    <TextInput label="Tema" {...form.getInputProps('theme')}/>
                                </FormGroup>
                            }

                            {flash.message_error && (
                                <Alert color="red">
                                    <Text color="red">{flash.message_error}</Text>
                                </Alert>
                            )}

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
