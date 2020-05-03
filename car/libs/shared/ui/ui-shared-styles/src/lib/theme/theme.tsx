import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    default: '#0653b6',
    fontColour: 'purple',
    grayDark: '#262626',
    graySlightlyDark: '#6a6e6f',
    gray: '#666',
    grayMedium: '#9b9b9b',
    grey: '#9F9F9F',
    grayLight: '#bbb',
    grayLighter: '#e6e6e6',
    whiteConcrete: '#f2f2f2',
    brandPrimary: '#1c69d4',
    brandSecondary: '#0653b6',
    primaryColor: '#0653b6',
    darkGrey: '#666'
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
