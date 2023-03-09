import { formatAmout } from '../../../utils/format-amout';

import { MdOutlineAccountBalanceWallet, MdArrowForward } from 'react-icons/md';

import { Heading } from '../heading/heading';
import { Text } from '../text/text';
import { CurrentAccount } from '../../../pages/home-page/types';

export interface AccountCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: CurrentAccount | undefined;
}

export function AccountCard({ data }: AccountCardProps): JSX.Element {
    return (
        <div className="flex flex-1 flex-col col-span-2 gap-12 group bg-neutral-800 p-6 rounded-base cursor-pointer hover:shadow-2xl relative overflow-hidden before:content-[] before:block before:w-[128px] before:h-[128px] before:bg-[#A3A3A3] before:blur-[100px] before:absolute before:right-0 before:bottom-0 hover:before:content-['*']">
            <div className=" w-full flex flex-col gap-3">
                <MdOutlineAccountBalanceWallet className="text-secondary-500 text-xl" />
                <Text size="sm" className="text-white leading-normal">
                    Conta corrente
                </Text>
            </div>
            <div className="flex flex-col gap-2 z-10">
                <Text size="sm" className="text-neutral-300">
                    Saldo disponível
                </Text>
                <div className="flex items-center justify-between">
                    <Heading size="2xl" className="text-white w-full truncate">
                        <strong>{data != null ? formatAmout(data.balance) : '---'}</strong>
                    </Heading>
                    <MdArrowForward className="text-secondary-500 opacity-0 text-xl -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                </div>
            </div>
        </div>
    );
}
