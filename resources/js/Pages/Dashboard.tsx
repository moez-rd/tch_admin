import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {Text, Title} from "@mantine/core";
import SectionHeader from "@/Components/molecules/section-header";
import {PageProps} from "@/types";

/**
 * interface
 */
interface Props{
    seminar_registration_online_count: number
    seminar_registration_offline_count: number
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DashboardPage(props: Props): React.JSX.Element {
    const {seminar_registration_online_count, seminar_registration_offline_count}: Props = props

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>

            <SectionHeader title="Dashboard" subTitle=""/>

            <div>
                <Title order={2}>Pendaftar Seminar (Offline)</Title>
                <Text size="40pt">{seminar_registration_online_count}</Text>
            </div>

            <div>
                <Title order={2}>Pendaftar Seminar (Online)</Title>
                <Text size="40pt">{seminar_registration_offline_count}</Text>
            </div>
        </AuthenticatedLayout>
    )
}
