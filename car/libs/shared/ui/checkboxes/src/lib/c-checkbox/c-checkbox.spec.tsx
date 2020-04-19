import React from 'react';
import { render } from '@testing-library/react';

import CCheckbox from './c-checkbox';

describe(' CCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
