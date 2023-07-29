import React from "react";
import {
    Select
} from "@mantine/core";


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
export default function FestivalSelect(props: Props): React.JSX.Element {
    const {}: Props = props


    return (
        <Select
            size="xs"
            placeholder="Pick one"
            data={[
                {value: 'react', label: 'React'},
                {value: 'ng', label: 'Angular'},
                {value: 'svelte', label: 'Svelte'},
                {value: 'vue', label: 'Vue'},
            ]}
        />
    )
}
