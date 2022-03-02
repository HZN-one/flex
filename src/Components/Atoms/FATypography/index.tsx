import React from "react";
import Typography from "@mui/material/Typography";

import { IFATypographyProps } from "./FATypography.interface";

export const FATypography = <C extends React.ElementType>(
  props: IFATypographyProps<C>
) => {
  const { testID, children, ...materialUIProps } = props;

  return (
    <Typography data-testid={testID} {...materialUIProps}>
      {children}
    </Typography>
  );
};

FATypography.displayName = "FATypography";
