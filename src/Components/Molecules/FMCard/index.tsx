import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import { FATypography } from "@Atoms/FATypography";

import { IFMCardProps } from "./FMCard.interface";

export const FMCard = memo((props: IFMCardProps) => {
  const {
    testID,
    actions,
    title,
    titleTypographyVariant,
    subtitle,
    subtitleTypographyVariant,
    children,
    ...materialUIProps
  } = props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        <Box mb={title || subtitle ? 3.75 : 0}>
          {title && (
            <Box mb={subtitle ? 1 : 0}>
              <FATypography
                testID="typography-card"
                variant={titleTypographyVariant || "h6"}
              >
                {title}
              </FATypography>
            </Box>
          )}

          {subtitle && (
            <Box>
              <FATypography
                testID="typography-card"
                variant={subtitleTypographyVariant || "subtitle"}
              >
                {subtitle}
              </FATypography>
            </Box>
          )}
        </Box>
        {children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FMCard.displayName = "FMCard";
