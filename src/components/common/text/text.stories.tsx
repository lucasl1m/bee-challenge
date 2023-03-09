import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },

        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg', 'xl'],
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
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        size: 'md',
    },
} as Meta<TextProps>;

export const Default: StoryObj = {};
