import { render, screen } from '../../../../tests/utils/test-utils';
import { server } from '../../../../tests/mocks/server';
import { Home } from '../home-page';
import { rest } from 'msw';
import { accountsData, movimentsData, offersData } from '../../../../tests/mocks/handlers';

beforeAll(() => {
    server.listen();
});

it('should render the correct data on successful handles API call', async () => {
    // Add a handler for a successful API call
    server.use(
        rest.get('/dashboard', async (req, res, ctx) => {
            return await res(ctx.status(200), ctx.json(accountsData));
        }),

        rest.get('/offers', async (req, res, ctx) => {
            return await res(ctx.status(200), ctx.json(offersData));
        }),

        rest.get('/moviments', async (req, res, ctx) => {
            return await res(ctx.status(200), ctx.json(movimentsData));
        }),
    );

    render(<Home />);
    // Wait for API call to resolve
    await screen.findByText(/Olá, /i);

    // Assert that the data is being rendered correctly
    expect(screen.getByText(/Olá, /i)).toBeDefined();
    expect(screen.getByText(/R\$ 1.000,00/i)).toBeDefined();
});

afterAll(() => {
    server.close();
});

it('should render an error message on failed API call', async () => {
    // Add a handler for a failed API call
    server.use(
        rest.get('/dashboard', async (req, res, ctx) => {
            return await res(ctx.status(500));
        }),
    );

    render(<Home />);

    // Wait for API call to reject
    await screen.findByText(/Ops, algo deu errado !!!/i);

    // Assert that the error message is being rendered correctly
    expect(screen.getByText(/Ops, algo deu errado !!!/i)).toBeDefined();

    // Add more assertions as needed
});
