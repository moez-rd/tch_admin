import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";
import { PageProps, User } from "@/types";
import {
    Card,
    Image,
    Text,
    Badge,
    Button,
    Group,
    Box,
    Menu,
    UnstyledButton,
    Flex,
} from "@mantine/core";
import { IconDots, IconPlus } from "@tabler/icons-react";
import { useFestival } from "@/hooks/useFestival";

/**
 * interface
 */
interface Props extends PageProps {}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function FestivalIndexPage(props: Props): React.JSX.Element {
    const { festivals } = props;

    const { auth }: any = usePage().props;
    const user: User = auth.user;

    const { handleDelete, handleActivate } = useFestival();
    return (
        <FestivalLayout>
            <Head title="Festival" />

            <SectionHeader title="Festival" subTitle="Kelola festival" />
            <SectionContent>
                <Flex justify="flex-end" mb="10px">
                    <Button
                        component={Link}
                        size="xs"
                        color="green"
                        leftIcon={<IconPlus />}
                        href={route("festivals.create")}
                    >
                        Tambah
                    </Button>
                </Flex>

                <Flex direction="column" gap={"xs"}>
                    {festivals.map((festival) => (
                        <Card
                            key={festival.id}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                        >
                            <Card.Section></Card.Section>

                            <Flex mt="md" mb="xs" justify="space-between">
                                <Group>
                                    <Text fw={500}>{festival.name}</Text>
                                    {festival.is_active && (
                                        <Badge color="teal">Aktif</Badge>
                                    )}
                                </Group>

                                <Box sx={{ alignSelf: "start" }}>
                                    <Menu
                                        shadow="md"
                                        width={200}
                                        withinPortal
                                        position="bottom-end"
                                        offset={-10}
                                    >
                                        <Menu.Target>
                                            <UnstyledButton>
                                                <IconDots />
                                            </UnstyledButton>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Label>Actions</Menu.Label>
                                            <Menu.Item
                                                onClick={() =>
                                                    handleActivate(festival)
                                                }
                                            >
                                                Aktivasi
                                            </Menu.Item>
                                            <Menu.Item
                                                color="red"
                                                onClick={(e) =>
                                                    handleDelete(e, festival)
                                                }
                                            >
                                                Hapus
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                </Box>
                            </Flex>

                            <Text size="sm" c="dimmed">
                                {festival.theme}
                            </Text>

                            <Text size="sm" c="dimmed">
                                Periode: {festival.period}
                            </Text>
                        </Card>
                    ))}
                </Flex>
            </SectionContent>
        </FestivalLayout>
    );
}
