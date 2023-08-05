import {atom} from 'recoil';

export type MilestoneModal = {
    opened: boolean;
    milestoneableType: 'festival' | 'event'
    milestoneableId: string
};

const defaultMilestoneModal: MilestoneModal = {
    opened: false,
    milestoneableType: 'festival',
    milestoneableId: ''
};

export const milestoneModalState = atom<MilestoneModal>({
    key: 'milestoneModalState',
    default: defaultMilestoneModal,
});
