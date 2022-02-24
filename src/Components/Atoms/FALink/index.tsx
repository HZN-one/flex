import React, { memo } from "react";
import { Link } from "@mui/material";
import { ILink } from "./FALink.interface";

export const FALink = memo((props: ILink) => {
  const { testID, ...materialUIProps } = props;

  return (
    <Link data-testid={testID} {...materialUIProps}>
      {props.children}
    </Link>
  );
});

FALink.displayName = "FALink";
