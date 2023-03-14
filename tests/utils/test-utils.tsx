/* eslint-disable import/export */
import { render, waitFor } from '@testing-library/react';

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options,
    });

const customWaitFor = async (callback: () => void, options?: Record<string, unknown>) => {
    await waitFor(callback, options);
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, customWaitFor as waitFor };
