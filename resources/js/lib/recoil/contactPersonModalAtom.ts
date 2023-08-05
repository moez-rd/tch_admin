import {atom} from 'recoil';

export type ContactPersonModal = {
    opened: boolean;
    contactPersonableType: 'festival' | 'event'
    contactPersonableId: string
};

const defaultContactPersonModal: ContactPersonModal = {
    opened: false,
    contactPersonableType: 'festival',
    contactPersonableId: ''
};

export const contactPersonModalState = atom<ContactPersonModal>({
    key: 'contactPersonModalState',
    default: defaultContactPersonModal,
});
