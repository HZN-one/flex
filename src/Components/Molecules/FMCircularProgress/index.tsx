import React, { memo } from "react";
import { Box, CircularProgress } from "@mui/material";

import { IFMCircularProgressProps } from "./FMCircularProgress.interface";

export const FMCircularProgress = memo((props: IFMCircularProgressProps) => {
  const { testID, fullPage = false } = props;
  return (
    <Box
      data-testid={testID}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position={fullPage ? "fixed" : undefined}
      top={fullPage ? 0 : undefined}
      left={fullPage ? 0 : undefined}
      height={fullPage ? "100%" : undefined}
      width={fullPage ? "100%" : undefined}
      bgcolor={fullPage ? "common.white" : undefined}
      zIndex={fullPage ? "tooltip" : undefined}
    >
      <CircularProgress />
    </Box>
  );
});

FMCircularProgress.displayName = "FMCircularProgress";
