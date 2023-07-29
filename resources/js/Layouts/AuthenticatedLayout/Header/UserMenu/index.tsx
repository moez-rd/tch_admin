import React, {useState} from "react";
import {
    Avatar,
    Group,
    Menu,
    rem, Text,
    UnstyledButton
} from "@mantine/core";
import {useStyles} from "./styles";
import {user} from "@/Layouts/AuthenticatedLayout/Header/data";
import {
    IconChevronDown,
    IconHeart, IconLogout,
    IconMessage, IconPlayerPause,
    IconSettings,
    IconStar,
    IconSwitchHorizontal, IconTrash
} from "@tabler/icons-react";
import {User} from "@/types";
import {getFirstLetters} from "@/lib/utils";
import {Link} from "@inertiajs/react";

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
export default function UserMenu(props: Props): React.JSX.Element {
    const {user}: Props = props

    const {classes, theme, cx} = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);


    return (
        <Menu
            width={260}
            position="bottom-end"
            transitionProps={{transition: 'pop-top-right'}}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton
                    className={cx(classes.user, {[classes.userActive]: userMenuOpened})}
                >
                    <Group spacing={7} align="center">
                        <Avatar src={user.avatar} alt={user.name} radius="xl" size={20}
                                color="blue"
                                sx={(theme) => ({backgroundColor: theme.colors.gray[2]})}>
                            {getFirstLetters(user.name).toUpperCase()}
                        </Avatar>
                        <Text weight={500} size="sm" sx={{lineHeight: 1}} mr={3}>
                            {user.name}
                        </Text>
                        <IconChevronDown size={rem(12)} stroke={1.5}/>
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5}/>}>
                    Pengaturan akun
                </Menu.Item>
                <Link href={route("logout")} method="post" style={{textDecoration: "none"}}>
                    <Menu.Item color="red" icon={<IconLogout size="0.9rem" stroke={1.5}/>}>
                        Logout
                    </Menu.Item>
                </Link>
            </Menu.Dropdown>
        </Menu>

    )
}
