import React, { memo } from "react";
import { Button } from "@mui/material";
import { IButton } from "./Button.interface";

export const FAButton = memo((props: IButton) => {
  const { testID, ...materialUIProps } = props;

  return <Button data-testid={testID} {...materialUIProps} />;
});

FAButton.displayName = "FAButton";
