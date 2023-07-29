import {Link} from "@/types/app";

export const links: Link[] = [
    {
        label: "Dashboard",
        link: route("dashboard"),
        basePath: "/dashboard"
    },
    {
        label: "Festival",
        link: route("festivals.index"),
        basePath: "/festival"
    },
    {
        label: "Manajer",
        link: route("managers.index"),
        basePath: "/manager"
    },
    {
        label: "Pengaturan",
        link: route("account.index"),
        basePath: "/setting"
    }
]


export const user = {
    name: "Margarin",
    image: "/test.jpeg"
}
