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
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        {/* <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        /> */}
        {/* END: routes */}
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
