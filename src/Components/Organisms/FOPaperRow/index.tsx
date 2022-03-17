import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { FATypography } from "@Atoms";

import { IFOPaperRowProps } from "./FOPaperRow.interface";

export const FOPaperRow = (props: IFOPaperRowProps) => {
  const { items, actions, isStretch = false } = props;

  return (
    <Paper className="flex-paper-2" sx={{ overflow: "hidden" }}>
      <Grid container spacing={2} alignItems="center" wrap="nowrap">
        <Grid container item xs spacing={3} wrap="nowrap" overflow="auto">
          {items.map((item, idx) => {
            return (
              <Grid item key={idx} xs={isStretch}>
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
          <Grid item xs="auto">
            <Box>{actions}</Box>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
