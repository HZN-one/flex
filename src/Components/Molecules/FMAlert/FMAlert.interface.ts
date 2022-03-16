import { AlertProps } from "@mui/material";

export interface IFMAlertProps extends AlertProps {
  testID: `alert-${string}`;
  title?: string;
}
