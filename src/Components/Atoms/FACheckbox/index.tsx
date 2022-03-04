import React, { memo } from "react";
import { Checkbox } from "@mui/material";
import { IFACheckboxProps } from "./FACheckbox.interface";

export const FACheckbox = memo((props: IFACheckboxProps) => {
  const { testID, ...materialUIProps } = props;
  return <Checkbox data-testid={testID} {...materialUIProps} />;
});

FACheckbox.displayName = "FACheckbox";
