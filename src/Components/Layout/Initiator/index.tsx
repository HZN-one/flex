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
  const primaryPallete = replaceTheme?.palette?.primary;
  const secondaryPallete = replaceTheme?.palette?.secondary;
  const contrastThreshold = replaceTheme?.palette?.contrastThreshold;
  const tonalOffset = replaceTheme?.palette?.tonalOffset;

  return (
    <ThemeProvider
      theme={
        replaceTheme
          ? createTheme({
            typography: {
              fontFamily: replaceTheme?.typography?.fontFamily || 'Inter',
            },
            palette: {
              primary: {
                main: primaryPallete?.main || '#DC3931',
                dark: primaryPallete?.main
                  ? primaryPallete?.dark
                    ? primaryPallete?.dark
                    : undefined
                  : '#B02D27',
                light: primaryPallete?.main
                  ? primaryPallete?.light
                    ? primaryPallete?.light
                    : undefined
                  : '#E3615A',
              },
              secondary: {
                main: secondaryPallete?.main || '#525252',
                dark: secondaryPallete?.main
                  ? secondaryPallete?.dark
                    ? secondaryPallete?.dark
                    : undefined
                  : '#262626',
                light: secondaryPallete?.main
                  ? secondaryPallete?.light
                    ? secondaryPallete?.light
                    : undefined
                  : '#737373',
              },
              contrastThreshold: contrastThreshold || 3,
              tonalOffset: tonalOffset || 0.2,
            },
          })
          : baseTheme
      }
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
