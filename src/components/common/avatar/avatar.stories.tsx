import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },

    args: {
        src: 'https://avatars.githubusercontent.com/u/70279700?v=4',
    },
} as Meta<AvatarProps>;

export const Default: StoryObj = {};
