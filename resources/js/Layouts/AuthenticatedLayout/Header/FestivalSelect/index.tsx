import React from "react";
import { Select } from "@mantine/core";
import { Festival } from "@/types";
import { useManager } from "@/hooks/useManager";

/**
 * interface
 */
interface Props {
    selected: string;
    festivals: Festival[];
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function FestivalSelect(props: Props): React.JSX.Element {
    const { festivals, selected }: Props = props;

    const { handleSelectFestivalPeriod } = useManager();

    return (
        <Select
            size="xs"
            placeholder="Festival"
            value={selected}
            onChange={handleSelectFestivalPeriod}
            data={festivals.map((festival: Festival) => {
                return {
                    label: `Festival ${festival.period}`,
                    value: festival.id,
                };
            })}
        />
    );
}
