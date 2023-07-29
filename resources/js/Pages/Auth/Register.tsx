import React, {FormEventHandler, useEffect} from "react";
import {Head, useForm} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import {Anchor, Button, Checkbox, Group, Input, PasswordInput, Text, TextInput} from "@mantine/core";

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
export default function LoginPage(props: Props): React.JSX.Element {
    const {}: Props = props

    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <form onSubmit={submit}>
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    required
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}

                />

                <TextInput
                    label="Email"
                    placeholder="you@mantine.dev"
                    required
                    mt="md"
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

                <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm password"
                    required
                    mt="md"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }/>

                <Button type="submit" fullWidth mt="xl" disabled={processing}>
                    Register
                </Button>
            </form>
            <Text color="dimmed" size="sm" align="center" mt={20}>
                Already registered?{' '}
                <Anchor size="sm" component="button">
                    Login
                </Anchor>
            </Text>
        </GuestLayout>
    )
}
