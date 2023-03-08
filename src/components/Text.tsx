import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({ size = 'md', children, asChild = false, className }: TextProps): JSX.Element {
    const Comp = asChild ? Slot : 'p';

    return (
        <Comp
            className={clsx(
                'font-sans font-semibold outline-none',
                {
                    'text-sm': size === 'sm',
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                },
                className,
            )}
        >
            {children}
        </Comp>
    );
}
