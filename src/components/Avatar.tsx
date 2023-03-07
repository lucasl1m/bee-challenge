import * as AvatarRadix from '@radix-ui/react-avatar';

interface AvatarProps {
    image: string;
}

export function Avatar({ image }: AvatarProps): JSX.Element {
    return (
        <AvatarRadix.Root>
            <AvatarRadix.Image src={image} alt="Avatar do usuário" />
        </AvatarRadix.Root>
    );
}
