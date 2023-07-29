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
export default function FormGroup(props: Props): React.JSX.Element {
    const {title, children}: Props = props


    return (
        <Card.Section inheritPadding py="sm">
            <Title order={3} color="gray.8" size="medium">{title}</Title>
            <Stack mt="1rem">
                {children}
            </Stack>
        </Card.Section>

    )
}
