import React, { memo } from "react";
import { Button } from "@mui/material";

import { IFAButtonProps } from "./FAButton.interface";

export const FAButton = memo((props: IFAButtonProps) => {
  const { testID, ...materialUIProps } = props;

  return <Button data-testid={testID} {...materialUIProps} />;
});

FAButton.displayName = "FAButton";
