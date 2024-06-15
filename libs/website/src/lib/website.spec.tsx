import { render } from '@testing-library/react';

import Website from './website';

describe('Website', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Website />);
    expect(baseElement).toBeTruthy();
  });
});
