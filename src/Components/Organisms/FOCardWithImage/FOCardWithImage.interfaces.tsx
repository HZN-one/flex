import { CardProps } from "@mui/material";
import { ReactChild } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface IFOCardWithImage extends CardProps {
  testID: `card-${string}`;
  imageUrl: string;
  actions?: ReactChild;
  title?: string;
  subtitle?: string;
  sx?: SxProps<Theme>;
  buttonPrimary?: string;
  buttonSecondary?: string;
  option?: React.ReactElement<any, any>;
  optionLabel?: string;
  handleButtonPrimary?: () => void;
  handleButtonSecondary?: () => void;
}
