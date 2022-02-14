import React, { memo } from "react";
import { Radio } from "@mui/material";
import { IFARadio } from "./FARadio.interface";

export const FARadio = memo((props: IFARadio) => {
  const { testID, ...materialUIProps } = props;
  return (
    <Radio
      data-testid={testID}
      sx={{ height: "40px", width: "40px" }}
      {...materialUIProps}
    />
  );
});

FARadio.displayName = "FARadio";
