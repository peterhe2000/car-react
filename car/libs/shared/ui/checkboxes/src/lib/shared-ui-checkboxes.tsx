import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiCheckboxesProps {}

const StyledSharedUiCheckboxes = styled.div`
  color: pink;
`;

export const SharedUiCheckboxes = (props: SharedUiCheckboxesProps) => {
  return (
    <StyledSharedUiCheckboxes>
      <h1>Welcome to shared-ui-checkboxes component!</h1>
    </StyledSharedUiCheckboxes>
  );
};

export default SharedUiCheckboxes;
