import React from "react";
import {
    Anchor,
    Box, Button,
    Card,
    Center, Checkbox,
    Container,
    Flex, Group,
    Image,
    Paper,
    PasswordInput, Stack,
    Text,
    TextInput,
    Title
} from "@mantine/core";
import {Link} from "@inertiajs/react";

/**
 * interface
 */
interface Props {
    children: React.ReactNode
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function GuestLayout(props: Props): React.JSX.Element {
    const {children}: Props = props

    return (
        <Center mih="100vh">
            <Container size={420} my={40} w="100%">
                <Stack align="center">
                    <Image src="/logo.png" maw={80}/>
                    <Title
                        align="center"
                        sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
                    >
                        Technofest Admin
                    </Title>
                </Stack>


                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    {children}
                </Paper>
            </Container>
        </Center>
    )
}
