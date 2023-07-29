import React from "react";
import {Head} from "@inertiajs/react";
import FestivalLayout from "@/Pages/Festival/Layout";

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
export default function FaqEditPage(props: Props): React.JSX.Element {
    const {} = props

    return (
        <FestivalLayout>
            <Head title="Faqs"/>
        </FestivalLayout>
    )
}
