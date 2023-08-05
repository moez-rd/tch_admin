import React from "react";
import {useRecoilState} from "recoil";
import {seminarCastModalState} from "@/lib/recoil/seminarCastModalAtom";
import {Button, FileInput, Group, Modal, Select, Stack, TextInput} from "@mantine/core";
import {SeminarCastRole} from "@/enums/constants";
import {useSeminarCast} from "@/hooks/useSeminarCast";
import { IconUpload } from "@tabler/icons-react";

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
export default function CreateSeminarCastModal(props: Props): React.JSX.Element {

    const [seminarCastModal, setSeminarCastModal] = useRecoilState(seminarCastModalState)

    const {form, handleCreate} = useSeminarCast()

    const handleModalClose = () => {
        setSeminarCastModal((prev) => {
            return {
                ...prev,
                opened: false,
            };
        });
    };

    return (
        <Modal opened={seminarCastModal.opened} onClose={handleModalClose} title="Tambah Pemeran" centered>
            <form onSubmit={(e) => handleCreate(e, seminarCastModal.eventId)}>
                <Stack>
                    <TextInput label="Nama" placeholder="Nama"
                               withAsterisk {...form.getInputProps('name')}/>

                    <TextInput label="Jabatan" placeholder="Jabatan"
                               withAsterisk {...form.getInputProps('title')}/>

                    <FileInput icon={<IconUpload size={16}/>} label="Foto" placeholder="Unggah foto"
                               withAsterisk {...form.getInputProps('image')}/>

                    <Select label="Sebagai" placeholder="Pilih peranan"
                            withAsterisk {...form.getInputProps('role')} data={[
                        {value: String(SeminarCastRole.SPEAKER), label: "Speaker"},
                        {value: String(SeminarCastRole.MODERATOR), label: "Moderator"},
                    ]}/>

                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    )
}
