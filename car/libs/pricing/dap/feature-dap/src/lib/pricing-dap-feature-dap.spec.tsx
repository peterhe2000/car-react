import React from 'react';
import { render } from '@testing-library/react';

import PricingDapFeatureDap from './pricing-dap-feature-dap';

describe(' PricingDapFeatureDap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingDapFeatureDap />);
    expect(baseElement).toBeTruthy();
  });
});
