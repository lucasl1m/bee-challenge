import * as Popover from '@radix-ui/react-popover';

import { MdMenu } from 'react-icons/md';

export function Menu(): JSX.Element {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <button className="flex items-center justify-center p-2 rounded-pill bg-neutral-200 hover:bg-neutral-300 md:hidden">
                    <MdMenu className="text-lg text-neutral-800 md:text-xl" />
                </button>
            </Popover.Trigger>
        </Popover.Root>
    );
}
