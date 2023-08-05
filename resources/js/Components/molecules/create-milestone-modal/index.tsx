import React from "react";
import {useRecoilState} from "recoil";
import {milestoneModalState} from "@/lib/recoil/milestoneModalAtom";
import {Button, FileInput, Group, Modal, Stack, TextInput, Textarea} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useMilestone } from "@/hooks/useMilestone";

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
export default function CreateMilestoneModal(props: Props): React.JSX.Element {

    const [milestoneModal, setMilestoneModal] = useRecoilState(milestoneModalState)

    const {form, handleCreate} = useMilestone()

    const handleModalClose = () => {
        setMilestoneModal((prev) => {
            return {
                ...prev,
                opened: false,
            };
        });
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleCreate(e, milestoneModal.milestoneableType, milestoneModal.milestoneableId)
        handleModalClose()
    }

    return (
        <Modal opened={milestoneModal.opened} onClose={handleModalClose} title="Tambah Milestone" centered>
             <form onSubmit={(e) => handleSubmit(e)}>
                <Stack>
                    <DateInput label="Tanggal" placeholder="Tanggal"
                               withAsterisk {...form.getInputProps('date')}/>

                    <TextInput label="Nama" placeholder="Nama"
                               withAsterisk {...form.getInputProps('name')}/>

                    <Textarea label="Deskripsi" placeholder="Deskripsi"
                                {...form.getInputProps('description')}/>

                
                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    )
}
