import React from "react";
import {useRecoilState} from "recoil";
import {contactPersonModalState} from "@/lib/recoil/contactPersonModalAtom";
import {Button, Group, Modal, Stack, TextInput} from "@mantine/core";
import { useContactPerson } from "@/hooks/useContactPerson";

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
export default function CreateContactPersonModal(props: Props): React.JSX.Element {

    const [contactPersonModal, setContactPersonModal] = useRecoilState(contactPersonModalState)

    const {form, handleCreate} = useContactPerson()

    const handleModalClose = () => {
        setContactPersonModal((prev) => {
            return {
                ...prev,
                opened: false,
            };
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleCreate(e, contactPersonModal.contactPersonableType, contactPersonModal.contactPersonableId)
        handleModalClose()
    }

    return (
        <Modal opened={contactPersonModal.opened} onClose={handleModalClose} title="Tambah Narahubung" centered>
             <form onSubmit={(e) => handleSubmit(e)}>
                <Stack>
                    <TextInput label="Nama" placeholder="Nama"
                               withAsterisk {...form.getInputProps('name')}/>

<TextInput label="WhatsApp" placeholder="WhatsApp"
                               withAsterisk {...form.getInputProps('whatsapp')}/>

<TextInput label="Instagram" placeholder="Instagram"
                                {...form.getInputProps('instagram')}/>

<TextInput label="Line" placeholder="Line"
                                {...form.getInputProps('line')}/>
                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    )
}
