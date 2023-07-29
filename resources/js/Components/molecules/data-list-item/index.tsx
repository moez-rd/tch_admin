import React from "react";
import {Avatar, Badge, Box, Button, Card, Flex, Group, Menu, Text, Title, UnstyledButton} from "@mantine/core";
import {Data} from "@/types/app";
import {IconDots, IconPencil, IconPointFilled, IconTrash} from "@tabler/icons-react";
import {Link} from "@inertiajs/react";
import {it} from "node:test";
import {useStyles} from "@/Components/molecules/data-list-item/styles";
import {getFirstLetters} from "@/lib/utils";

/**
 * interface
 */
interface Props {
    data: Data
    withBorder: boolean
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DataListItem(props: Props): React.JSX.Element {
    const {data, withBorder}: Props = props

    const {classes} = useStyles()

    return (
        <Card.Section withBorder={withBorder} inheritPadding py="xs">
            <Flex align="center">
                {data.avatar && (
                    <Box mr={10}>
                        <Avatar src={data.avatar}
                                radius="xl"
                                color="blue"
                                sx={(theme) => ({backgroundColor: theme.colors.gray[2]})}>
                            {getFirstLetters(data.title).toUpperCase()}
                        </Avatar>
                    </Box>
                )}
                <Flex direction="column" align="start" sx={{flexGrow: 1}}>
                    {data.link ? (
                        <Link href={data.link} className={classes.titleLink}>
                            <Title order={3}  weight={600} color="gray.8" size="medium">{data.title}</Title>
                        </Link>
                    ) : (
                        <Title order={3}  weight={600} color="gray.8" size="medium">{data.title}</Title>

                    )
                    }

                    <Group spacing="1">
                        {data.information && data.information.filter((info) => info).map((info, key) => (
                            <Group key={key} spacing="1">
                                {key > 0 && <IconPointFilled size={14} style={{color: "#CED4DA"}}/>}
                                <Text size="xs" color="gray.6">{info}</Text>
                            </Group>
                        ))}
                    </Group>

                    <Group>
                        {data.badges && data.badges.map((badge, key) => (
                            <Badge
                                key={key}
                                variant={badge.variant || "filled"}
                                size={badge.size || "xs"}
                                {...badge}
                            >{badge.name}</Badge>
                        ))}
                    </Group>
                </Flex>

                {data.menu &&
                    <Box sx={{alignSelf: "start"}}>
                        <Menu shadow="md" width={200} withinPortal position="bottom-end" offset={-10}>
                            <Menu.Target>
                                <UnstyledButton><IconDots/></UnstyledButton>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Actions</Menu.Label>
                                {data.menu.map((item, key) => (
                                    <Link key={key} style={{textDecoration: "none"}} {...item.linkProps}>
                                        <Menu.Item {...item.props}>{item.label}</Menu.Item>
                                    </Link>
                                ))}
                            </Menu.Dropdown>
                        </Menu>
                    </Box>
                }
            </Flex>
        </Card.Section>
    )
}
