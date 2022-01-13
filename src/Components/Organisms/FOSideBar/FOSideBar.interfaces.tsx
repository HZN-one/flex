import { ReactChild } from "react";
import { DrawerProps } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";

export interface IFOSideBar extends DrawerProps {
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
