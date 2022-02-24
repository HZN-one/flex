import React, { memo } from "react";
import { AppBar, Avatar, Box, Grid, Toolbar } from "@mui/material";
import { IFOHeader } from "./FOHeader.interfaces";
import { FAButton, FALogo, FATypography } from "@Atoms";
import { FMSearch } from "@Molecules";

export const FOHeader = memo((props: IFOHeader) => {
  const { testID, logo, position, headerType } = props;

  return (
    <AppBar
      data-testid={testID}
      position={position}
      color="inherit"
      elevation={0}
    >
      <Toolbar variant="dense">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          columnSpacing={2}
        >
          {logo && (
            <Grid item xs>
              <Box display="flex">
                <FALogo
                  testID="logo-header"
                  width={119}
                  height={20}
                  iconColor="#D8232A"
                  textColor="#1A1919"
                />
              </Box>
            </Grid>
          )}
          {headerType === "auth" && (
            <React.Fragment>
              <Grid item xs="auto">
                <FAButton
                  testID="button-login"
                  href={props.buttonLogin.href}
                  LinkComponent={props.buttonLogin.LinkComponent}
                  variant="text"
                  color="secondary"
                >
                  {props.buttonLogin.children}
                </FAButton>
              </Grid>
              <Grid item xs="auto">
                <FAButton
                  testID="button-register"
                  href={props.buttonRegister.href}
                  LinkComponent={props.buttonRegister.LinkComponent}
                  variant="contained"
                  color="primary"
                >
                  {props.buttonRegister.children}
                </FAButton>
              </Grid>
            </React.Fragment>
          )}
          {headerType === "default" && (
            <React.Fragment>
              {props.title && (
                <Grid item xs="auto">
                  <FATypography testID="typography-header-title" variant="h5">
                    {props.title}
                  </FATypography>
                </Grid>
              )}
              {props.search && (
                <Grid item xs={6}>
                  <FMSearch
                    testID="search-header"
                    placeholder={props.search.placeholder}
                    onChange={props.search.onChange}
                    onSubmit={props.search.onSubmit}
                    margin="none"
                    fullWidth
                  />
                </Grid>
              )}
              <Grid item xs="auto">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar
                    src={props.userAvatarSrc}
                    sx={{ bgcolor: "secondary.main" }}
                  />
                  <FATypography
                    testID="typography-header-company-name"
                    variant="body1"
                    sx={{ ml: 1 }}
                  >
                    {props.companyName}
                  </FATypography>
                </Box>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

FOHeader.displayName = "FOHeader";
