import { StoryObj, Meta } from '@storybook/react';

import { MovimentCard, MovimentCardProps } from './moviment-card';

export default {
    title: 'Components/MovimentCard',
    component: MovimentCard,
    argTypes: {
        account: {
            control: {
                type: 'select',
                options: ['CURRENT', 'INVESTMENT'],
            },
        },
        compensationType: {
            control: {
                type: 'select',
                options: ['DEBIT', 'CREDIT'],
            },
        },

        description: {
            control: {
                type: 'text',
            },
        },

        amount: {
            control: {
                type: 'number',
            },
        },
    },

    parameters: {
        layout: 'fullscreen',
    },

    args: {
        account: 'CURRENT',
        compensationType: 'DEBIT',
        description: 'Descrição',
        amount: 100,
    },
} as Meta<MovimentCardProps>;

export const Default: StoryObj = {};
