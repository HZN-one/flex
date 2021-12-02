import { FormControlProps } from "@mui/material";

export interface IFAFormControl extends FormControlProps {
  testID: `form-control-${string}`;
  control: React.ReactElement<any, any>;
  helperText: string;
}
