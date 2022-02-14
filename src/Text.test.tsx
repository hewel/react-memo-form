import { render, screen } from '@testing-library/react';
import Text from './Text';

it('test Text', () => {
  render(<Text />);
  screen.findAllByText('Text');
});
