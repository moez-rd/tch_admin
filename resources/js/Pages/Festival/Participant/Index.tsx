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
export default function ParticipantIndexPage(props: Props): React.JSX.Element {
    const {auth, participants} = props

    const {getParticipants} = useParticipant()

    return (
        <FestivalLayout>
            <Head title="Partisipan"/>

            <SectionHeader title="Partisipan" subTitle="Kelola partisipan"/>

            <SectionContent>
                <DataList title="Data Partisipan" data={getParticipants(participants)}/>
            </SectionContent>
        </FestivalLayout>
    )
}
