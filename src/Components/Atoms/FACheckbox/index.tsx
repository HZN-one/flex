import React, { memo } from "react";
import { Checkbox } from "@mui/material";
import { IFACheckbox } from "./FACheckbox.interface";

export const FACheckbox = memo((props: IFACheckbox) => {
  const { testID, ...materialUIProps } = props;
  return <Checkbox data-testid={testID} {...materialUIProps} />;
});

FACheckbox.displayName = "FACheckbox";
