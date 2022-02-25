import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FATypography } from "@Atoms/FATypography";

import { IFMCard } from "./FMCard.interface";

export const FMCard = memo((props: IFMCard) => {
  const { testID, actions, title, children, ...materialUIProps } = props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        {title && (
          <>
            <FATypography
              testID="typography-card"
              variant="h6"
              fontWeight={700}
              sx={{ marginBottom: 3.75 }}
            >
              {title}
            </FATypography>
          </>
        )}
        {children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FMCard.displayName = "FMCard";
