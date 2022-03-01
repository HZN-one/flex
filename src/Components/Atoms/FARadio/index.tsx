import React, { memo } from "react";
import { Radio } from "@mui/material";
import { IFARadioProps } from "./FARadio.interface";
export const FARadio = memo((props: IFARadioProps) => {
  const { testID, ...materialUIProps } = props;

  return <Radio data-testid={testID} {...materialUIProps} />;
});

FARadio.displayName = "FARadio";
