import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head} from "@inertiajs/react";
import ImagePreview from "@/Components/molecules/image-preview";
import SectionHeader from "@/Components/molecules/section-header";
import SectionContent from "@/Components/molecules/section-content";

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

            <SectionHeader title="Festival" subTitle="Kelola festival"/>
<SectionContent>d</SectionContent>
        </FestivalLayout>
    )
}
