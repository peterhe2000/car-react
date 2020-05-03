import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiUiSharedStylesProps {}

const StyledSharedUiUiSharedStyles = styled.div`
  color: pink;
`;

export const SharedUiUiSharedStyles = (props: SharedUiUiSharedStylesProps) => {
  return (
    <StyledSharedUiUiSharedStyles>
      <h1>Welcome to shared-ui-ui-shared-styles component!</h1>
    </StyledSharedUiUiSharedStyles>
  );
};

export default SharedUiUiSharedStyles;
