import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head, router} from "@inertiajs/react";
import {Competition, Event, PageProps, Seminar, User} from "@/types";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import {Group, Tabs, Text} from "@mantine/core";
import DataList from "@/Components/molecules/data-list";
import {Data} from "@/types/app";
import {createDataList} from "@/lib/utils";
import {modals} from "@mantine/modals";
import {notifications} from "@mantine/notifications";
import {useParticipant} from "@/hooks/useParticipant";
import { useManager } from "@/hooks/useManager";

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
export default function ManagerIndexPage(props: Props): React.JSX.Element {
    const {auth, managers} = props

    const {getManagers} = useManager()

    return (
        <FestivalLayout>
            <Head title="Manajer"/>

            <SectionHeader title="Manajer" subTitle="Kelola manajer"/>

            <SectionContent>
                <DataList title="Data Manajer" data={getManagers(managers)}/>
            </SectionContent>
        </FestivalLayout>
    )
}
