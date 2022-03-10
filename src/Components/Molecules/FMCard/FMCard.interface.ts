import { ReactNode } from "react";
import { CardProps, CardHeaderProps, CardContentProps } from "@mui/material";

export interface IFMCardProps extends CardProps {
  testID: `card-${string}`;
  actions?: Omit<CardContentProps, "sx">;
  content?: Omit<CardContentProps, "sx" | "children">;
  header?: Omit<CardHeaderProps, "sx">;
  children?: ReactNode;
}
