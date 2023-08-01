import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, router} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import DataList from "@/Components/molecules/data-list";
import {Faq, PageProps} from "@/types";
import {createDataList} from "@/lib/utils";
import {Data} from "@/types/app";
import {IconArrowBackUp, IconPencil, IconPlus, IconTrash} from "@tabler/icons-react";
import {Box, Button, Group, Text, Textarea, TextInput} from "@mantine/core";
import FormCard from "@/Components/molecules/form-card";
import FormGroup from "@/Components/molecules/form-group";
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
export default function FaqIndexPage(props: Props): React.JSX.Element {
    const {auth} = props

    const form = useForm({
        initialValues: {
            question: "",
            answer: ""
        },
        validate: {
            question: (value) => !value.length ? 'Pertanyaan wajib diisi' : /^(?:(?!\?).)*$/.test(value) ? "Pertanyaan harus diakhiri dengan tanda tanya (?)" : null,
            answer: (value) => !value.length ? 'Jawaban wajib diisi' : null,
        }
    })

    return (
        <FestivalLayout>
            <Head title="Faqs"/>

            <SectionHeader title="Faqs" subTitle="Kelola faqs"/>

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
                            router.post(route('faqs.store'), values)
                        }
                    })}>
                        <FormCard title="Formulir Faq">
                            <FormGroup title="Informasi Faq">
                                <TextInput withAsterisk description="Harap untuk mengakhiri dengan tanda tanya (?)"
                                           placeholder="Pertanyaan"
                                           label="Pertanyaan" {...form.getInputProps('question')}/>
                                <Textarea withAsterisk placeholder="Jawaban"
                                          label="Jawaban" {...form.getInputProps('answer')}/>
                            </FormGroup>
                            <FormGroup title="Informasi Pembuat">
                                <TextInput withAsterisk disabled
                                           description="Nama pembuat tidak akan dipublikasikan ke website utama"
                                           label="Dibuat oleh" value={auth.user.name}/>
                            </FormGroup>
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
