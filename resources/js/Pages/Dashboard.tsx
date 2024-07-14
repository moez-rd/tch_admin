import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Flex, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import SectionHeader from "@/Components/molecules/section-header";
import {
    IconCoin,
    IconDiscount2,
    IconReceipt2,
    IconUserPlus,
} from "@tabler/icons-react";
import classes from "./Dashboard.module.css";

/**
 * interface
 */
interface Props {
    participant_count: number;
    not_confirmed_payment_count: number;
    competition_registration_count: number;
    online_seminar_registration_count: number;
    offline_seminar_registration_count: number;
}

const icons = {
    user: IconUserPlus,
    discount: IconDiscount2,
    receipt: IconReceipt2,
    coin: IconCoin,
};

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DashboardPage(props: Props): React.JSX.Element {
    const {
        participant_count,
        not_confirmed_payment_count,
        competition_registration_count,
        online_seminar_registration_count,
        offline_seminar_registration_count,
    }: Props = props;

    const data = [
        {
            title: "Partisipan",
            icon: "receipt",
            value: participant_count,
        },
        {
            title: "Pembayaran yang belum dikonfirmasi",
            icon: "coin",
            value: not_confirmed_payment_count,
        },
        {
            title: "Pendaftar Kompetisi",
            icon: "receipt",
            value: competition_registration_count,
        },
        {
            title: "Pendaftar Seminar (Offline)",
            icon: "coin",
            value: offline_seminar_registration_count,
        },
        {
            title: "Pendaftar Seminar (Online)",
            icon: "receipt",
            value: online_seminar_registration_count,
        },
    ] as const;

    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];

        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <Flex justify="space-between">
                    <Text size="xs" c="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
                </Flex>

                <Group align="flex-end" mt={25}>
                    <Text className={classes.value}>{stat.value}</Text>
                </Group>
            </Paper>
        );
    });
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <SectionHeader title="Dashboard" subTitle="" />
            <SimpleGrid cols={5}>{stats}</SimpleGrid>
        </AuthenticatedLayout>
    );
}
