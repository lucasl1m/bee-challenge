import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Extract } from '../pages/extract-page/extract-page';
import { Pix } from '../pages/pix-page/pix-page';
import { CreditCard } from '../pages/credit-card-page/credit-card-page';
import { Home } from '../pages/home-page/home-page';

import { Header } from '../components/common/header/header';

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Header />

            <main className="min-h-full flex-1 mx-4 lg:mx-16 lg:text-sm md:mx-16">
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
