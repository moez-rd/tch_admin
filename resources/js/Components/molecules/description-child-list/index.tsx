import React from "react";
import {Box, Card, Center, Divider, Grid, rem, Stack, Text, Title, useMantineTheme} from "@mantine/core";
import {Data, DataDisplay, DataDisplayChild} from "@/types/app";
import {Link} from "@inertiajs/react";
import {useStyles} from "@/Components/molecules/description-child-list/styles";

/**
 * interface
 */
interface Props {
    data: DataDisplayChild[]
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DescriptionChildList(props: Props): React.JSX.Element {
    const {data}: Props = props

    const {classes} = useStyles()

    return (
        <Stack spacing="xs">
            {data.map((itemGroup, i) => (
                <Card key={i} withBorder radius="xs">
                    <Stack spacing={4}>
                        {itemGroup.data.map((item, j) => (
                            <Stack key={j} spacing={4}>
                                {j > 0 && <Divider color="gray.2"/>}
                                <Stack spacing={0}>
                                    <Text weight={500} size="sm" color="gray.8">{item.key}</Text>
                                    {item.link ? (
                                        <Link href={item.link} className={classes.valueLink}>
                                            <Text size="sm" color="gray.7">{item.value || "-"}</Text>
                                        </Link>
                                    ) : (
                                        <Text size="sm" color="gray.7">{item.value || "-"}</Text>
                                    )}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Card>
            ))}
        </Stack>
    )
}
