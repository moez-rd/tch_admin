import React, {useEffect} from "react";
import {
    AppShell, Box, Flex,
} from "@mantine/core";
import HeaderLayout from "@/Layouts/AuthenticatedLayout/Header";
import NavbarLayout from "@/Layouts/AuthenticatedLayout/Navbar";
import {Link} from "@/types/app";
import FooterLayout from "@/Layouts/AuthenticatedLayout/Footer";
import {usePage} from "@inertiajs/react";
import {User} from "@/types";
import {notifications} from "@mantine/notifications";
import {IconCheck, IconInfoCircle, IconX} from "@tabler/icons-react";

/**
 * interface
 */
interface Props {
    children: React.ReactNode
    sidebarLinks?: Link[]
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function AuthenticatedLayout(props: Props): React.JSX.Element {
    const {children, sidebarLinks}: Props = props

    const {flash}: any = usePage().props;

    useEffect(() => {
        if (flash.info) {
            notifications.show({
                title: "Info",
                message: flash.info,
                color: "blue",
                icon: <IconInfoCircle size="1.1rem"/>
            })
        }

        if (flash.success) {
            notifications.show({
                title: "Berhasil",
                message: flash.success,
                color: "green",
                icon: <IconCheck size="1.1rem"/>
            })
        }

        if (flash.error) {
            notifications.show({
                title: "Eror",
                message: flash.error,
                color: "red",
                icon: <IconX size="1.1rem"/>
            })
        }
    }, [flash.info, flash.success, flash.error]);

    const {auth}: any = usePage().props;
    const user: User = auth.user;

    return (
        <Box>
            <HeaderLayout user={user}/>
            <Flex>
                {sidebarLinks && <NavbarLayout data={sidebarLinks}/>}
                <Box sx={{flexGrow: 1}}>
                    <Box component="main" mih="100vh" p="lg">
                        {children}
                    </Box>
                    <FooterLayout/>
                </Box>
            </Flex>
        </Box>
    )
}
