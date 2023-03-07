import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'xl' | '2xl';
    color?: 'neutral' | 'white';
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({
    size = 'xl',
    children,
    asChild = false,
    color = 'neutral',
    className,
}: HeadingProps): JSX.Element {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp
            className={clsx(
                'font-sans font-semibold',
                {
                    'text-xl': size === 'xl',
                    'text-2xl': size === '2xl',
                },
                {
                    'text-neutral-800': color === 'neutral',
                    'text-white': color === 'white',
                },
                className,
            )}
        >
            {children}
        </Comp>
    );
}
