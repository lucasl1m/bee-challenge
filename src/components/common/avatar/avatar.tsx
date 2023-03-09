import * as AvatarRadix from '@radix-ui/react-avatar';

export interface AvatarProps {
    src: string;
}

export function Avatar({ src }: AvatarProps): JSX.Element {
    return (
        <AvatarRadix.Root>
            <AvatarRadix.Image src={src} alt="Avatar do usuário" className="h-9 md:h-11 lg:h-14 rounded-pill" />
        </AvatarRadix.Root>
    );
}
