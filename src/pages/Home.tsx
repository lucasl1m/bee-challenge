import { InvestimentCard } from '../components/InvestimentCard';
import { InvoiceCard } from '../components/InvoiceCard';
import { AccountCard } from '../components/AccountCard';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { OfferCard } from '../components/OfferCard';
import { MovimentCard } from '../components/MovimentCard';

const moviments = [
    {
        movementId: 103912,
        account: 'CURRENT',
        compensationType: 'CREDIT',
        description: 'Pix recebido - João José Marques',
        amount: 227.98,
        datetime: '2023-03-01T15:10:03-03:00',
    },
    {
        movementId: 817291,
        account: 'CURRENT',
        compensationType: 'DEBIT',
        description: 'Pix enviado - Yuri José',
        amount: 5000.0,
        datetime: '2023-02-20T10:10:03-03:00',
    },
    {
        movementId: 889012,
        account: 'INVESTIMENT',
        compensationType: 'CREDIT',
        description: 'Dividendos recebidos - IRDM11',
        amount: 1200.0,
        datetime: '2023-02-17T10:10:03-03:00',
    },
    {
        movementId: 81726,
        account: 'INVESTIMENT',
        compensationType: 'CREDIT',
        description: 'Dividendos recebidos - ALZR11',
        amount: 700.95,
        datetime: '2023-02-16T10:10:03-03:00',
    },
    {
        movementId: 281723,
        account: 'INVESTIMENT',
        compensationType: 'CREDIT',
        description: 'Dividendos recebidos - PLCR11',
        amount: 89.0,
        datetime: '2023-02-14T10:10:03-03:00',
    },
];

export function Home(): JSX.Element {
    return (
        <div className="flex flex-1 flex-col gap-4">
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
                    <AccountCard amount={130981.2} />
                    <InvestimentCard amount={33212.46} />
                    <InvoiceCard amount={2432.11} />
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

                    <OfferCard title="Empréstimo Beeteller" subtitle="Valor disponível de até" amount="100.000,00" />
                </div>
            </section>
        </div>
    );
}
