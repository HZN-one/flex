import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { FATypography } from "@Atoms";

import { IFOPaperRowProps } from "./FOPaperRow.interface";

export const FOPaperRow = (props: IFOPaperRowProps) => {
  const { items, actions } = props;
  const actionRef = useRef<HTMLDivElement>(null);

  const [actionWidth, setActionWidth] = useState("");

  useEffect(() => {
    if (actionRef.current?.offsetWidth) {
      setActionWidth(`${actionRef.current.offsetWidth}px`);
    }
  }, [actionRef.current?.offsetWidth]);

  return (
    <Paper className="flex-paper-2" sx={{ position: "relative" }}>
      <Grid
        container
        spacing={3}
        sx={{ width: `calc(100% - ${actionWidth})` }}
        overflow="auto"
      >
        {items.map((item, idx) => {
          return (
            <Grid item xs="auto" key={idx}>
              <Box mb={1}>
                <FATypography
                  testID="typography-paper-row-item-title"
                  variant="overline"
                  color="text.secondary"
                >
                  {item.title}
                </FATypography>
              </Box>
              {typeof item.children === "string" ? (
                <FATypography
                  testID="typography-paper-row-item-children"
                  variant="body1"
                >
                  {item.children}
                </FATypography>
              ) : (
                <Box>{item.children}</Box>
              )}
            </Grid>
          );
        })}
      </Grid>
      {actions && (
        <Box
          ref={actionRef}
          component="div"
          position="absolute"
          right={0}
          top={0}
          height="100%"
        >
          <Box
            position="relative"
            top="50%"
            sx={{ transform: "translateY(-50%)" }}
            left={0}
            pt={2}
            pb={2}
            pr={2}
          >
            {actions}
          </Box>
        </Box>
      )}
    </Paper>
  );
};
