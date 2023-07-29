import React from "react";
import {
    ActionIcon,
    AppShell, Box, Container, Divider, Group, Image, Text,
} from "@mantine/core";
import HeaderLayout from "@/Layouts/AuthenticatedLayout/Header";
import NavbarLayout from "@/Layouts/AuthenticatedLayout/Navbar";
import {Link} from "@/types/app";
import {useStyles} from "@/Layouts/AuthenticatedLayout/Footer/styles";
import {IconBrandInstagram, IconBrandTwitter, IconBrandYoutube} from "@tabler/icons-react";

/**
 * interface
 */
interface Props {

}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function FooterLayout(props: Props): React.JSX.Element {
    const {}: Props = props

    const {classes} = useStyles();

    return (
        <div className={classes.footer}>
            <Box className={classes.inner}>
                <Group align="center">
                    <Image src="/logo.png" maw={28}/>
                    <Text weight={600}>Technofest Admin</Text>
                    <Divider orientation="vertical" />
                    <Text size="xs" color="dark.1">Created by Infokom Himasisko</Text>
                </Group>
            </Box>
        </div>
    )
}
