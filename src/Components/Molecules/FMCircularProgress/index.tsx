import React, { memo } from "react";
import { Box, CircularProgress } from "@mui/material";

import { IFMCircularProgressProps } from "./FMCircularProgress.interface";

export const FMCircularProgress = memo((props: IFMCircularProgressProps) => {
  const {
    testID,
    color = "primary",
    fullPage = false,
    size = 100,
    thickness = 6,
    ...materialUIProps
  } = props;
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
      <Box display="flex" position="relative">
        <svg
          fill="none"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <defs>
            <linearGradient
              id="circular_progress_gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#DC3931" />
              <stop offset="100%" stopColor="#DC3931" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          color={color}
          disableShrink
          size={size}
          thickness={thickness}
          sx={{
            "svg circle": {
              stroke: "url(#circular_progress_gradient)",
              strokeDasharray: "inherit",
            },
          }}
          {...materialUIProps}
        />
      </Box>
    </Box>
  );
});

FMCircularProgress.displayName = "FMCircularProgress";
