import { ReactChild } from "react";

import { IFAButtonProps } from "../../Atoms/FAButton/Button.interface";
import { IFMSearchProps } from "../../Molecules/FMSearch/FMSearch.interface";

interface IFOHeaderGeneral {
  testID: `header-${string}`;
  position: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logo?: boolean;
  headerType: "auth" | "default";
}
interface IFOHeaderAuth extends IFOHeaderGeneral {
  headerType: "auth";
  buttonLogin: Pick<IFAButtonProps, "children" | "href" | "LinkComponent">;
  buttonRegister: Pick<IFAButtonProps, "children" | "href" | "LinkComponent">;
}

// create interface props when headerType is standar, other props are optional
interface IFOHeaderDefault extends IFOHeaderGeneral {
  headerType: "default";
  search?: Omit<IFMSearchProps, "testID">;
  title?: string;
  userAvatarSrc?: string;
  companyName?: string;
  endAdornmentMenuChildren?: ReactChild;
}

export type IFOHeader = IFOHeaderAuth | IFOHeaderDefault;
