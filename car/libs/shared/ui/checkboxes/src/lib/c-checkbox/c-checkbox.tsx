import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { StyledCCheckbox } from './c-checkbox.styles';

/* eslint-disable-next-line */
export interface CCheckboxProps {}

export const CCheckbox = (props: CCheckboxProps) => {
  return (
    <StyledCCheckbox>
      <h1>Checkboxs</h1>
      <p>
        <Checkbox
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />{' '}
        <Checkbox
          defaultChecked
          value="secondary"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Checkbox
          value="uncontrolled"
          inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        />
        <Checkbox
          disabled
          value="disabled"
          inputProps={{ 'aria-label': 'disabled checkbox' }}
        />
        <Checkbox
          disabled
          checked
          value="disabled checked"
          inputProps={{ 'aria-label': 'disabled checked checkbox' }}
        />
        <Checkbox
          defaultChecked
          value="indeterminate"
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="default"
          value="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
          defaultChecked
          size="small"
          value="small"
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      </p>
    </StyledCCheckbox>
  );
};

export default CCheckbox;
