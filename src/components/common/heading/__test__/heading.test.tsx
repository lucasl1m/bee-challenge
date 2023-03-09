import { render } from '../../../../../tests/utils/test-utils';
import { Heading } from '../heading';

it('should render a heading with the correct text', async () => {
    const { getByText } = render(<Heading>Test</Heading>);

    expect(getByText('Test')).toBeDefined();
});

it('should render a heading with the correct text and size', async () => {
    const { getByText } = render(<Heading size="2xl">Test</Heading>);

    expect(getByText('Test')).toBeDefined();
    expect(getByText('Test')).toHaveProperty('className', 'font-sans font-semibold text-2xl');
});
