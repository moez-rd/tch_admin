import React from "react";
import {Box, Divider, Space, Text, Title} from "@mantine/core";

/**
 * interface
 */
interface Props {
    title: string
    subTitle?: string
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function SectionHeader(props: Props): React.JSX.Element {
    const {title, subTitle}: Props = props

    return (
        <Box maw="40rem" mb={40}>
            <Title color="gray.8" weight={600} order={1} pb={1} size="x-large">{title}</Title>
            <Text color="gray.5">{subTitle}</Text>
            <Space h="md"/>
            <Divider color="gray.2"/>
        </Box>
    )
}
