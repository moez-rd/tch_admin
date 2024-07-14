import { Faq } from "@/types";
import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import { router } from "@inertiajs/react";
import React from "react";
import { Data, DataDisplay } from "@/types/app";
import { formatDate } from "@/lib/utils";
import { useForm } from "@mantine/form";

export function usePayment() {
    // const getFaqs = (faqs: Faq[]): Data[] => {
    //     return faqs.map((faq) => {
    //         return {
    //             id: faq.id,
    //             title: faq.question,
    //             link: route("faqs.show", { id: faq.id }),
    //             information: [`Dibuat oleh: ${faq.user?.name}`],
    //             menu: [
    //                 {
    //                     label: "Edit",
    //                     linkProps: {
    //                         href: route("faqs.edit", { id: faq.id }),
    //                     },
    //                 },
    //                 {
    //                     label: "Hapus",
    //                     props: {
    //                         color: "red",
    //                     },
    //                     linkProps: {
    //                         href: "",
    //                         onClick: (
    //                             event:
    //                                 | React.MouseEvent<
    //                                       HTMLAnchorElement,
    //                                       MouseEvent
    //                                   >
    //                                 | React.KeyboardEvent<HTMLAnchorElement>
    //                         ) => handleDelete(event, faq),
    //                     },
    //                 },
    //             ],
    //         };
    //     }) as Data[];
    // };

    // const displayFaq = (faq: Faq): DataDisplay[] => {
    //     return [
    //         {
    //             title: "Informasi Faqs",
    //             data: [
    //                 {
    //                     key: "Pertanyaan",
    //                     value: faq.question,
    //                 },
    //                 {
    //                     key: "Jawaban",
    //                     value: faq.answer,
    //                 },
    //                 {
    //                     key: "Dibuat oleh",
    //                     value: faq.user?.name!,
    //                 },
    //                 {
    //                     key: "Dibuat pada",
    //                     value: formatDate(faq.created_at, "datetime"),
    //                 },
    //             ],
    //         },
    //     ];
    // };

    return {
        // form,
        // handleCreate,
        // handleUpdate,
        // handleDelete,
        // getFaqs,
        // displayFaq,
    };
}
