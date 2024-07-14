import { Festival, User } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

export function useFestival() {
    const form = useForm({
        initialValues: {
            name: "",
            period: new Date(2024, 0, 0),
            theme: "",
            logo: "",
            description: "",
            start_date: new Date(),
            end_date: new Date(),
        },
        validate: {
            name: (value) => (!value.length ? "Nama wajib diisi" : null),
            period: (value) => (!value ? "Periode wajib diisi" : null),
            theme: (value) => (!value.length ? "Tema wajib diisi" : null),
            description: (value) =>
                !value.length ? "Deskripsi wajib diisi" : null,
            start_date: (value) => (!value ? "Periode wajib diisi" : null),
            end_date: (value) => (!value ? "Periode wajib diisi" : null),
        },
    });

    const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.validate();

        if (form.isValid()) {
            router.post(route("festivals.store"), form.values);
        }
    };

    const { auth, festivals } = usePage().props as unknown as {
        auth: { user: User };
        festivals: Festival[];
    };

    const currentFestival: Festival = festivals.filter(
        (festival: Festival) => festival.id == auth.user.selected_festival
    )[0];

    const handleActivate = (festival: Festival) => {
        router.patch(
            route("festivals.update.activate", { festival: festival.id })
        );
    };

    const handleDelete = (
        e:
            | React.MouseEvent<HTMLAnchorElement, MouseEvent>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>,
        festival: Festival
    ) => {
        e.preventDefault();
        modals.openConfirmModal({
            title: "Hapus Event",
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus festival
                    <Text span weight={600}>
                        {festival.name}
                    </Text>
                    ?. Tindakan ini akan menghapus seluruh seluruh data pada
                    festival terkait.
                </Text>
            ),
            labels: { confirm: "Hapus", cancel: "Batal" },
            confirmProps: { color: "red" },
            onConfirm: () => {
                router.delete(route("festivals.destroy", { id: festival.id }), {
                    preserveScroll: true,
                });
            },
        });
    };

    return {
        form,
        currentFestival,
        festivals,
        handleActivate,
        handleDelete,
        handleCreate,
    };
}
