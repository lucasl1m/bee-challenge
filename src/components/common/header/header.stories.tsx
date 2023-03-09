import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './header';

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as Meta;

export const Default: StoryObj = {};
