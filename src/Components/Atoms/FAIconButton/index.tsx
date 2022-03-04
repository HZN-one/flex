import React, { memo } from "react";
import { IconButton } from "@mui/material";
import { IFAIconButtonProps } from "./FAIconButton.interface";

export const FAIconButton = memo((props: IFAIconButtonProps) => {
  const { testID, ...materialUIProps } = props;

  return (
    <IconButton data-testid={testID} {...materialUIProps}>
      {props.children}
    </IconButton>
  );
});

FAIconButton.displayName = "FAIconButton";
