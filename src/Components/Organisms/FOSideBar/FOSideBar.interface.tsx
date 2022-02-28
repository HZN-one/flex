import React from "react";
import { IFAButton } from "../../Atoms/FAButton/FAButton.interface";
export interface IFOSideBar {
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
  buttonLogout: Pick<IFAButton, "children" | "onClick">;
}
