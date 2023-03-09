export interface CurrentAccount {
    balance: number;
}

export interface InvestimentAccount {
    amount: number;
}

export interface CreditCard {
    currentInvoice: number;
}

export interface IAccounts {
    currentAccount: CurrentAccount;
    investimentAccount: InvestimentAccount;
    creditCard: CreditCard;
}

export interface IMoviment {
    movementId: number;
    account: 'CURRENT' | 'INVESTMENT';
    compensationType: 'CREDIT' | 'DEBIT';
    description: string;
    amount: number;
    datetime: string;
}

export interface IOffer {
    offerType: string;
    title: string;
    subtitle: string;
    amount: number;
}

export interface IOffers {
    offers: IOffer[];
}
