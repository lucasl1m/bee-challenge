import { formatAmout } from '../../../utils/format-amout';
import { MdArrowForward, MdOutlineCreditCard } from 'react-icons/md';
import { Heading } from '../heading/heading';

import { Text } from '../text/text';
import { CreditCard } from '../../../pages/home-page/types';

export interface InvoiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: CreditCard | undefined;
}

export function InvoiceCard({ data }: InvoiceCardProps): JSX.Element {
    return (
        <div className="flex flex-1 flex-col gap-12 group bg-neutral-800 p-6 rounded-base cursor-pointer hover:shadow-2xl relative overflow-hidden before:content-[] before:block before:w-[128px] before:h-[128px] before:bg-[#A3A3A3] before:blur-[100px] before:absolute before:right-0 before:bottom-0 hover:before:content-['*']">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                    <MdOutlineCreditCard className="text-secondary-500 text-xl" />
                    <Text size="sm" className="text-white leading-normal">
                        Cartão
                    </Text>
                </div>
                <div className="flex bg-secondary-500 rounded p-2 w-max h-max">
                    <Text size="sm" className="text-neutral-800">
                        Fatura aberta
                    </Text>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
                <Text size="sm" className="text-neutral-300">
                    Fatura atual
                </Text>

                <div className="flex items-center justify-between">
                    <Heading size="2xl" className="text-white w-full truncate">
                        <strong>{data != null ? formatAmout(data.currentInvoice) : '---'}</strong>
                    </Heading>
                    <MdArrowForward className="text-secondary-500 opacity-0 text-xl -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                </div>
            </div>
        </div>
    );
}
