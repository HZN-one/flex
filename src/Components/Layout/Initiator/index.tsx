import React, { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { baseTheme } from "../../..";

import { Props } from "./Initiator.interface";

export const ThemeProviderWrapper: FC<Props> = function (props) {
  return (
    <ThemeProvider theme={baseTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {props.children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
