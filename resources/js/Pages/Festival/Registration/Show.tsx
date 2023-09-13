import React from "react";
import FestivalLayout from "@/Pages/Festival/Layout";
import {Head} from "@inertiajs/react";
import SectionContent from "@/Components/molecules/section-content";
import {ActionIcon, Box, Button, Group, Menu} from "@mantine/core";
import {IconAdjustments, IconArrowBackUp, IconTrash} from "@tabler/icons-react";
import {PageProps} from "@/types";
import DescriptionList from "@/Components/molecules/description-list";
import {useRegistration} from "@/hooks/useRegistration";

/**
 * interface
 */
interface Props extends PageProps {

}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function RegistrationShowPage(props: Props): React.JSX.Element {
    const {auth, registration}: Props = props

    const {displayRegistration, handleDelete} = useRegistration()

    return (
        <FestivalLayout>
            <Head title="Detail Pendaftaran"/>

            <SectionContent>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
                    <Button variant="white" size="xs" onClick={() => history.back()}
                            leftIcon={<IconArrowBackUp/>}>Kembali</Button>
                    <Group spacing="4px">
                        <Button onClick={(e) => handleDelete(e, registration)} size="xs" color="red"
                                leftIcon={<IconTrash/>}>Hapus</Button>
                        <Menu shadow="md" width={200} position="bottom-end">
                            <Menu.Target>
                                <ActionIcon color="blue" variant="outline">
                                    <IconAdjustments/>
                                </ActionIcon>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Pendaftaran</Menu.Label>
                                {/*<Menu.Item onClick={handleRegistrationOpen} icon={<IconCircuitSwitchOpen size={14}/>}>Buka</Menu.Item>*/}
                                {/*<Menu.Item onClick={handleRegistrationClose} icon={<IconCircuitSwitchClosed size={14}/>}>Tutup</Menu.Item>*/}
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Box>
                <Box pt="0.625rem">
                    <DescriptionList title={registration.name || `UID: ${registration.uid}`}
                                     data={displayRegistration(registration)}/>
                </Box>
            </SectionContent>
        </FestivalLayout>
    )
}
