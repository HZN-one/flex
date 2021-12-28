import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { IFMCard } from "./FMCard.interfaces";

export const FMCard = memo((props: IFMCard) => {
  const { testID, actions, ...materialUIProps } = props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>{props.children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FMCard.displayName = "FMCard";
