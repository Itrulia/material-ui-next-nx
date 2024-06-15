import { render } from '@testing-library/react';

import PageWebsite from './page-website';

describe('PageWebsite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageWebsite />);
    expect(baseElement).toBeTruthy();
  });
});
