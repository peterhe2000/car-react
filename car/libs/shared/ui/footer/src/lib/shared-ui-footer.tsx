import React from 'react';
import {
  StyledSharedUiFooter,
  StyledFlexContainerFooter,
  StyledFlexItemCopyright
} from './shared-ui-footer.styles';

/* eslint-disable-next-line */
export interface SharedUiFooterProps {}

export const SharedUiFooter = (props: SharedUiFooterProps) => {
  return (
    <StyledSharedUiFooter>
      <footer>
        <StyledFlexContainerFooter>
          <StyledFlexItemCopyright>&copy;Cars 2018</StyledFlexItemCopyright>
        </StyledFlexContainerFooter>
      </footer>
    </StyledSharedUiFooter>
  );
};

export default SharedUiFooter;
