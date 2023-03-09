import { render, screen } from '../../../../tests/utils/test-utils';
import { server } from '../../../../tests/mocks/server';
import { Home } from '../home-page';
import { rest } from 'msw';

beforeAll(() => {
    server.listen();
});
afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

describe('Home', () => {
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
    });
});
