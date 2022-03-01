import React, { memo } from "react";
import { Skeleton } from "@mui/material";

import { IFASkeletonProps } from "./FASkeleton.interface";

export const FASkeleton = memo((props: IFASkeletonProps) => {
  const { testID, ...materialUIProps } = props;
  return <Skeleton data-testid={testID} {...materialUIProps} />;
});

FASkeleton.displayName = "FASkeleton";
