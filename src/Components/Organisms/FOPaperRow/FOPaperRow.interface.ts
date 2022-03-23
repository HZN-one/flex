import { ReactNode } from "react";

export interface IFOPaperRowProps {
  testID: `paper-row-${string}`;
  items: {
    title: string;
    children: ReactNode;
  }[];
  actions?: ReactNode;
  isStretch?: boolean;
}
