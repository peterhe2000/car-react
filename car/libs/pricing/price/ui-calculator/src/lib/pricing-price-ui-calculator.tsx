import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PricingPriceUiCalculatorProps {}

const StyledPricingPriceUiCalculator = styled.div`
  color: pink;
`;

export const PricingPriceUiCalculator = (
  props: PricingPriceUiCalculatorProps
) => {
  return (
    <StyledPricingPriceUiCalculator>
      <h1>Welcome to pricing-price-ui-calculator component!</h1>
    </StyledPricingPriceUiCalculator>
  );
};

export default PricingPriceUiCalculator;
