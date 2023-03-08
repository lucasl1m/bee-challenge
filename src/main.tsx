import React from 'react';
import ReactDOM from 'react-dom/client';

import '../src/styles/global.css';

import { AppRoutes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>,
);
