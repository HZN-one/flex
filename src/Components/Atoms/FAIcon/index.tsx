import React, { memo } from "react";
import { Icon } from "@mui/material";

import { FAIconProps } from "./FAIcon.interface";

export const FAIcon = memo((props: FAIconProps) => {
  const { testID, baseClassName, ...materialUIProps } = props;
  return (
    <Icon
      data-testid={testID}
      baseClassName={baseClassName}
      sx={{ color: props.color ? props.color : "text.primary" }}
      {...materialUIProps}
    />
  );
});

FAIcon.displayName = "FAIcon";
