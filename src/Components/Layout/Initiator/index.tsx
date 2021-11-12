import React, { FC } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Props } from './Initiator.interface';
import { createTheme } from '@mui/material/styles';

import { baseTheme } from '../../..';

export const ThemeProviderWrapper: FC<Props> = function ({
  children,
  replaceTheme,
}) {
  return (
    <ThemeProvider theme={replaceTheme ? createTheme({
      typography: {
        fontFamily: replaceTheme?.typography?.fontFamily || 'Inter',
      },
      palette: {
        primary: {
          main: replaceTheme?.palette?.primary?.main || '#DC3931',
          dark: replaceTheme?.palette?.primary?.dark || '#B02D27',
          light: replaceTheme?.palette?.primary?.light || '#E3615A',
        },
        secondary: {
          main: replaceTheme?.palette?.secondary?.main || '#525252',
          dark: replaceTheme?.palette?.secondary?.dark || '#262626',
          light: replaceTheme?.palette?.secondary?.light || '#737373',
        },
        contrastThreshold: replaceTheme?.palette?.contrastThreshold || 3,
        tonalOffset: replaceTheme?.palette?.tonalOffset || 0.2,
      },
    }) : baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

