import { IFAButton } from "@Atoms/FAButton/Button.interface";
import { IFMSearch } from "@Molecules/FMSearch/FMSearch.interface";
import { ReactChild } from "react";

interface IFOHeaderGeneral {
  testID: `header-${string}`;
  position: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logo?: boolean;
  headerType: "auth" | "default";
}
interface IFOHeaderAuth extends IFOHeaderGeneral {
  headerType: "auth";
  buttonLogin: Pick<IFAButton, "children" | "href" | "LinkComponent">;
  buttonRegister: Pick<IFAButton, "children" | "href" | "LinkComponent">;
}

interface IFOHeaderDefault extends IFOHeaderGeneral {
  headerType: "default";
  search?: Omit<IFMSearch, "testID">;
  title?: string;
  userAvatarSrc?: string;
  accountName?: string;
  endAdornmentMenuChildren?: ReactChild;
}

export type IFOHeader = IFOHeaderAuth | IFOHeaderDefault;
