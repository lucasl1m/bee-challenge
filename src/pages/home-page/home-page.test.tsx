import { rest } from 'msw';
import { server } from '../../../tests/mocks/server';
import { render, screen, waitFor } from '../../../tests/utils/test-utils';
import { Home } from './home-page';

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

describe('Home Page', () => {
    it('renders Home Page with data', async () => {
        render(<Home />);

        await waitFor(() => {
            const helloText = screen.queryByText(/Olá,/i);
            expect(helloText).toBeDefined();

            const nameText = screen.queryByText(/João/i);
            expect(nameText).toBeDefined();

            const accountsText = screen.queryByText(/Conta corrente/i);
            expect(accountsText).toBeDefined();

            const movementsText = screen.queryByText(/Últimas movimentações/i);
            expect(movementsText).toBeDefined();

            const offersText = screen.queryByText(/Ofertas para você/i);
            expect(offersText).toBeDefined();
        });
    });

    it('renders Home Page with error message', async () => {
        server.use(
            rest.get('/offers', async (req, res, ctx) => {
                return await res(ctx.status(500));
            }),
            rest.get('/moviments', async (req, res, ctx) => {
                return await res(ctx.status(500));
            }),
            rest.get('/accounts', async (req, res, ctx) => {
                return await res(ctx.status(500));
            }),
        );

        render(<Home />);

        // Wait for all three API requests to complete and error message to appear
        await waitFor(() => {
            const errorMessage = screen.queryByText(/Ops, algo deu errado !!!/i);
            expect(errorMessage).toBeDefined();
        });
    });
});
