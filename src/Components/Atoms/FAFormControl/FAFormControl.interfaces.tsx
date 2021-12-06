import { FormControlProps } from "@mui/material";

export interface IFAFormControl extends FormControlProps {
  testID: `form-control-${string}`;
  helperText: string;
}
