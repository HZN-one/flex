import { ReactChild } from "react";
import { InputProps } from "@mui/material";

export interface IInput extends InputProps {
  testID: `input-${string}`;
  label?: string;
  variant?: "standard" | "outlined" | "filled";
  helperText?: ReactChild | JSX.Element | string;
  focusedText?: ReactChild;
  hook?: any;
  error?: boolean;
  required?: boolean;
  type?: string;
  className?: string;
  placeholder?: string;
  htmlFor?: string;
  shrink?: boolean;
  endAdornment?: any;
  startAdornment?: any;
}
