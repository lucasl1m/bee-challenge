import { MdArrowForward } from 'react-icons/md';
import { render } from '../../../../../tests/utils/test-utils';
import { Button } from '../button';

it('should render a button with the correct text', async () => {
    const { getByText } = render(<Button>Test</Button>);

    expect(getByText('Test')).toBeDefined();
});

it('should render a button with the correct text and icon', async () => {
    const { getByTestId, getByText } = render(
        <Button icon={<MdArrowForward className="text-neutral-800 text-md" data-testid="icon" />}>Ver ofertas</Button>,
    );

    expect(getByTestId('icon')).toBeDefined();
    expect(getByText('Ver ofertas')).toBeDefined();
});
