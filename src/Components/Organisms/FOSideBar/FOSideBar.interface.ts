import { ReactChild } from "react";
import { DrawerProps, Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export interface IFOSideBarProps extends DrawerProps {
  testID: `side-bar-${string}`;
  open: boolean;
  isDrawerCloseable?: boolean;
  sections: {
    title: string;
    path: string;
    icon: JSX.Element;
    children?: {
      title: string;
      path: string;
    }[];
  }[];
  footer?: ReactChild;
  sx?: SxProps<Theme>;
  logo?: ReactChild;
}

export interface IStyle {
  color?: string;
}
