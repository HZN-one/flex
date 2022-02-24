import React, { memo } from "react";
import { FormControl, FormHelperText } from "@mui/material";
import { IFAFormControl } from "./FAFormControl.interface";

export const FAFormControl = memo((props: IFAFormControl) => {
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
