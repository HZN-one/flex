import React, { memo } from "react";
import {
  Box,
  Grid,
  AppBar,
  Avatar,
  Select,
  Toolbar,
  MenuItem,
  InputBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { FMSearch } from "@Molecules";
import { EN, ID } from "@Definitions/Flags";

import { FAButton, FALogo, FATypography } from "@Atoms";

import { IFOHeaderProps } from "./FOHeader.interface";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const FOHeader = memo((props: IFOHeaderProps) => {
  const { testID, logo, companyLogo, position = "fixed", headerType } = props;

  const SelectLanguage = () => {
    return (
      <Box display="flex" alignItems="center">
        {props?.language?.value === "EN" ? <EN /> : <ID />}
        <Select
          IconComponent={KeyboardArrowDownIcon}
          id="flex-select-language"
          value={props?.language?.value}
          onChange={props?.language?.onChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"EN"}>EN</MenuItem>
          <MenuItem value={"ID"}>ID</MenuItem>
        </Select>
      </Box>
    );
  };

  return (
    <AppBar
      data-testid={testID}
      position={position}
      color="inherit"
      sx={{
        width: headerType === "auth" ? "100%" : "calc(100% - 250px)",
        boxShadow: theme =>
          headerType === "auth" ? theme.shadows[5] : "0px 1px 0px #E0E0E0",
      }}
    >
      <Toolbar>
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
          {companyLogo && (
            <Grid item xs>
              <Box display="flex" minWidth={200} maxWidth={200} maxHeight={60}>
                {companyLogo}
              </Box>
            </Grid>
          )}
          {headerType === "auth" && (
            <React.Fragment>
              {props.language && (
                <Grid item xs="auto">
                  <SelectLanguage />
                </Grid>
              )}
              <Grid item xs="auto">
                <FAButton
                  testID="button-login"
                  href={props.buttonLogin.href}
                  LinkComponent={props.linkComponent}
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
                  LinkComponent={props.linkComponent}
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
              <Box display="flex" alignItems="center">
                {props.language && (
                  <Grid item xs="auto" mr={2}>
                    <SelectLanguage />
                  </Grid>
                )}
                <Grid item xs="auto">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {props.accountName && (
                      <Avatar
                        src={props.userAvatarSrc}
                        sx={{ bgcolor: "secondary.main" }}
                      />
                    )}
                    <FATypography
                      testID="typography-header-company-name"
                      variant="body1"
                      sx={{ ml: 1 }}
                    >
                      {props.accountName}
                    </FATypography>
                  </Box>
                </Grid>
              </Box>
            </React.Fragment>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

FOHeader.displayName = "FOHeader";
