import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PricingSharedUtilProps {}

const StyledPricingSharedUtil = styled.div`
  color: pink;
`;

export const PricingSharedUtil = (props: PricingSharedUtilProps) => {
  return (
    <StyledPricingSharedUtil>
      <h1>Welcome to pricing-shared-util component!</h1>
    </StyledPricingSharedUtil>
  );
};

export default PricingSharedUtil;
