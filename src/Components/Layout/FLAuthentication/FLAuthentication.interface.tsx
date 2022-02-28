import { ReactChild } from "react";
import { IFOHeaderAuth } from "../../Organisms/FOHeader/FOHeader.interface";

export interface IFLAuthentication {
  testID: `layout-authentication-${string}`;
  children: ReactChild;
  childrenGridWidth: number;
  isCenter: boolean;
  header: Pick<
    IFOHeaderAuth,
    "buttonLogin" | "buttonRegister" | "linkComponent"
  >;
}
