import React, { memo } from "react";
import { Link } from "@mui/material";

import { IFALinkProps } from "./FALink.interface";

export const FALink = memo((props: IFALinkProps) => {
  const { testID, ...materialUIProps } = props;

  return (
    <Link data-testid={testID} {...materialUIProps}>
      {props.children}
    </Link>
  );
});

FALink.displayName = "FALink";
