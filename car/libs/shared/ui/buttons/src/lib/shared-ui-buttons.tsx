import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiButtonsProps {}

const StyledSharedUiButtons = styled.div`
  color: pink;
`;

export const SharedUiButtons = (props: SharedUiButtonsProps) => {
  return (
    <StyledSharedUiButtons>
      <h1>Welcome to shared-ui-buttons component!</h1>
    </StyledSharedUiButtons>
  );
};

export default SharedUiButtons;
