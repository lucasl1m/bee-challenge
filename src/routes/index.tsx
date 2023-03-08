import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Extract } from '../pages/Extract';
import { Pix } from '../pages/Pix';
import { CreditCard } from '../pages/CreditCard';

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Header />
            <main className="min-h-full flex-1 mx-4 my-4 lg:mx-16 lg:text-sm lg:mt-6 md:mx-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/extract" element={<Extract />} />
                    <Route path="/pix" element={<Pix />} />
                    <Route path="/credit-card" element={<CreditCard />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
