import { render } from '@testing-library/react';

import EventWebsite from './event-website';

describe('EventWebsite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventWebsite />);
    expect(baseElement).toBeTruthy();
  });
});
