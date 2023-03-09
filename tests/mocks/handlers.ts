import { rest } from 'msw';
import { IAccounts, IMoviment, IOffer } from '../../src/pages/home-page/types';

export const accountsData: IAccounts = {
    currentAccount: {
        balance: 1000,
    },
    investimentAccount: {
        amount: 1000,
    },
    creditCard: {
        currentInvoice: 1000,
    },
};

export const movimentsData: IMoviment[] = [
    {
        movementId: 1,
        account: 'CURRENT',
        compensationType: 'CREDIT',
        description: 'Pix recebido - João José Marques',
        amount: 100,
        datetime: '2021-01-01',
    },
    {
        movementId: 2,
        account: 'CURRENT',
        compensationType: 'DEBIT',
        description: 'Teste',
        amount: 100,
        datetime: '2021-01-01',
    },
    {
        movementId: 3,
        account: 'CURRENT',
        compensationType: 'CREDIT',
        description: 'Pix enviado - Yuri José',
        amount: 100,
        datetime: '2021-01-01',
    },
    {
        movementId: 4,
        account: 'CURRENT',
        compensationType: 'DEBIT',
        description: 'Pix enviado - Yuri José',
        amount: 100,
        datetime: '2021-01-01',
    },
];

export const offersData: IOffer[] = [
    {
        offerType: 'loan',
        title: 'Empréstimo Beeteller',
        subtitle: 'Valor disponível de até',
        amount: 100.0,
    },
];

export const handlers = [
    rest.get('/accounts', async (req, res, ctx) => {
        return await res(ctx.json(accountsData));
    }),
    rest.get('/moviments', async (req, res, ctx) => {
        return await res(ctx.json(movimentsData));
    }),
    rest.get('/offers', async (req, res, ctx) => {
        return await res(ctx.json(offersData));
    }),
];
