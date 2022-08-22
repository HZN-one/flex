import { ReactNode } from "react";
import { IFOHeaderDefault } from "../../Organisms/FOHeader/FOHeader.interface";
import { IFOSideBarProps } from "../../Organisms/FOSideBar/FOSideBar.interface";

export interface IFLDefaultProps extends Omit<IFOSideBarProps, "testID"> {
  testID: `layout-default-${string}`;
  children: ReactNode;
  header: Pick<
    IFOHeaderDefault,
    | "language"
    | "search"
    | "title"
    | "userAvatarSrc"
    | "accountName"
    | "endAdornmentMenuChildren"
  >;
}
