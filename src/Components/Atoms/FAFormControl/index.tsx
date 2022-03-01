import React, { memo } from "react";
import { FormControl, FormHelperText } from "@mui/material";

import { IFAFormControlProps } from "./FAFormControl.interface";

export const FAFormControl = memo((props: IFAFormControlProps) => {
  const { testID, helperText, ...materialUIProps } = props;
  return (
    <FormControl data-testid={testID} {...materialUIProps}>
      {props.children}
      <FormHelperText id="component-error-text" error>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
});

FAFormControl.displayName = "FAFormControl";
