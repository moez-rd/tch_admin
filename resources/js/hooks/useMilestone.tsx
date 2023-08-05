import { formatDate } from "@/lib/utils"
import { Festival, Milestone, Event, Seminar, Competition } from "@/types"
import { DataDisplayChild } from "@/types/app"
import { router } from "@inertiajs/react"
import { useForm } from "@mantine/form"

export function useMilestone() {

    const form = useForm({
        initialValues: {
            date: new Date(),
            name: "",
            description: "",
        },
        validate: {
            date: (value) => !value ? 'Tanggal wajib diisi' : null,
            name: (value) => !value.length ? 'Nama wajib diisi' : null,
        }
    })


    const handleCreate = (e: React.FormEvent<HTMLFormElement>, milestoneableType: 'festival' | 'event', milestoneableId: string) => {
        e.preventDefault()
        form.validate();

        if (form.isValid()) {
            router.post(route(milestoneableType === 'festival' ? 'festivals.milestones.store' : 'events.milestones.store', {id: milestoneableId}), form.values)
            form.reset()
        }
    }

    const getMilestoneDisplayChild = (milestones: Milestone<Event<Seminar|Competition>|Festival>[]): DataDisplayChild[] => {

        return milestones.map((milestone) => {
            return {
            data: [
                {
                    key: "Tanggal",
                    value: formatDate(milestone.date)
                },
                {
                    key: "Nama",
                    value: milestone.name
                },
                {
                    key: "Deskripsi",
                    value: milestone.description
                },
            ]
        }
    })
}

return {
    getMilestoneDisplayChild,
    form,
    handleCreate
}
}