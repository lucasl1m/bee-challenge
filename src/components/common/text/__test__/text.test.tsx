import { render } from '../../../../../tests/utils/test-utils';
import { Text } from '../text';

it('should render a Text with the correct text', async () => {
    const { getByText } = render(<Text>Test</Text>);

    expect(getByText('Test')).toBeDefined();
});

it('should render a text with the correct text and size', async () => {
    const { getByText } = render(<Text size="lg">Test</Text>);

    expect(getByText('Test')).toBeDefined();
    expect(getByText('Test')).toHaveProperty('className', 'font-sans font-semibold outline-none text-lg');
});
