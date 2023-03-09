import { StoryObj, Meta } from '@storybook/react';

import { Button, ButtonProps } from './button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
        icon: {
            table: {
                disable: true,
            },
        },
    },

    args: {
        children: 'Button',
    },

    parameters: {
        docs: {
            description: {
                component: 'Button component',
            },
        },
    },
} as Meta<ButtonProps>;

export const Default: StoryObj = {};
