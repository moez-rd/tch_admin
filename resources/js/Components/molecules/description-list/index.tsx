import React from "react";
import {Box, Button, Card, Center, Divider, Flex, Grid, rem, Stack, Text, Title, useMantineTheme} from "@mantine/core";
import {Data, DataDisplay} from "@/types/app";
import {Link} from "@inertiajs/react";
import {useStyles} from "@/Components/molecules/description-list/styles";

/**
 * interface
 */
interface Props {
    title: string
    data: DataDisplay[]
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DescriptionList(props: Props): React.JSX.Element {
    const {data, title}: Props = props

    const {classes} = useStyles()

    return (
        <Card withBorder radius="md">
            <Card.Section inheritPadding py="xs" sx={(theme) => ({backgroundColor: theme.colors.gray[1]})}>
                <Title order={2} weight={600} color="gray.8" size="larger">{title}</Title>
            </Card.Section>
            <Stack spacing="lg">
                {data.map((itemGroup, i) => (
                    <Card.Section key={i} inheritPadding py="sm">
                        <Title order={3} color="gray.8" size="medium">{itemGroup.title}</Title>
                        <Stack mt="1rem">
                            {itemGroup.data.map((item, j) => (
                                <Stack key={item.key}>
                                    <Divider color="gray.2"/>
                                    <Grid columns={3}>
                                        <Grid.Col span={1}>
                                            <Text weight={500} size="sm" color="gray.8">{item.key}</Text>
                                        </Grid.Col>
                                        <Grid.Col span={2}>
                                            {item.link ? (
                                                <Link href={item.link} className={classes.valueLink}>
                                                    <Text size="sm" color="gray.7">{item.value || "-"}</Text>
                                                </Link>
                                            ) : (
                                                <Text size="sm" color="gray.7">{item.value || "-"}</Text>

                                            )}
                                        </Grid.Col>
                                    </Grid>
                                </Stack>
                            ))}
                        </Stack>
                    </Card.Section>
                ))}
            </Stack>
        </Card>
    )
}
