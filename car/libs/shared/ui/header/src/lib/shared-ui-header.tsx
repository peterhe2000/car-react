import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiHeaderProps {}

const StyledSharedUiHeader = styled.div`
  color: pink;
`;

export const SharedUiHeader = (props: SharedUiHeaderProps) => {
  return (
    <StyledSharedUiHeader>
      <h1>This is header</h1>
    </StyledSharedUiHeader>
  );
};

export default SharedUiHeader;
