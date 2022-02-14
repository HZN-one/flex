import { SwitchProps } from "@mui/material";

export interface IFASwitch extends SwitchProps {
  label?: string;
  testID: `switch-${string}`;
  size?: "small" | "medium";
}
