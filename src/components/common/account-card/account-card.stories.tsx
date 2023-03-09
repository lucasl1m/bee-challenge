import { Meta, StoryObj } from '@storybook/react';
import { AccountCard, AccountCardProps } from './account-card';

export default {
    title: 'Components/AccountCard',
    component: AccountCard,
    argTypes: {
        data: {
            control: {
                type: 'object',
            },
        },
    },
    args: {
        data: {
            balance: 100,
        },
    },
} as Meta<AccountCardProps>;

export const Default: StoryObj = {};
