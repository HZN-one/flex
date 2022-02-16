import React, { memo } from "react";
import "../../../../i18n";
import { useTranslation } from "react-i18next";
import { Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IFOHeader } from "./FOHeader.interfaces";
import { FAButton, FATypography, FAIconButton } from "@Atoms";
import { FMSearch } from "@Molecules";

import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 250;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const FOHeader = memo((props: IFOHeader) => {
  const {
    testID,
    logo,
    title,
    position,
    handleLogin,
    handleRegister,
    handleMenuIcon,
    handleSearch,
    logout,
    menuIcon,
    search,
    startAdornment,
    endAdornment,
    open,
    ...materialUIProps
  } = props;

  const { t } = useTranslation();

  return (
    <AppBar
      data-testid={testID}
      position={position}
      color="inherit"
      {...materialUIProps}
      open={open}
    >
      <Toolbar>
        <Box style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          {menuIcon && (
            <>
              <FAIconButton
                testID="icon-button-header"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
                onClick={handleMenuIcon}
              >
                <MenuIcon />
              </FAIconButton>
            </>
          )}
          {logo && <Box sx={{ mr: 3 }}>{logo}</Box>}
          {title && (
            <FATypography
              sx={{ mr: 3 }}
              testID="typography-header"
              variant="h6"
            >
              {title}
            </FATypography>
          )}
          {search && (
            <FMSearch
              size="small"
              testID="search-header"
              onChange={handleSearch}
            ></FMSearch>
          )}
          {startAdornment}
        </Box>

        {logout && !endAdornment ? (
          <>
            <FAButton
              testID="button-login"
              variant="text"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handleLogin}
            >
              {t("description.signIn")}
            </FAButton>
            <FAButton
              testID="button-register"
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              {t("description.register")}
            </FAButton>
          </>
        ) : (
          <>{endAdornment}</>
        )}
      </Toolbar>
    </AppBar>
  );
});

FOHeader.displayName = "FOHeader";
