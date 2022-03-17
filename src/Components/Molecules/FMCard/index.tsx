import React, { memo } from "react";
import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

import { IFMCardProps } from "./FMCard.interface";

export const FMCard = memo((props: IFMCardProps) => {
  const { testID, actions, content, header, children, ...materialUIProps } =
    props;
  return (
    <Card data-testid={testID} {...materialUIProps}>
      {header && <CardHeader {...header} />}
      <CardContent {...content}>{children}</CardContent>
      {actions && <CardActions {...actions} />}
    </Card>
  );
});

FMCard.displayName = "FMCard";
