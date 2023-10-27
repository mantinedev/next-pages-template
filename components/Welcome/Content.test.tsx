import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Content />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
