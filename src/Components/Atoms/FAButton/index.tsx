import React, { memo } from "react";
import { Button } from "@mui/material";
import { IFAButton } from "./Button.interface";

export const FAButton = memo((props: IFAButton) => {
  const { testID, ...materialUIProps } = props;

  return <Button data-testid={testID} {...materialUIProps} />;
});

FAButton.displayName = "FAButton";
