import { FormControlLabelProps } from "@mui/material";

export interface IFAFormControlLabel extends FormControlLabelProps {
  testID: `ControlLabel-${string}`;
  control: React.ReactElement<any, any>;
  label: string;
  size?: "small" | "medium";
}
