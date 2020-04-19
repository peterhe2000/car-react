import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PricingProps {}

const StyledPricing = styled.div`
  color: pink;
`;

export const Pricing = (props: PricingProps) => {
  return (
    <StyledPricing>
      <h1>Welcome to pricing component!</h1>
    </StyledPricing>
  );
};

export default Pricing;
