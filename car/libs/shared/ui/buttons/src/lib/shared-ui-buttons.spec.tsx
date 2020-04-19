import React from 'react';
import { render } from '@testing-library/react';

import SharedUiButtons from './shared-ui-buttons';

describe(' SharedUiButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiButtons />);
    expect(baseElement).toBeTruthy();
  });
});
