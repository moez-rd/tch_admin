import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import { Box, Button, Group } from "@mantine/core";
import {
    IconArrowBackUp,
    IconPencil,
    IconPlus,
    IconTrash,
} from "@tabler/icons-react";
import { DataDisplay } from "@/types/app";
import { formatDate } from "@/lib/utils";
import DescriptionList from "../../../Components/molecules/description-list";
import { useFaq } from "@/hooks/useFaq";

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
export default function FaqShowPage(props: Props): React.JSX.Element {
    const { auth, faq } = props;

    const { displayFaq, handleDelete } = useFaq();

    return (
        <FestivalLayout>
            <Head title="Faqs" />

            <SectionHeader title="Detail Faqs" subTitle="Kelola faqs" />

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
                        <Button
                            component={Link}
                            href={route("faqs.edit", { faq: faq.id })}
                            size="xs"
                            color="yellow"
                            leftIcon={<IconPencil />}
                        >
                            Edit
                        </Button>

                        <Button
                            onClick={(e) => handleDelete(e, faq)}
                            size="xs"
                            color="red"
                            leftIcon={<IconTrash />}
                        >
                            Hapus
                        </Button>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList
                        title={faq.question}
                        data={displayFaq(faq)}
                    />
                </Box>
            </SectionContent>
        </FestivalLayout>
    );
}
