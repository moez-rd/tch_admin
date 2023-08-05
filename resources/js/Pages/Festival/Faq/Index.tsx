import React, {useEffect} from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, Link, router, usePage} from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import DataList from "@/Components/molecules/data-list";
import {Faq, PageProps} from "@/types";
import {createDataList} from "@/lib/utils";
import {Data} from "@/types/app";
import {IconPlus} from "@tabler/icons-react";
import {Box, Button, Text} from "@mantine/core";
import {modals} from "@mantine/modals";
import {notifications} from "@mantine/notifications";
import {useFaq} from "@/hooks/useFaq";

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
    const {auth, faqs} = props

    const {getFaqs} = useFaq()

    return (
        <FestivalLayout>
            <Head title="Faqs"/>

            <SectionHeader title="Faqs" subTitle="Kelola faqs"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Box>

                    </Box>
                    <Button component={Link} href={route('faqs.create')} size="xs" color="green"
                            leftIcon={<IconPlus/>}>Tambah</Button>
                </Box>
                <Box pt="0.625rem">
                    <DataList title="Data Faqs" data={getFaqs(faqs)}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
