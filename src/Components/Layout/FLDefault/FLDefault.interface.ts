import { ReactChild } from "react";
import { IFOHeaderDefault } from "../../Organisms/FOHeader/FOHeader.interface";
import { IFOSideBarProps } from "../../Organisms/FOSideBar/FOSideBar.interface";

export interface IFLDefault extends Omit<IFOSideBarProps, "testID"> {
  testID: `layout-default-${string}`;
  children: ReactChild;
  header: Pick<
    IFOHeaderDefault,
    | "search"
    | "title"
    | "userAvatarSrc"
    | "accountName"
    | "endAdornmentMenuChildren"
  >;
}
