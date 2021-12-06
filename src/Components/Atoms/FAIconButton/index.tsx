import React, { memo } from "react";
import { IconButton } from "@mui/material";
import { IIconButton } from "./FAIconButton.interface";

export const FAIconButton = memo((props: IIconButton) => {
  const { testID, ...materialUIProps } = props;

  return (
    <IconButton data-testid={testID} {...materialUIProps}>
      {props.children}
    </IconButton>
  );
});

FAIconButton.displayName = "FAIconButton";
