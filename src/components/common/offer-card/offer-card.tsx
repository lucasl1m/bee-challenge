import { MdArrowForward, MdStorefront } from 'react-icons/md';

import WomanAvatar from '../../../assets/woman-avatar.png';

import { Text } from '../text/text';
import { Button } from '../button/button';
import { formatAmout } from '../../../utils/format-amout';

interface OfferCardProps {
    title: string;
    subtitle: string;
    amount: number;
}

export function OfferCard({ title, subtitle, amount }: OfferCardProps): JSX.Element {
    return (
        <div className="max-w-sm rounded-base overflow-hidden group cursor-pointer bg-secondary-500 hover:shadow-2xl md:max-w-2x transition-all duration-300 ease-out">
            <div className="flex md:flex-col">
                <div className="flex-1 md:shrink-0">
                    <img
                        src={WomanAvatar}
                        alt=""
                        className="h-full w-full object-cover md:h-full group-hover:opacity-90"
                    />
                </div>

                <div className="flex flex-col px-6 py-4 gap-4 bg-neutral-200">
                    <div className="w-full flex flex-col gap-2">
                        <MdStorefront className="text-neutral-800 text-xl group-hover:hidden" />

                        <Text size="md" className="text-neutral-800">
                            {title}
                        </Text>

                        <div className="w-full flex-1 flex-col gap-2">
                            <Text size="sm" className="text-neutral-500">
                                {subtitle}
                            </Text>

                            <Text size="xl" className="text-neutral-800 leading-tight">
                                <strong>{formatAmout(amount)}</strong>
                            </Text>
                        </div>
                    </div>

                    <Button icon={<MdArrowForward className="text-neutral-800 text-md" />}>Ver oferta</Button>
                </div>
            </div>
        </div>
    );
}
