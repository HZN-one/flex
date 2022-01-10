import React, { memo } from "react";
import { Box, Container } from "@mui/material";

import type { ReactNode } from "react";
import { styled } from "@mui/material/styles";

// sidebar
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";

// appbar
import MenuIcon from "@mui/icons-material/Menu";

// get from flex
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
  handleLogOut?: () => void;
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
  const { testID, popUp, handleLogOut, headbarPosition, sections, title } =
    props;
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
            <ListItem onClick={handleLogOut}>
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
                startIcon={
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.833 4.66667L10.893 5.60667L12.613 7.33333H5.83301V8.66667H12.613L10.893 10.3867L11.833 11.3333L15.1663 8L11.833 4.66667ZM3.16634 3.33333H8.49967V2H3.16634C2.43301 2 1.83301 2.6 1.83301 3.33333V12.6667C1.83301 13.4 2.43301 14 3.16634 14H8.49967V12.6667H3.16634V3.33333Z"
                      fill="#221F20"
                    />
                  </svg>
                }
              >
                Log Out
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
