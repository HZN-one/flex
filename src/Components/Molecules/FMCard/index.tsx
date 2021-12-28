import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { FATypography, FAButton } from "@Atoms";

import { IFMCard } from "./FMCard.interfaces";

export const FMFormTextField = memo((props: IFMCard) => {
  const { testID, content, actions, ...materialUIProps } = props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        {content ? (
          <>{content}</>
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
      <CardActions>
        {actions ? (
          <>{actions}</>
        ) : (
          <FAButton testID="button-card" size="small">
            Learn More
          </FAButton>
        )}
      </CardActions>
    </Card>
  );
});

FMFormTextField.displayName = "FMFormTextField";
