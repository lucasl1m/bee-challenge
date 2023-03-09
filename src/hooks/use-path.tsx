import { useLocation } from 'react-router-dom';

export function usePath(): string {
    const location = useLocation();

    return location.pathname;
}
