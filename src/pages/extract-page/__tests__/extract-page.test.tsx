import { render } from '../../../../tests/utils/test-utils';
import { Extract } from '../extract-page';

it('should render the extract page', async () => {
    const { getByText } = render(<Extract />);
    expect(getByText('Extrato')).toBeDefined();
});
