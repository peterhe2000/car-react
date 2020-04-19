import React from 'react';
import { render } from '@testing-library/react';

import SharedUiCheckboxes from './shared-ui-checkboxes';

describe(' SharedUiCheckboxes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiCheckboxes />);
    expect(baseElement).toBeTruthy();
  });
});
