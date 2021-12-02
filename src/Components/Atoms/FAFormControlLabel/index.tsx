import React, { memo } from "react";
import { FormControlLabel } from "@mui/material";
import { IFAFormControlLabel } from "./FAFormControlLabel.interfaces";

export const FAFormControlLabel = memo((props: IFAFormControlLabel) => {
  const { testID, label, ...materialUIProps } = props;
  return (
    <FormControlLabel data-testid={testID} {...materialUIProps} label={label} />
  );
});

FAFormControlLabel.displayName = "FAFormControlLabel";
