import { HTMLAttributes, ReactChild } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}
