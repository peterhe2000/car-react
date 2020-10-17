import React, { useState } from 'react';
import { StyledApp } from './app.styles';
import { ThemeProvider } from 'styled-components';

import { theme } from '@car/shared/ui/ui-shared-styles';
import { SharedUiHeader } from '@car/shared/ui/header';
import { SharedUiFooter } from '@car/shared/ui/footer';
import { CButton } from '@car/shared/ui/buttons';
import { CCheckbox } from '@car/shared/ui/checkboxes';
import { PricingDapFeatureDap } from '@car/pricing/dap/feature-dap';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  const [carState, setCarState] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <SharedUiHeader />
        <header className="flex">
          <Logo width="75" height="75" />
          <h1>Welcome to pricing!</h1>
        </header>
        <main>
          <PricingDapFeatureDap></PricingDapFeatureDap>
        </main>
        <SharedUiFooter />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
