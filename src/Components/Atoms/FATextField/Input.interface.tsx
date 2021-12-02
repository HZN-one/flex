import { ReactChild } from "react";
import { StandardTextFieldProps } from "@mui/material";

export interface IInput extends StandardTextFieldProps {
  testID: `input-${string}`;
  name?: string;
  adornment?: ReactChild;
  adornmentPosition?: "start" | "end";
  variants?: "standard" | "outlined" | "filled";
}
