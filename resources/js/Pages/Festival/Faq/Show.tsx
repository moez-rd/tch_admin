import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Box, Button, Group} from "@mantine/core";
import {IconArrowBackUp, IconPencil, IconPlus, IconTrash} from "@tabler/icons-react";
import {DataDisplay} from "@/types/app";
import {formatDate} from "@/lib/utils";
import DescriptionList from "../../../Components/molecules/description-list";

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
export default function FaqShowPage(props: Props): React.JSX.Element {
    const {auth, faq} = props

    const faqDisplay: DataDisplay[] = [
        {
            'title': "Informasi Faqs",
            'data': [
                {
                    "key": "Pertanyaan",
                    "value": faq.question
                },
                {
                    "key": "Jawaban",
                    "value": faq.answer
                },
                {
                    "key": "Dibuat oleh",
                    "value": faq.user?.name!
                },
                {
                    "key": "Dibuat pada",
                    "value": formatDate(faq.created_at, "datetime")
                }
            ]
        }
    ]

    return (
        <FestivalLayout>
            <Head title="Faqs"/>

            <SectionHeader title="Detail Faqs" subTitle="Kelola faqs"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        <Button size="xs" color="yellow" leftIcon={<IconPencil/>}>Edit</Button>
                        <Button size="xs" color="red" leftIcon={<IconTrash/>}>Hapus</Button>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={faq.question} data={faqDisplay}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
