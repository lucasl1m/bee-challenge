import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'xl' | '2xl';
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'xl', children, asChild = false, className }: HeadingProps): JSX.Element {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp
            className={clsx(
                'font-sans font-semibold',
                {
                    'text-xl': size === 'xl',
                    'text-2xl': size === '2xl',
                },
                className,
            )}
        >
            {children}
        </Comp>
    );
}
