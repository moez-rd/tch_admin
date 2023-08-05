import { formatDate } from "@/lib/utils"
import { Festival, Milestone, Event, Seminar, Competition, ContactPerson } from "@/types"
import { DataDisplayChild } from "@/types/app"
import { router } from "@inertiajs/react"
import { useForm } from "@mantine/form"

export function useContactPerson() {

    const form = useForm({
        initialValues: {
            name: "",
            whatsapp: "",
            instagram: "",
            line: ""
        },
        validate: {
            name: (value) => !value.length ? 'Nama wajib diisi' : null,
            whatsapp: (value) => !value.length ? 'WhatsApp wajib diisi' : null,
        }
    })

    const handleCreate = (e: React.FormEvent<HTMLFormElement>, contactPersonableType: 'festival' | 'event', contactPersonableId: string) => {
        e.preventDefault()
        form.validate();


        if (form.isValid()) {
            if (contactPersonableType === 'festival') {
                router.post(route('festivals.contact-persons.store', {id: contactPersonableId}), form.values);
            } else {
                router.post(route('events.contact-persons.store', {id: contactPersonableId}), form.values);
            }
            form.reset()
        }
    }

    const getContactPersonDisplayChild = (contactPersons: ContactPerson<Event<Seminar|Competition>|Festival>[]): DataDisplayChild[] => {

        return contactPersons.map((contactPerson) => {
            return {
            data: [
                {
                    key: "Nama",
                    value: contactPerson.name
                },
                {
                    key: "WhatsApp",
                    value: contactPerson.whatsapp
                },
                {
                    key: "Instagram",
                    value: contactPerson.instagram
                },
                {
                    key: "Line",
                    value: contactPerson.line
                },
            ]
        }
    })
}

return {
    getContactPersonDisplayChild,
    form,
    handleCreate
}
}