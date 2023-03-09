import { useEffect, useState } from 'react';

import { InvestimentCard } from '../../components/common/investiment-card/investiment-card';
import { InvoiceCard } from '../../components/common/invoice-card/invoice-card';
import { AccountCard } from '../../components/common/account-card/account-card';
import { Heading } from '../../components/common/heading/heading';
import { Text } from '../../components/common/text/text';
import { OfferCard } from '../../components/common/offer-card/offer-card';
import { MovimentCard } from '../../components/common/moviment-card/moviment-card';
import { Loading } from '../../components/common/loading/loading';

import { api } from '../../services/api';

import { IMoviment, IOffer, IAccounts } from './types';

export function Home(): JSX.Element {
    const [isLoading, setIsLoading] = useState(true);
    const [accounts, setAccounts] = useState<IAccounts>();
    const [moviments, setMoviments] = useState<IMoviment[]>([]);
    const [offers, setOffers] = useState<IOffer[]>([]);

    async function fetchData() {
        try {
            const [accountsResponse, movementsResponse, offersResponse] = await Promise.all([
                api.get('/dashboard'),
                api.get('/movement'),
                api.get('/offers'),
            ]);

            const { data: accountsData } = accountsResponse;
            const { data: movementsData } = movementsResponse;
            const {
                data: { offers },
            } = offersResponse;

            setAccounts(accountsData);
            setMoviments(movementsData);
            setOffers(offers);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-1 flex-col my-4 gap-4 lg:my-6">
            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Text size="sm" className="text-neutral-800">
                            Olá,
                        </Text>
                        <Heading size="xl" className="text-neutral-800">
                            João
                        </Heading>
                    </div>
                    <Text size="sm" className="text-neutral-500">
                        Seja bem vindo a sua conta digital
                    </Text>
                </div>
                <div className="flex flex-col md:grid md:grid-flow-row-dense lg:grid-cols-4 lg:grid-flow-col-dense gap-6">
                    <AccountCard data={accounts?.currentAccount} />
                    <InvestimentCard data={accounts?.investimentAccount} />
                    <InvoiceCard data={accounts?.creditCard} />
                </div>
            </section>
            <section className="flex flex-1 flex-col md:grid md:grid-flow-row-dense lg:grid-cols-4 lg:grid-flow-col-dense gap-6">
                <div className="flex flex-col flex-1 col-span-3 gap-4">
                    <div className="flex items-center gap-2">
                        <Heading size="xl" className="text-neutral-800">
                            Conta digital
                        </Heading>
                        <Text size="md" className="text-neutral-500">
                            Últimas movimentações
                        </Text>
                    </div>
                    <ul className="flex flex-col gap-2">
                        {moviments.map((moviment) => (
                            <MovimentCard
                                key={moviment.movementId}
                                account={moviment.account}
                                compensationType={moviment.compensationType}
                                description={moviment.description}
                                amount={moviment.amount}
                            />
                        ))}
                    </ul>
                </div>

                <div className="flex flex-1 flex-col col-span-1 gap-4">
                    <Heading size="xl" className="text-neutral-800">
                        Ofertas para você
                    </Heading>

                    <OfferCard title={offers[0].title} subtitle={offers[0].subtitle} amount={offers[0].amount} />
                </div>
            </section>
        </div>
    );
}
