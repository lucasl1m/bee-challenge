import * as Popover from '@radix-ui/react-popover';

import { MdOutlineNotificationsNone } from 'react-icons/md';

export function Notifications(): JSX.Element {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <button className="flex items-center justify-center p-2 rounded-pill bg-neutral-200 hover:bg-neutral-300">
                    <MdOutlineNotificationsNone className="text-lg text-neutral-800 md:text-xl" />
                </button>
            </Popover.Trigger>
        </Popover.Root>
    );
}
