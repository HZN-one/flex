import React, { memo } from "react";
import { Box, Grid } from "@mui/material";

import { FATypography } from "@Atoms";
import { FOHeader } from "@Organisms";

import { IFLAuthenticationProps } from "./FLAuthentication.interface";

export const FLAuthentication = memo((props: IFLAuthenticationProps) => {
  const { testID, children, header, isCenter, childrenGridWidth } = props;

  return (
    <React.Fragment>
      <FOHeader
        testID="header-authentication"
        headerType="auth"
        position="fixed"
        {...header}
      />
      <Grid
        data-testid={testID}
        component="main"
        container
        columnSpacing={3}
        rowSpacing={isCenter ? 0 : 2}
        justifyContent="center"
        alignItems={isCenter ? "center" : "flex-start"}
        sx={{
          flexGrow: 1,
          minHeight: theme =>
            `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${theme.spacing(
              9
            )})`,
          marginTop: theme => `${theme.mixins.toolbar.minHeight}px`,
        }}
      >
        <Grid item sm={childrenGridWidth}>
          {children}
        </Grid>
      </Grid>
      <Box component="footer" sx={{ py: 1, textAlign: "center" }}>
        <FATypography
          testID="typography-auth-layout-footer"
          color="textSecondary"
          variant="caption"
        >
          &copy; {new Date().getFullYear()} - PT. HZN Teknologi Indonesia
        </FATypography>
      </Box>
    </React.Fragment>
  );
});

FLAuthentication.displayName = "FLAuthentication";
