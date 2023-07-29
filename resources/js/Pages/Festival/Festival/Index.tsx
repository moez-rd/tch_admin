import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
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
export default function FestivalIndexPage(props: Props): React.JSX.Element {
    const {} = props

    return (
        <FestivalLayout>
            <Head title="Festival"/>
        </FestivalLayout>
    )
}
