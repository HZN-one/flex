import { ReactNode } from "react";
import { CardProps, TypographyTypeMap } from "@mui/material";

export interface IFMCardProps extends CardProps {
  testID: `card-${string}`;
  actions?: ReactNode;
  title?: string;
  titleTypographyVariant?: TypographyTypeMap["props"]["variant"];
  subtitle?: string | ReactNode;
  subtitleTypographyVariant?: TypographyTypeMap["props"]["variant"];
}
