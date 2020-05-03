import React from 'react';
import {
  StyledSharedUiFooter,
  StyledFlexContainerFooter
} from './shared-ui-footer.styles';

/* eslint-disable-next-line */
export interface SharedUiFooterProps {}

export const SharedUiFooter = (props: SharedUiFooterProps) => {
  return (
    <StyledSharedUiFooter>
      <footer>
        <StyledFlexContainerFooter>
          <div className="footer-copyright flex-item-copyright text-center">
            &copy;Cars 2018
          </div>
        </StyledFlexContainerFooter>
      </footer>
    </StyledSharedUiFooter>
  );
};

export default SharedUiFooter;
