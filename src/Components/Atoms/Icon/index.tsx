import React, { memo } from "react";
import { Icon } from "@mui/material";
import { IIcon } from "./Icon.interface";

export const FAIcon = memo((props: IIcon) => {
  const { testID, baseClassName, ...materialUIProps } = props;
  return (
    <Icon
      data-testid={testID}
      baseClassName={baseClassName}
      {...materialUIProps}
    />
  );
});

FAIcon.displayName = "FAIcon";
