import { IFAButton } from "../../Atoms/FAButton/FAButton.interface";
import { IFMSearch } from "../../Molecules/FMSearch/FMSearch.interface";
import { ReactChild } from "react";

interface IFOHeaderGeneral {
  testID: `header-${string}`;
  position: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logo?: boolean;
  headerType: "auth" | "default";
}
export interface IFOHeaderAuth extends IFOHeaderGeneral {
  headerType: "auth";
  buttonLogin: Pick<IFAButton, "children" | "href">;
  buttonRegister: Pick<IFAButton, "children" | "href">;
  linkComponent: React.ElementType;
}

export interface IFOHeaderDefault extends IFOHeaderGeneral {
  headerType: "default";
  search?: Omit<IFMSearch, "testID">;
  title?: string;
  userAvatarSrc?: string;
  accountName?: string;
  endAdornmentMenuChildren?: ReactChild;
}

export type IFOHeader = IFOHeaderAuth | IFOHeaderDefault;
