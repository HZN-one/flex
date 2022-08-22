import { SelectChangeEvent } from "@mui/material";
import { ReactChild, ReactNode } from "react";
import { IFAButtonProps } from "../../Atoms/FAButton/FAButton.interface";
import { IFMSearchProps } from "../../Molecules/FMSearch/FMSearch.interface";

interface IFOHeaderGeneral {
  testID: `header-${string}`;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  logo?: boolean;
  companyLogo?: ReactChild;
  headerType: "auth" | "default";
  language?: {
    value: "EN" | "ID";
    onChange?: (
      event: SelectChangeEvent<"EN" | "ID">,
      child: ReactNode
    ) => void;
  };
}
export interface IFOHeaderAuth extends IFOHeaderGeneral {
  headerType: "auth";
  buttonLogin: Pick<IFAButtonProps, "children" | "href">;
  buttonRegister: Pick<IFAButtonProps, "children" | "href">;
  linkComponent: React.ElementType;
}

export interface IFOHeaderDefault extends IFOHeaderGeneral {
  headerType: "default";
  search?: Omit<IFMSearchProps, "testID">;
  title?: string;
  userAvatarSrc?: string;
  accountName?: string;
  endAdornmentMenuChildren?: ReactChild;
}

export type IFOHeaderProps = IFOHeaderAuth | IFOHeaderDefault;
