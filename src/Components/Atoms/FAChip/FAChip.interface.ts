import { ChipProps } from "@mui/material";

export interface IFAChipProps extends ChipProps {
  testID: `chip-${string}`;
  label?: string;
  avatar?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  onDelete?: any;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  variant?: "filled" | "outlined";
}
