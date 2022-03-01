import React from "react";
import { IFAButtonProps } from "../../Atoms/FAButton/Button.interface";

export interface IFOSideBarProps {
  testID: `sidebar-${string}`;
  linkComponent: React.ElementType;
  menu: {
    title: string;
    path?: string;
    icon: string;
    subMenu?: {
      title: string;
      path: string;
    }[];
  }[];
  footerMenu: {
    title: string;
    path: string;
    icon: string;
  }[];
  buttonLogout: Pick<IFAButtonProps, "children" | "onClick">;
}
