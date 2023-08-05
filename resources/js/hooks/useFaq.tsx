import {Competition, Event, Faq, Seminar} from "@/types";
import {modals} from "@mantine/modals";
import {Text} from "@mantine/core";
import {router} from "@inertiajs/react";
import React from "react";
import {Data, DataDisplay} from "@/types/app";
import {formatDate} from "@/lib/utils";
import {useForm} from "@mantine/form";

export function useFaq() {

    const form = useForm({
        initialValues: {
            question: "",
            answer: ""
        },
        validate: {
            question: (value) => !value.length ? 'Pertanyaan wajib diisi' : /^(?:(?!\?).)*$/.test(value) ? "Pertanyaan harus diakhiri dengan tanda tanya (?)" : null,
            answer: (value) => !value.length ? 'Jawaban wajib diisi' : null,
        }
    })

    const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        form.validate();

        if (form.isValid()) {
            router.post(route('faqs.store'), form.values)
        }
    }

    const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.KeyboardEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>, faq: Faq) => {
        e.preventDefault()

        modals.openConfirmModal({
            title: 'Hapus Faq',
            centered: true,
            children: (
                <Text size="sm">
                    Yakin ingin menghapus faq <Text span weight={600}>{faq.question}</Text>?
                </Text>
            ),
            labels: {confirm: 'Hapus', cancel: "Batal"},
            confirmProps: {color: 'red'},
            onConfirm: () => {
                router.delete(route('faqs.destroy', {id: faq.id}), {preserveScroll: true})
            }
        })
    }

    const getFaqs = (faqs: Faq[]): Data[] => {
        return faqs.map((faq) => {
            return {
                id: faq.id,
                title: faq.question,
                link: route('faqs.show', {id: faq.id}),
                information: [
                    `Dibuat oleh: ${faq.user?.name}`
                ],
                menu: [
                    {
                        label: "Edit",
                        linkProps: {
                            href: route('faqs.edit', {id: faq.id})
                        }
                    },
                    {
                        label: "Hapus",
                        props: {
                            color: "red"
                        },
                        linkProps: {
                            href: "",
                            onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.KeyboardEvent<HTMLAnchorElement>) => handleDelete(event, faq)
                        }
                    }
                ]
            }
        }) as Data[]
    }

    const displayFaq = (faq: Faq): DataDisplay[] => {
        return [
            {
                'title': "Informasi Faqs",
                'data': [
                    {
                        "key": "Pertanyaan",
                        "value": faq.question
                    },
                    {
                        "key": "Jawaban",
                        "value": faq.answer
                    },
                    {
                        "key": "Dibuat oleh",
                        "value": faq.user?.name!
                    },
                    {
                        "key": "Dibuat pada",
                        "value": formatDate(faq.created_at, "datetime")
                    }
                ]
            }
        ]
    }

    return {
        form,
        handleCreate,
        handleDelete,
        getFaqs,
        displayFaq
    }
}
