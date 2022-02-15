import React, { memo } from "react";
import { Radio } from "@mui/material";
import { IFARadio } from "./FARadio.interface";

const defaultProps = {
  size: "small",
} as IFARadio;
export const FARadio = memo((props: IFARadio) => {
  const { testID, size, ...materialUIProps } = { ...defaultProps, ...props };

  return <Radio data-testid={testID} size={size} {...materialUIProps} />;
});

FARadio.displayName = "FARadio";
