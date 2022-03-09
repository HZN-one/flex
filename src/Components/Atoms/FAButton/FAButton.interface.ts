import { ButtonProps } from "@mui/material";

export interface IFAButtonProps extends ButtonProps {
  testID: `button-${string}`;
  isLoading?: boolean;
}
