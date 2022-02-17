import { ReactChild } from "react";
import { CardProps } from "@mui/material";

export interface IFMCard extends CardProps {
  testID: `card-${string}`;
  actions?: ReactChild;
  title?: string;
  isCollapsible?: boolean;
}
