import { CheckboxProps } from "@mui/material";

export interface IFACheckbox extends CheckboxProps {
  label?: string;
  testID: `checkbox-${string}`;
}
