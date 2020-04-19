import React from 'react';
import { render } from '@testing-library/react';

import PricingPriceUiCalculator from './pricing-price-ui-calculator';

describe(' PricingPriceUiCalculator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingPriceUiCalculator />);
    expect(baseElement).toBeTruthy();
  });
});
