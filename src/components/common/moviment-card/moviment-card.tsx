import { MdOutlineAccountBalanceWallet, MdOutlineAreaChart } from 'react-icons/md';

import { Text } from '../text/text';

export interface MovimentCardProps extends React.HTMLAttributes<HTMLDivElement> {
    account: 'CURRENT' | 'INVESTMENT';
    compensationType: 'CREDIT' | 'DEBIT';
    description: string;
    amount: number;
}

export function MovimentCard({
    account,
    compensationType,
    description,
    amount,
    ...rest
}: MovimentCardProps): JSX.Element {
    const amountFormatted = amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return (
        <div
            className="flex flex-col md:flex-row md:items-center md:justify-between p-6 gap-6 bg-neutral-200 rounded-base hover:bg-neutral-300 transition-colors duration-300 ease-out"
            {...rest}
        >
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
                    <span className="text-positive-500">{`+ ${amountFormatted}`}</span>
                ) : (
                    <span className="text-negative-500">{`- ${amountFormatted}`}</span>
                )}
            </Text>
        </div>
    );
}
