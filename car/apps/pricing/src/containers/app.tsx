import React, { useState, useEffect } from 'react';
import { StyledApp } from './app.styles';
import { ThemeProvider } from 'styled-components';

import { theme } from '@car/shared/ui/ui-shared-styles';
import { SharedUiHeader } from '@car/shared/ui/header';
import { SharedUiFooter } from '@car/shared/ui/footer';
import { CButton } from '@car/shared/ui/buttons';
import { CCheckbox } from '@car/shared/ui/checkboxes';
import { PricingDapFeatureDap } from '@car/pricing/dap/feature-dap';
import PricesContainer from './PricesContainer';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

export const App = () => {
  const [carState, setCarState] = useState({});
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <SharedUiHeader />
        <main>
          <PricesContainer></PricesContainer>
          {/* <PricingDapFeatureDap></PricingDapFeatureDap> */}
        </main>
        <SharedUiFooter />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
