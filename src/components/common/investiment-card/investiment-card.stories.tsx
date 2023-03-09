import { Meta, StoryObj } from '@storybook/react';
import { InvestimentCard, InvestimentCardProps } from './investiment-card';

export default {
    title: 'Components/InvestimentCard',
    component: InvestimentCard,
    argTypes: {
        data: {
            control: {
                type: 'object',
            },
        },
    },
    args: {
        data: {
            amount: 100,
        },
    },
} as Meta<InvestimentCardProps>;

export const Default: StoryObj = {};
