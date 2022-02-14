import { RadioProps } from "@mui/material";

export interface IFARadio extends RadioProps {
  label?: string;
  testID: `radio-${string}`;
  size?: "small" | "medium";
}
