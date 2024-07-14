import React from "react";
import { Head, usePage } from "@inertiajs/react";
import FestivalLayout from "@/Pages/Festival/Layout";
import { useFaq } from "@/hooks/useFaq";
import { PageProps } from "@/types";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {
    Alert,
    Box,
    Button,
    Group,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import { IconArrowBackUp } from "@tabler/icons-react";
import FormCard from "@/Components/molecules/form-card";
import FormGroup from "@/Components/molecules/form-group";

/**
 * interface
 */
interface Props extends PageProps {}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function FaqEditPage(props: Props): React.JSX.Element {
    const { auth, faq } = props;

    const { flash }: any = usePage().props;

    const { handleUpdate, form } = useFaq(faq);

    return (
        <FestivalLayout>
            <Head title="Faqs" />

            <SectionHeader title="Edit Faqs" subTitle="Kelola faqs" />

            <SectionContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                    }}
                >
                    <Button
                        variant="white"
                        size="xs"
                        onClick={() => history.back()}
                        leftIcon={<IconArrowBackUp />}
                    >
                        Kembali
                    </Button>
                    <Group spacing="4px">
                        {/*<Button size="xs" color="yellow" leftIcon={<IconPencil/>}>Edit</Button>*/}
                        {/*<Button size="xs" color="red" leftIcon={<IconTrash/>}>Hapus</Button>*/}
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <form onSubmit={(event) => handleUpdate(event, faq)}>
                        <FormCard title="Formulir Faq">
                            <FormGroup title="Informasi Faq">
                                <TextInput
                                    withAsterisk
                                    description="Harap untuk mengakhiri dengan tanda tanya (?)"
                                    placeholder="Pertanyaan"
                                    label="Pertanyaan"
                                    {...form.getInputProps("question")}
                                />
                                <Textarea
                                    withAsterisk
                                    placeholder="Jawaban"
                                    label="Jawaban"
                                    {...form.getInputProps("answer")}
                                />
                            </FormGroup>
                            <FormGroup title="Informasi Pembuat">
                                <TextInput
                                    withAsterisk
                                    disabled
                                    description="Nama pembuat tidak akan dipublikasikan ke website utama"
                                    label="Dibuat oleh"
                                    value={auth.user.name}
                                />
                            </FormGroup>
                            {flash.message_error && (
                                <Alert color="red">
                                    <Text color="red">
                                        {flash.message_error}
                                    </Text>
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
    );
}
