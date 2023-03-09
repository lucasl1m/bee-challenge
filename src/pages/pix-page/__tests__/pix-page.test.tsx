import { render } from '../../../../tests/utils/test-utils';
import { Pix } from '../pix-page';

it('should render the pix page', async () => {
    const { getByText } = render(<Pix />);
    expect(getByText('Area Pix')).toBeDefined();
});
