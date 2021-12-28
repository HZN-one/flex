import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { FATypography } from "@Atoms";

import { IFMCard } from "./FMCard.interfaces";

export const FMCard = memo((props: IFMCard) => {
  const { testID, actions, ...materialUIProps } = props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        {props.children ? (
          <>{props.children}</>
        ) : (
          <FATypography
            testID="typography-card"
            sx={{ fontSize: 14 }}
            gutterBottom
          >
            HZN FLEX CARD
          </FATypography>
        )}
      </CardContent>

      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FMCard.displayName = "FMCard";
