import React, { FC } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Props } from "./Initiator.interface";
// import { createTheme } from '@mui/material/styles';

import { baseTheme } from "../../..";

export const ThemeProviderWrapper: FC<Props> = function (props) {
  // const primaryPallete = replaceTheme?.palette?.primary;
  // const secondaryPallete = replaceTheme?.palette?.secondary;
  // const infoPallete = replaceTheme?.palette?.info;
  // const errorPallete = replaceTheme?.palette?.error;
  // const warningPallete = replaceTheme?.palette?.warning;
  // const successPallete = replaceTheme?.palette?.success;
  // const contrastThreshold = replaceTheme?.palette?.contrastThreshold;
  // const tonalOffset = replaceTheme?.palette?.tonalOffset;

  return (
    <ThemeProvider theme={baseTheme(props)}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
