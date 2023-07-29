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

    const faqData = faqs.map((faq) => {
        return {
            id: faq.id,
            title: faq.question,
            link: route('faqs.show', {id: faq.id}),
            information: [
                `Dibuat oleh: ${faq.user?.name}`
            ],
            menu: [
                {
                    label: "Edit",
                    linkProps: {
                        href: route('faqs.edit', {id: faq.id})
                    }
                },
                {
                    label: "Hapus",
                    props: {
                        color: "red"
                    },
                    linkProps: {
                        href: "",
                        onClick: () => handleDelete(faq)
                    }
                }
            ]
        }
    }) as Data[]

    const handleDelete = (faq: Faq) => {
        modals.openConfirmModal({
            title: 'Hapus Faq',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus faq <Text span weight={600}>{faq.question}</Text>?
                </Text>
            ),
            labels: {confirm: 'Hapus', cancel: "Batal"},
            confirmProps: {color: 'red'},
            onConfirm: () => {
                router.delete(route('faqs.destroy', {id: faq.id}))
            }
        })
    }

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
                    <DataList title="Data Faqs" data={faqData}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
