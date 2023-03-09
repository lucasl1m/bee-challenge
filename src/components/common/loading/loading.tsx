import * as Progress from '@radix-ui/react-progress';

import { useEffect, useState } from 'react';

export function Loading(): JSX.Element {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 25));
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Progress.Root value={progress} className="w-full h-2 overflow-hidden absolute right-0">
            <Progress.Indicator
                className="bg-secondary-500 w-full h-full transition-transform duration-500"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
}
