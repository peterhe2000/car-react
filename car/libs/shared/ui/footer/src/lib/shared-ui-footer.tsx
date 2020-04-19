import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiFooterProps {}

const StyledSharedUiFooter = styled.div`
  color: pink;
`;

export const SharedUiFooter = (props: SharedUiFooterProps) => {
  return (
    <StyledSharedUiFooter>
      <h1>Welcome to shared-ui-footer component!</h1>
    </StyledSharedUiFooter>
  );
};

export default SharedUiFooter;
