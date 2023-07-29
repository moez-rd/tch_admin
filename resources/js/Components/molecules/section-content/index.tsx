import React from "react";
import {Box} from "@mantine/core";

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
export default function SectionContent(props: Props): React.JSX.Element {
    const {children}: Props = props

    return (
        <Box maw="40rem">
            {children}
        </Box>
    )
}
