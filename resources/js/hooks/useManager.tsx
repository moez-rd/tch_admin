import { Data } from "@/types/app";
import {
    educationLevelToString,
    formatDate,
    genderToString,
} from "@/lib/utils";
import { User } from "@/types";
import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import { router } from "@inertiajs/react";
import { MouseEvent, KeyboardEvent } from "react";

export function useManager() {
    const getManagers = (managers: User[]): Data[] => {
        return managers.map((manager) => {
            return {
                id: manager.id,
                title: manager.name,
                avatar: manager.avatar,
                link: route("managers.show", { id: manager.id }),
                information: [`@${manager.uid}`],
            };
        }) as Data[];
    };

    const getManagerDisplay = (manager: User) => {
        return [
            {
                title: "Informasi Manajer",
                data: [
                    {
                        key: "Nama",
                        value: manager.name,
                    },
                    {
                        key: "UID",
                        value: manager.uid,
                    },
                    {
                        key: "Email",
                        value: manager.email,
                    },
                    {
                        key: "Bergabung pada",
                        value: formatDate(manager.created_at, "datetime"),
                    },
                ],
            },
        ];
    };

    const handleSelectFestivalPeriod = (festival_id: string | null) => {
        router.patch(
            route("managers.festival.select", { festival: festival_id! })
        );
    };

    return { getManagers, getManagerDisplay, handleSelectFestivalPeriod };
}
