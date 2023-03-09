import { StoryObj, Meta } from '@storybook/react';

import { Heading, HeadingProps } from './heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },

        size: {
            control: {
                type: 'select',
                options: ['xl', '2xl'],
            },
        },

        asChild: {
            table: {
                disable: true,
            },
        },

        className: {
            table: {
                disable: true,
            },
        },
    },

    args: {
        children: 'Heading',
        size: 'xl',
    },
} as Meta<HeadingProps>;

export const Default: StoryObj = {};
