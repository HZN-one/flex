import React from "react";

import { IFOHeaderAuth } from "../../Organisms/FOHeader/FOHeader.interface";

export interface IFLAuthenticationProps {
  testID: `layout-authentication-${string}`;
  children: React.ReactNode;
  childrenGridWidth: number;
  isCenter: boolean;
  header: Pick<
    IFOHeaderAuth,
    "buttonLogin" | "buttonRegister" | "linkComponent" | "logo"
  >;
}
