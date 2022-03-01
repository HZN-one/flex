import { RadioProps } from "@mui/material";

export interface IFARadioProps extends RadioProps {
  label?: string;
  testID: `radio-${string}`;
}
