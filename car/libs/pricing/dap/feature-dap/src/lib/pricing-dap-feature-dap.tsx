import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PricingDapFeatureDapProps {}

const StyledPricingDapFeatureDap = styled.div`
  color: pink;
`;

export const PricingDapFeatureDap = (props: PricingDapFeatureDapProps) => {
  return (
    <StyledPricingDapFeatureDap>
      <h1>Welcome to pricing-dap-feature-dap component!</h1>
    </StyledPricingDapFeatureDap>
  );
};

export default PricingDapFeatureDap;
