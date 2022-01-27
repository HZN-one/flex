import { CardProps } from "@mui/material";
import { ReactChild } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface IFOCardWithTextField extends CardProps {
  testID: `card-${string}`;
  actions?: ReactChild;
  onSubmit?: React.FormEventHandler;
  form?: ReactChild;
  title?: string;
  subtitle?: ReactChild | string;
  firstLink?: ReactChild | string;
  secondLink?: ReactChild | string;
  sx?: SxProps<Theme>;
  buttonPrimary?: ReactChild | string;
  buttonSecondary?: string;
  option?: React.ReactElement<any, any>;
  optionLabel?: string;
}
