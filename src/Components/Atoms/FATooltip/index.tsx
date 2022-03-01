import React, { memo } from "react";
import { Tooltip } from "@mui/material";
import { IFATooltipProps } from "./FATooltip.interface";

export const FATooltip = memo((props: IFATooltipProps) => {
  const { testID, title, ...materialUIProps } = props;

  return (
    <Tooltip data-testid={testID} title={title} {...materialUIProps}>
      {props.children}
    </Tooltip>
  );
});

FATooltip.displayName = "FATooltip";
