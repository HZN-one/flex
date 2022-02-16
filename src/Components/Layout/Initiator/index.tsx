import React, { FC } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Props } from "./Initiator.interface";

import { baseTheme } from "../../..";

export const ThemeProviderWrapper: FC<Props> = function (props) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
