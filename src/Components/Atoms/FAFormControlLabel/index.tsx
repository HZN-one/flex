import React, { memo } from "react";
import { FormControlLabel } from "@mui/material";

import { IFAFormControlLabel } from "./FAFormControlLabel.interface";

export const FAFormControlLabel = memo((props: IFAFormControlLabel) => {
  const { testID, ...materialUIProps } = props;
  return <FormControlLabel data-testid={testID} {...materialUIProps} />;
});

FAFormControlLabel.displayName = "FAFormControlLabel";
