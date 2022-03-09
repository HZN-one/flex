import React from "react";

import { IFOHeaderDefault } from "../../Organisms/FOHeader/FOHeader.interface";
import { IFOSideBarProps } from "../../Organisms/FOSideBar/FOSideBar.interface";

export interface IFLDefaultProps extends Omit<IFOSideBarProps, "testID"> {
  testID: `layout-default-${string}`;
  children: React.ReactNode;
  header: Pick<
    IFOHeaderDefault,
    | "search"
    | "title"
    | "userAvatarSrc"
    | "accountName"
    | "endAdornmentMenuChildren"
  >;
}
