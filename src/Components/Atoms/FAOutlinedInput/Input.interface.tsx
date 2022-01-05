import { ReactChild } from "react";
import { InputProps } from "@mui/material";

export interface IInput extends InputProps {
  testID: `input-${string}`;
  name?: string;
  label: string;
  adornment?: ReactChild;
  adornmentPosition?: "start" | "end";
  variants?: "standard" | "outlined" | "filled";
  helperText?: string;
  focusedText?: string;
}
