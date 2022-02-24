import React, { memo } from "react";
import { Typography } from "@mui/material";
import { IFATypography } from "./FATypography.interface";

export const FATypography = memo((props: IFATypography) => {
  const { testID, ...materialUIProps } = props;
  return (
    <Typography data-testid={testID} {...materialUIProps}>
      {props.children}
    </Typography>
  );
});

FATypography.displayName = "FATypography";
