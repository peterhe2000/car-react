import React from 'react';
import { render } from '@testing-library/react';

import PricingSharedUtil from './pricing-shared-util';

describe(' PricingSharedUtil', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingSharedUtil />);
    expect(baseElement).toBeTruthy();
  });
});
