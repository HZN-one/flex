import { ReactChild } from "react";
import { IFOHeaderDefault } from "../../Organisms/FOHeader/FOHeader.interface";
import { IFOSideBar } from "../../Organisms/FOSideBar/FOSideBar.interface";

export interface IFLDefault extends Omit<IFOSideBar, "testID"> {
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
