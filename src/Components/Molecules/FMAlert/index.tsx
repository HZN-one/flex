import React, { memo } from "react";
import { Alert, AlertTitle } from "@mui/material";

import { IFMAlertProps } from "./FMAlert.interface";

export const FMAlert = memo((props: IFMAlertProps) => {
  const { testID, title, children, ...materialUIProps } = props;
  return (
    <Alert data-testid={testID} {...materialUIProps}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
});

FMAlert.displayName = "FMAlert";
