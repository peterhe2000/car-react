import React from 'react';
import { render } from '@testing-library/react';

import CButton from './c-button';

describe(' CButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CButton />);
    expect(baseElement).toBeTruthy();
  });
});
