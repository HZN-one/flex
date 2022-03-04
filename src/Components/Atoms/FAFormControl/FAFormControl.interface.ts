import { FormControlProps } from "@mui/material";

export interface IFAFormControlProps extends FormControlProps {
  testID: `form-control-${string}`;
  helperText?: string;
}
