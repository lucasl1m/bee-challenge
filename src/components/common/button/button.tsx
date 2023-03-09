import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    asChild?: boolean;
    icon?: React.ReactNode;
}

export function Button({ children, asChild = false, icon, ...props }: ButtonProps): JSX.Element {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className="
                flex flex-row items-center gap-4 bg-secondary-500 text-neutral-800 font-sans font-semibold rounded leading-normal hover:bg-secondary-300 transition-all duration-300 ease-out px-4 py-4 h-max text-sm outline-none w-max group-hover:w-full group-hover:bg-secondary-300 group-hover:justify-between"
            {...props}
        >
            {children}
            {icon}
        </Comp>
    );
}
