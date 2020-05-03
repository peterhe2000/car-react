import React from 'react';
import { render } from '@testing-library/react';

import SharedUiUiSharedStyles from './shared-ui-ui-shared-styles';

describe(' SharedUiUiSharedStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiUiSharedStyles />);
    expect(baseElement).toBeTruthy();
  });
});
