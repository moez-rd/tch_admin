import React from "react";
import {Box, Card, Center, rem, Text, Title, useMantineTheme} from "@mantine/core";
import {Data} from "@/types/app";
import DataListItem from "@/Components/molecules/data-list-item";
import {data} from "autoprefixer";
import {IconMoodEmpty} from "@tabler/icons-react";

/**
 * interface
 */
interface Props {
    title: string
    data: Data[]
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DataList(props: Props): React.JSX.Element {
    const {data, title}: Props = props

    const theme = useMantineTheme();

    return (
        <Card withBorder radius="md">
            <Card.Section inheritPadding py="xs" sx={(theme) => ({backgroundColor: theme.colors.gray[1]})}>
                <Title order={2} weight={600} color="gray.8" size="larger">{title}</Title>
            </Card.Section>
            <Card.Section inheritPadding>
                {data.map((item, key) => (
                    <DataListItem key={item.id} data={item} withBorder={data.length == 1 || key !== (data.length - 1)}/>
                ))}

                {data.length === 0 && (
                    <Card.Section withBorder inheritPadding py="xs">
                        <Center h="6rem" sx={{display: "flex", flexDirection: "column"}}>
                            <IconMoodEmpty color={theme.colors.gray[5]} size="2rem" stroke={1.6}/>
                            <Text color="gray.5">Data tidak ada</Text>
                        </Center>
                    </Card.Section>
                )}
            </Card.Section>
        </Card>
    )
}
