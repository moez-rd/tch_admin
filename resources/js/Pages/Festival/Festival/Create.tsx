import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import { Head, usePage } from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {
    Alert,
    Box,
    Button,
    FileInput,
    Group,
    NumberInput,
    Select,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import { IconArrowBackUp, IconUpload } from "@tabler/icons-react";
import FormCard from "@/Components/molecules/form-card";
import FormGroup from "@/Components/molecules/form-group";
import { DateInput, YearPickerInput } from "@mantine/dates";
import { EventType } from "@/enums/constants";
import { useEvent } from "@/hooks/useEvent";
import { useFestival } from "@/hooks/useFestival";

/**
 * interface
 */
interface Props {}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function FestivalCreatePage(props: Props): React.JSX.Element {
    const {} = props;

    const { flash }: any = usePage().props;

    const { form, handleCreate } = useFestival();

    return (
        <FestivalLayout>
            <Head title="Events" />

            <SectionHeader title="Buat Festival" subTitle="Buat Festival" />

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
                </Box>
                <Box pt="0.625rem">
                    <form onSubmit={(e) => handleCreate(e)}>
                        <FormCard title="Formulir Festival">
                            <FormGroup title="Informasi Festival">
                                <TextInput
                                    withAsterisk
                                    placeholder="Nama"
                                    label="Nama"
                                    {...form.getInputProps("name")}
                                />
                                <YearPickerInput
                                    withAsterisk
                                    label="Periode"
                                    placeholder="Pilih periode"
                                    {...form.getInputProps("period")}
                                />
                                <TextInput
                                    withAsterisk
                                    placeholder="Tema"
                                    label="Tema"
                                    {...form.getInputProps("theme")}
                                />
                                <FileInput
                                    icon={<IconUpload size={16} />}
                                    placeholder="Unggah logo"
                                    label="Logo"
                                    {...form.getInputProps("logo")}
                                />
                                <Textarea
                                    withAsterisk
                                    placeholder="Deskripsi"
                                    label="Deskripsi"
                                    {...form.getInputProps("description")}
                                />

                                <DateInput
                                    withAsterisk
                                    placeholder="Mulai pada"
                                    label="Mulai pada"
                                    {...form.getInputProps("start_date")}
                                />

                                <DateInput
                                    withAsterisk
                                    placeholder="Berakhir pada"
                                    label="Berakhir pada"
                                    {...form.getInputProps("end_date")}
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
