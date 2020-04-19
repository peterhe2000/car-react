import React from 'react';
import Button from '@material-ui/core/Button';
import {
  StyledCButton,
  useContainerButtonStyles,
  useOutlinedButtonStyles
} from './c-button.styles';

/* eslint-disable-next-line */
export interface CButtonProps {
  style:
    | 'filled-button'
    | 'clear-button'
    | 'stroked-button'
    | 'dashed-button'
    | 'link-button';
}

export const CButton = (props: CButtonProps) => {
  const containerButtonClasses = useContainerButtonStyles({});
  const outlinedButtonClasses = useOutlinedButtonStyles({});

  return (
    <StyledCButton>
      <h1>{props.style}</h1>
      <p>
        {props.style === 'filled-button' && (
          <Button
            variant="contained"
            color="primary"
            classes={{
              root: containerButtonClasses.root,
              containedPrimary: containerButtonClasses.containedPrimary
            }}
          >
            filled-button
          </Button>
        )}
        {props.style === 'stroked-button' && (
          <Button
            variant="outlined"
            color="primary"
            classes={{
              root: outlinedButtonClasses.root,
              containedPrimary: outlinedButtonClasses.containedPrimary,
              outlinedPrimary: outlinedButtonClasses.outlinedPrimary,
              label: outlinedButtonClasses.label
            }}
          >
            stroked-button
          </Button>
        )}
      </p>
    </StyledCButton>
  );
};

export default CButton;
