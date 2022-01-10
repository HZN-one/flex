import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { IFMCard } from "./FMCard.interfaces";
import { FATypography } from "@Atoms/FATypography";

export const FMCard = memo((props: IFMCard) => {
  const { testID, actions, title, ...materialUIProps } = props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        {title && (
          <>
            <FATypography
              testID="typography-card"
              variant="h6"
              fontWeight={700}
            >
              {title}
            </FATypography>
          </>
        )}
        {props.children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FMCard.displayName = "FMCard";
