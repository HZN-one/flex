import { ButtonProps } from "@mui/material";

export interface IButton extends ButtonProps {
  gradientColor?: "red" | "blue";
  testID: `button-${string}`;
}

export interface IStyle {
  gradientColor?: string;
}
