import { router } from "@inertiajs/react";
import {useForm} from "@mantine/form";

export function useSeminarCast() {

    const form = useForm({
        initialValues: {
            name: "",
            title: "",
            image: "",
            role: ""
        },
        validate: {
            name: (value) => !value.length ? 'Nama wajib diisi' : null,
            title: (value) => !value.length ? 'Title wajib diisi' : null,
            image: (value) => !value.length ? 'Foto wajib diisi' : null,
            role: (value) => !value.length ? 'Peranan wajib diisi' : null,
        }
    })

    const handleCreate = (e: React.FormEvent<HTMLFormElement>, eventId: string) => {
        e.preventDefault()
        form.validate();

        if (form.isValid()) {
            router.post(route('events.seminar-casts.store'), form.values)
            form.reset()
        }
    }

    return {
      form,
      handleCreate
    }
}
