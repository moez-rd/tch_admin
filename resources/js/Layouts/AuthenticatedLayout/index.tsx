import React, { useEffect } from "react";
import { AppShell, Box, Flex } from "@mantine/core";
import HeaderLayout from "@/Layouts/AuthenticatedLayout/Header";
import NavbarLayout from "@/Layouts/AuthenticatedLayout/Navbar";
import { Link } from "@/types/app";
import FooterLayout from "@/Layouts/AuthenticatedLayout/Footer";
import { usePage } from "@inertiajs/react";
import { Festival, User } from "@/types";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconInfoCircle, IconX } from "@tabler/icons-react";

/**
 * interface
 */
interface Props {
    children: React.ReactNode;
    sidebarLinks?: Link[];
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function AuthenticatedLayout(props: Props): React.JSX.Element {
    const { children, sidebarLinks }: Props = props;

    const { flash }: any = usePage().props;

    useEffect(() => {
        if (flash.notification_info) {
            notifications.show({
                title: "Info",
                message: flash.notification_info,
                color: "blue",
                icon: <IconInfoCircle size="1.1rem" />,
            });
        }

        if (flash.notification_success) {
            notifications.show({
                title: "Berhasil",
                message: flash.notification_success,
                color: "green",
                icon: <IconCheck size="1.1rem" />,
            });
        }

        if (flash.notification_error) {
            notifications.show({
                title: "Eror",
                message: flash.notification_error,
                color: "red",
                icon: <IconX size="1.1rem" />,
            });
        }
    }, [
        flash.notification_info,
        flash.notification_success,
        flash.notification_error,
    ]);

    const { auth }: any = usePage().props;
    const user: User = auth.user;
    const festivals: Festival[] = auth.festivals;

    return (
        <Box>
            <HeaderLayout user={user} festivals={festivals} />
            <Flex>
                {sidebarLinks && <NavbarLayout data={sidebarLinks} />}
                <Box sx={{ flexGrow: 1 }}>
                    <Box component="main" mih="100vh" p="lg">
                        {children}
                    </Box>
                    <FooterLayout />
                </Box>
            </Flex>
        </Box>
    );
}
