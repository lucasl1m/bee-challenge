import { Meta, StoryObj } from '@storybook/react';
import { InvoiceCard, InvoiceCardProps } from './invoice-card';

export default {
    title: 'Components/InvoiceCard',
    component: InvoiceCard,
    argTypes: {
        data: {
            control: {
                type: 'object',
            },
        },
    },
    args: {
        data: {
            currentInvoice: 100,
        },
    },
} as Meta<InvoiceCardProps>;

export const Default: StoryObj = {};
