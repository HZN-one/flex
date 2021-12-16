import React, { memo } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IFOHeader } from "./FOHeader.interfaces";
import { FAButton, FATypography, FAIconButton } from "Components";
import { FMSearch } from "Components";

export const FOHeader = memo((props: IFOHeader) => {
  const {
    logo,
    title,
    handleLogin,
    handleRegister,
    logout,
    menuIcon,
    search,
    rightSide,
    ...materialUIProps
  } = props;

  return (
    <AppBar position="static" {...materialUIProps}>
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
                sx={{ mr: 2 }}
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
              }}
              testID="search-header"
            ></FMSearch>
          )}
        </Box>

        {logout && !rightSide ? (
          <>
            <FAButton
              testID="button-login"
              variant="text"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </FAButton>
            <FAButton
              testID="button-register"
              variant="contained"
              color="secondary"
              onClick={handleRegister}
            >
              Register
            </FAButton>
          </>
        ) : (
          <>{rightSide}</>
        )}
      </Toolbar>
    </AppBar>
  );
});

FOHeader.displayName = "FOHeader";
