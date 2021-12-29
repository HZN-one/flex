import React, { memo } from "react";
import "@src/i18n";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IFOHeader } from "./FOHeader.interfaces";
import { FAButton, FATypography, FAIconButton } from "@Atoms";
import { FMSearch } from "@Molecules";

export const FOHeader = memo((props: IFOHeader) => {
  const {
    logo,
    title,
    handleLogin,
    handleRegister,
    handleMenuIcon,
    handleSearch,
    logout,
    menuIcon,
    search,
    startAdornment,
    endAdornment,
    ...materialUIProps
  } = props;

  const { t } = useTranslation();

  return (
    <AppBar position="static" color="inherit" {...materialUIProps}>
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
              sx={{
                bgcolor: "#fff",
                borderRadius: "8px",
                flexGrow: 0.2,
                mr: 3,
              }}
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
