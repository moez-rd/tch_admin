import './bootstrap';
import '../css/app.css';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {MantineProvider} from "@mantine/core";
import {theme} from "@/lib/mantine/theme";
import {ModalsProvider} from '@mantine/modals';
import {Notifications} from "@mantine/notifications";
import {RecoilRoot} from "recoil";
import ImagePreview from "@/Components/molecules/image-preview";
import CreateSeminarCastModal from './Components/molecules/create-seminar-cast-modal';
import CreateContactPersonModal from './Components/molecules/create-contact-person-modal';
import CreateMilestoneModal from './Components/molecules/create-milestone-modal';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <>
                <RecoilRoot>
                    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
                        <Notifications/>
                        <ImagePreview/>
                        <CreateSeminarCastModal/>
                        <CreateContactPersonModal/>
                        <CreateMilestoneModal/>
                        <ModalsProvider>
                            <App {...props} />
                        </ModalsProvider>
                    </MantineProvider>
                </RecoilRoot>
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
