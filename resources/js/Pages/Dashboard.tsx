import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";

/**
 * interface
 */
interface Props {

}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function DashboardPage(props: Props): React.JSX.Element {
    const {} = props

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
        </AuthenticatedLayout>
    )
}
