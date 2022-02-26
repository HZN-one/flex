import React, { memo } from "react";
import { FormControlLabel } from "@mui/material";

import { IFAFormControlLabelProps } from "./FAFormControlLabel.interface";

export const FAFormControlLabel = memo((props: IFAFormControlLabelProps) => {
  const { testID, ...materialUIProps } = props;
  return <FormControlLabel data-testid={testID} {...materialUIProps} />;
});

FAFormControlLabel.displayName = "FAFormControlLabel";
