import React, { memo } from "react";
import { FormControlLabel } from "@mui/material";
import { IFAFormControlLabel } from "./FAFormControlLabel.interfaces";

export const FAFormControlLabel = memo((props: IFAFormControlLabel) => {
  const { testID, label, control, ...materialUIProps } = props;
  return (
    <FormControlLabel
      data-testid={testID}
      control={control}
      {...materialUIProps}
      label={label}
    />
  );
});

FAFormControlLabel.displayName = "FAFormControlLabel";
