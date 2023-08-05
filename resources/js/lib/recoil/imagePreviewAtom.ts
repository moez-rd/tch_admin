import {atom} from 'recoil';

export type ImagePreview = {
    opened: boolean;
    src: string,
    alt: string
};

const defaultImagePreview: ImagePreview = {
    opened: false,
    src: '',
    alt: ''
};

export const imagePreviewState = atom<ImagePreview>({
    key: 'imagePreviewState',
    default: defaultImagePreview,
});
