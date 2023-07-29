import React, {useState} from "react";
import {
    AppShell, Box, Navbar,
} from "@mantine/core";
import HeaderLayout from "@/Layouts/AuthenticatedLayout/Header";
import {useStyles} from "@/Layouts/AuthenticatedLayout/Navbar/styles";
import {Link} from "@/types/app";
import {usePage, Link as LinkReact} from "@inertiajs/react";

/**
 * interface
 */
interface Props {
    data: Link[]
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function NavbarLayout(props: Props): React.JSX.Element {
    const {data}: Props = props

    const {url} = usePage()

    const {classes, cx} = useStyles();

    const links = data.map((item) => (
        <LinkReact
            className={cx(classes.link, {[classes.linkActive]: url.startsWith(item.basePath)})}
            href={item.link}
            key={item.label}
        >
            <span>{item.label}</span>
        </LinkReact>
    ));

    return (
        <Box h="100vh" w={{sm: 300}} p="lg" pt="30px" pl="30px" sx={(theme) => ({position: "sticky", top: "0", borderRight: `1px solid ${theme.colors.gray[2]}`})}>
            <Navbar.Section grow>
                {links}
            </Navbar.Section>
        </Box>
    )
}
