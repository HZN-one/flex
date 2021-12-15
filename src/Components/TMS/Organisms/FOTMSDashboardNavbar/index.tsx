import React from "react";
import type { FC } from "react";
// import Router from "next/router";
import { Box, Container } from "@mui/material";

import { styled } from "@mui/material/styles";

import { FOTMSSidebar } from "..";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import IDashboardNavbarProps from "./DashboardNavbar.interface";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));
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
export const DashboardNavbar2: FC<IDashboardNavbarProps> = ({
  testID,
  popUp,
  children,
  content,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        data-testid={testID}
        position="fixed"
        color="secondary"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Settings
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              ml: 2,
            }}
          />
          <Box sx={{ ml: 1 }}>{popUp}</Box>
        </Toolbar>
      </AppBar>
      <FOTMSSidebar
        testID="sidebar-dashboard"
        open={open}
        content={content}
      ></FOTMSSidebar>
      <Main open={open}>
        <Container maxWidth="xl">{children}</Container>
      </Main>
    </>
  );
};
