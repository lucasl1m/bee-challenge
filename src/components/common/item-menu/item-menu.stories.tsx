import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ItemMenu, ItemMenuProps } from './item-menu';

export default {
    title: 'Components/ItemMenu',
    component: ItemMenu,
    argTypes: {
        path: {
            control: {
                type: 'text',
            },
        },
        name: {
            control: {
                type: 'text',
            },
        },
    },

    args: {
        path: '/',
        name: 'Home',
    },

    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as Meta<ItemMenuProps>;

export const Active: StoryObj = {};

export const Default: StoryObj = {
    args: {
        path: '/extract',
        name: 'Extrato',
    },
};
