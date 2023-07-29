import {Festival, User} from "@/types";
import {usePage} from "@inertiajs/react";

export function useFestival() {
    const {auth, festivals} = usePage().props as unknown as {
        auth: { user: User };
        festivals: Festival[];
    };

    const currentFestival: Festival = festivals.filter(
        (festival: Festival) => festival.id == auth.user.selected_festival
    )[0];

    return {
        currentFestival,
        festivals,
    };
}
