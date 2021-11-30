import { ReactChild } from "react";
import { StandardTextFieldProps } from "@mui/material";

export interface IFMSearch extends StandardTextFieldProps {
  testID: `search-${string}`;
  label?: string;
  adornment?: ReactChild;
  helperText?: string;
  onChange?: any;
  value?: any;
  variants?: "standard" | "outlined" | "filled";
  type?: string;
}
