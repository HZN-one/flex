import React, { memo } from "react";
import { Icon } from "@mui/material";
import { IIcon } from "./Icon.interface";

export const FAIcon = memo((props: IIcon) => {
  const { testID, className, ...materialUIProps } = props;
  return (
    <Icon data-testid={testID} className={className} {...materialUIProps} />
  );
});

FAIcon.displayName = "FAIcon";
