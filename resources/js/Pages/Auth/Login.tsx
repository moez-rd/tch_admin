import React, {FormEventHandler, useEffect} from "react";
import {Head, Link, useForm} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import {Anchor, Box, Button, Checkbox, Group, Input, PasswordInput, Text, TextInput} from "@mantine/core";

/**
 * interface
 */
interface Props {
    status?: string;
    canResetPassword: boolean;
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function LoginPage(props: Props): React.JSX.Element {
    const {status, canResetPassword}: Props = props

    const {data, setData, post, processing, errors, reset} = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Login"/>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    label="Email"
                    placeholder="you@mantine.dev"
                    required
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}

                />

                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />

                <Group position="apart" mt="lg">
                    <Checkbox
                        label="Remember me"
                        checked={data.remember}
                        onChange={(e) =>
                            setData("remember", Boolean(e.target.checked))
                        }
                    />

                    <Anchor href={route("password.request")} size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button type="submit" fullWidth mt="xl" disabled={processing}>
                    Sign in
                </Button>
            </form>
            <Text color="dimmed" size="sm" align="center" mt={20}>
                Do not have an account yet?{' '}
                <Box component={Link} href="/register">
                    Create account
                </Box>
            </Text>
        </GuestLayout>
    )
}
