import { type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    block?: boolean;
    children: React.ReactNode;
    asChild?: boolean;
    icon?: React.ReactNode;
}

export function Button({
    children,
    block = false,
    size = 'md',
    asChild = false,
    icon,
    ...props
}: ButtonProps): JSX.Element {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                `flex flex-row items-center gap-4 bg-secondary-500 text-neutral-800 font-sans font-semibold rounded leading-normal hover:bg-secondary-300 transition-all duration-300 ease-out px-4 py-4 h-max text-sm outline-none w-max
                ${block ? 'group-hover:w-full group-hover:bg-secondary-300 justify-between' : ''}
                ${size === 'sm' ? 'text-sm' : ''}
                ${size === 'lg' ? 'text-md leading-snug' : ''}
            `,
            )}
            {...props}
        >
            {children}
            {icon}
        </Comp>
    );
}
