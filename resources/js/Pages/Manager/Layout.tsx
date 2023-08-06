import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {links} from "@/Pages/Manager/data";

/**
 * interface
 */
interface Props {
    children: React.ReactNode
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function ManagerLayout(props: Props): React.JSX.Element {
    const {children}: Props = props

    return (
        <AuthenticatedLayout sidebarLinks={links}>
            {children}
        </AuthenticatedLayout>
    )
}
