import { MdOutlineAccountBalanceWallet, MdOutlineAreaChart } from 'react-icons/md';

import { Text } from './Text';

export interface MovimentCardProps {
    account: string;
    compensationType: string;
    description: string;
    amount: number;
}

export function MovimentCard({ account, compensationType, description, amount }: MovimentCardProps): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 gap-6 bg-neutral-200 rounded-base hover:bg-neutral-300 transition-colors duration-300 ease-out">
            <div className="flex flex-1 flex-row items-center gap-2">
                {account === 'CURRENT' ? (
                    <>
                        <MdOutlineAccountBalanceWallet className="text-neutral-800 text-xl" />
                        <Text size="sm" className="text-neutral-800">
                            Conta corrente
                        </Text>
                    </>
                ) : (
                    <>
                        <MdOutlineAreaChart className="text-neutral-800 text-xl" />
                        <Text size="sm" className="text-neutral-800">
                            Conta investimento
                        </Text>
                    </>
                )}
            </div>
            <Text size="sm" className="flex flex-1 text-neutral-800 truncate">
                {description}
            </Text>

            <Text size="sm" className="text-neutral-800 truncate md:text-clip w-24">
                {compensationType === 'CREDIT' ? (
                    <span className="text-positive-500">
                        + {amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </span>
                ) : (
                    <span className="text-negative-500">- R$ {amount}</span>
                )}
            </Text>
        </div>
    );
}
