import React, { memo } from "react";
import { Radio } from "@mui/material";
import { IFARadio } from "./FARadio.interface";
export const FARadio = memo((props: IFARadio) => {
  const { testID, ...materialUIProps } = props;

  return <Radio data-testid={testID} {...materialUIProps} />;
});

FARadio.displayName = "FARadio";
