import React, {useState} from "react";
import {
    Avatar, Badge,
    Box,
    Burger,
    Container, Divider,
    Group, Header,
    Image, Menu,
    Paper, rem, Text,
    Transition, UnstyledButton
} from "@mantine/core";
import {HEADER_HEIGHT, useStyles} from "@/Layouts/AuthenticatedLayout/Header/styles";
import {useDisclosure} from "@mantine/hooks";
import {links, user} from "@/Layouts/AuthenticatedLayout/Header/data";
import UserMenu from "@/Layouts/AuthenticatedLayout/Header/UserMenu";
import FestivalSelect from "@/Layouts/AuthenticatedLayout/Header/FestivalSelect";
import {Link, router, usePage} from "@inertiajs/react";
import {User} from "@/types";
import {activeFestival} from "@/lib/utils";
import {IconAssembly} from "@tabler/icons-react";

/**
 * interface
 */
interface Props {
    user: User
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function HeaderLayout(props: Props): React.JSX.Element {
    const {user}: Props = props

    const {url} = usePage()

    const [opened, {toggle, close}] = useDisclosure(false);
    const {classes, theme, cx} = useStyles();

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={cx(classes.link, {[classes.linkActive]: url.startsWith(link.basePath)})}
        >
            {link.label}
        </Link>
    ));

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Box className={classes.header}>
                <Group spacing="md">
                    <Link href={route('dashboard')} style={{textDecoration: "none"}}>
                        <Group align="center" spacing="xs">
                            <Image src="/logo.png" maw={28}/>
                            <Text color="gray.9" weight={600} mb={-5}>Technofest Admin</Text>
                        </Group>
                    </Link>
                    <Divider orientation="vertical"/>
                    <FestivalSelect/>
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                </Group>
                <Group align="center">
                    <Badge color="green" variant="dot">Periode {activeFestival().period}</Badge>
                    <UserMenu user={user}/>
                </Group>


                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Box>
        </Header>
    )
}
