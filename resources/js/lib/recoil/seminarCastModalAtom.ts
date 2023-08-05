import {atom} from 'recoil';

export type SeminarCastModal = {
    opened: boolean;
    eventId: string;
};

const defaultSeminarCastModal: SeminarCastModal = {
    opened: false,
    eventId: ''
};

export const seminarCastModalState = atom<SeminarCastModal>({
    key: 'seminarCastModalState',
    default: defaultSeminarCastModal,
});
