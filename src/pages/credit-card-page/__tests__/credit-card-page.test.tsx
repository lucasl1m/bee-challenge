import { render } from '../../../../tests/utils/test-utils';
import { CreditCard } from '../credit-card-page';

it('should render the credit card page', async () => {
    const { getByText } = render(<CreditCard />);
    expect(getByText('Cartão de crédito')).toBeDefined();
});
