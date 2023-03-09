import { NavLink } from 'react-router-dom';

import { usePath } from '../../../hooks/use-path';

import clsx from 'clsx';

export interface ItemMenuProps {
    path: string;
    name: string;
}

export function ItemMenu({ path, name }: ItemMenuProps): JSX.Element {
    const isActive = usePath() === path;

    return (
        <NavLink
            to={path}
            className={clsx('flex items-center px-4 py-2 text-sm font-semibold rounded hover:text-gray-800 w-max', {
                'bg-neutral-200 text-gray-800': isActive,
                'text-gray-500 hover:bg-neutral-200': !isActive,
            })}
        >
            {name}
        </NavLink>
    );
}
