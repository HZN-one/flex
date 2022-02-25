import React, { memo } from "react";
import { Skeleton } from "@mui/material";

import { IFASkeleton } from "./FASkeleton.interface";

export const FASkeleton = memo((props: IFASkeleton) => {
  const { testID, ...materialUIProps } = props;
  return <Skeleton data-testid={testID} {...materialUIProps} />;
});

FASkeleton.displayName = "FASkeleton";
