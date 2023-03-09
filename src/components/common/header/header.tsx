import UserAvatar from '../../../assets/user-avatar.png';

import { Avatar } from '../avatar/avatar';
import { Notifications } from '../notification-button/notification-button';
import { Menu } from '../menu-button/menu-button';

import { ItemMenu } from '../item-menu/item-menu';

import { Logo } from '../../icon/logo';

import { routes } from './constants';

export function Header(): JSX.Element {
    return (
        <header className="w-full h-max flex flex-row items-center justify-between p-4 border-b-[1px] border-solid border-b-neutral-300 md:p-6">
            <Logo />

            <nav className="hidden md:flex">
                <ul className="flex flex-row items-center gap-4">
                    {routes.map((route) => (
                        <li key={route.path}>
                            <ItemMenu path={route.path} name={route.name} />
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-2 md:gap-6 lg:gap-6">
                <Notifications />
                <Menu />
                <Avatar src={UserAvatar} />
            </div>
        </header>
    );
}
