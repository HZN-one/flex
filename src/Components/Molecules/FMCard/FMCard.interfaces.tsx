import { ReactChild } from "react";
import { CardProps } from "@mui/material";

export interface IFMCard extends CardProps {
  testID: `card-${string}`;
  content?: ReactChild;
  actions?: ReactChild;
}
