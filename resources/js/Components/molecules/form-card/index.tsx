import React from "react";
import {Box, Card, Center, Divider, Grid, rem, Stack, Text, Title, useMantineTheme} from "@mantine/core";
import {Data, DataDisplay} from "@/types/app";
import {Link} from "@inertiajs/react";
import {useStyles} from "@/Components/molecules/description-list/styles";

/**
 * interface
 */
interface Props {
    title: string
    children: React.ReactNode
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function FormCard(props: Props): React.JSX.Element {
    const {title, children}: Props = props


    return (
        <Card withBorder radius="md">
            <Card.Section inheritPadding py="xs" sx={(theme) => ({backgroundColor: theme.colors.gray[1]})}>
                <Title order={2} weight={600} color="gray.8" size="larger">{title}</Title>
            </Card.Section>
            <Stack spacing="lg">
                {children}
            </Stack>
        </Card>
    )
}
