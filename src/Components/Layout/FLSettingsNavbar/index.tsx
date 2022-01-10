import React, { memo } from "react";
import { Box, Container } from "@mui/material";

import type { ReactNode } from "react";
import { styled } from "@mui/material/styles";

// sidebar
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";

// appbar
import MenuIcon from "@mui/icons-material/Menu";

// PR: get from flex
import { FATypography } from "@Atoms/FATypography";
import { FAIconButton } from "@Atoms/FAIconButton";
import { FAButton } from "@Atoms/FAButton";

// main components
import { FOHeader } from "@Organisms/FOHeader";
import { FOSideBar } from "@Organisms/FOSideBar";

export interface IFLSettingsNavbarLayout {
  testID: `header-${string}`;
  title?: string;
  popUp?: ReactNode;
  children?: ReactNode;
  headbarPosition?: "fixed" | "absolute" | "relative" | "static" | "sticky";
  sections: {
    title: string;
    path: string;
    icon: JSX.Element;
    children?: {
      title: string;
      path: string;
    }[];
  }[];
}

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
    marginLeft: `${250}px`,
  }),
}));

export const FLSettingsNavbarLayout = memo((props: IFLSettingsNavbarLayout) => {
  const { testID, popUp, headbarPosition, sections, title } = props;
  const [open, setOpen] = React.useState(false);

  const initialPath = window.location.pathname;
  const pathMarkerSidebar = (path: string) => {
    if (initialPath === path) {
      return {
        bgcolor: "#FDEBEA",
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: 16,
        padding: "0 12px",
      };
    }
    return {
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderRadius: 16,
      padding: "0 12px",
    };
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box data-testid={testID}>
      <FOHeader
        position={headbarPosition ?? "static"}
        testID="header-settings"
        open={open}
        startAdornment={
          <>
            <FAIconButton
              testID="icon-button-layoutSettings"
              color="inherit"
              aria-label="open drawer"
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </FAIconButton>
            <FATypography
              testID="typography-layoutSettings"
              variant="h6"
              noWrap
            >
              {title}
            </FATypography>
            <Box
              sx={{
                flexGrow: 1,
                ml: 2,
              }}
            />
            <Box sx={{ ml: 1 }}>{popUp}</Box>
          </>
        }
      ></FOHeader>
      <FOSideBar
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        testID="side-bar-settings"
        open={open}
        sections={sections}
        footer={
          <List>
            <ListItem
              button
              onClick={() => window.location.assign("/settings")}
            >
              <Box sx={pathMarkerSidebar("/settings")}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Settings"} />
              </Box>
            </ListItem>
            <ListItem onClick={() => window.location.assign("/launchpad")}>
              <FAButton
                testID="button-layoutSettings"
                fullWidth
                sx={{
                  borderRadius: "8px",
                  color: "black",
                  borderColor: "black",
                  mt: 2,
                }}
                variant="outlined"
                startIcon={<ChevronLeftIcon />}
              >
                Back to Launchpad
              </FAButton>
            </ListItem>
          </List>
        }
      ></FOSideBar>
      <Main open={open}>
        <Container maxWidth="xl">{props.children}</Container>
      </Main>
    </Box>
  );
});

FLSettingsNavbarLayout.displayName = "FLSettingsNavbarLayout";
