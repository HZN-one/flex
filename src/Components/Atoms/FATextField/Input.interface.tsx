import { ReactChild } from "react";
import { StandardTextFieldProps } from "@mui/material";

export interface IInput extends Omit<StandardTextFieldProps, "sx"> {
  testID: `input-${string}`;
  name?: string;
  adornment?: ReactChild;
  adornmentPosition?: "start" | "end";
  variants?: "standard" | "outlined" | "filled";
  required?: boolean;
  disabled?: boolean;
  size?: "small" | "medium";
  error?: boolean;
  placeholder?: string;
  helperText?: string;
}
