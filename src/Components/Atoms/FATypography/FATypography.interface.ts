import { TypographyProps } from "@mui/material";
import React from "react";

export type IFATypographyProps<C extends React.ElementType> = TypographyProps<
  C,
  { component?: C }
> & {
  testID: `typography-${string}`;
};
