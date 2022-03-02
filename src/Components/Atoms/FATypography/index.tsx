import React from "react";
import Typography from "@mui/material/Typography";

import { IFATypographyProps } from "./FATypography.interface";

export const FATypography = <C extends React.ElementType>({
  children,
  ...props
}: IFATypographyProps<C>) => {
  return <Typography {...props}>{children}</Typography>;
};

FATypography.displayName = "FATypography";
