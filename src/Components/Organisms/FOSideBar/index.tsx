import React, { memo, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import { FAIconButton, FAIcon, FALogo } from "@Atoms";

import { Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { IFOSideBar, IStyle } from "./FOSideBar.interfaces";

const useStyles = makeStyles({
  color: {
    background: (props: IStyle) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: (props: IStyle) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const FOSideBar = memo((props: IFOSideBar) => {
  const {
    testID,
    open,
    color,
    footer,
    sections,
    sx,
    logo,
    ...materialUIProps
  } = props;

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

  const classes = useStyles({ color });
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(open);

  const [isDrawerChildOpen, setIsDrawerChildOpen] = React.useState(true);

  const handleClick = () => {
    setIsDrawerChildOpen(!isDrawerChildOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (open) {
      setIsDrawerOpen(true);
    } else {
      setIsDrawerOpen(false);
    }
  }, [open]);

  return (
    <>
      <CssBaseline />
      <Drawer
        className={color ? classes.color : ""}
        data-testid={testID}
        sx={sx}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        {...materialUIProps}
      >
        <DrawerHeader>
          <FAIconButton onClick={handleDrawerClose} testID="icon-button-drawer">
            {theme.direction === "ltr" ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {logo ? (
                  <>{logo}</>
                ) : (
                  <FALogo
                    iconColor="#D8232A"
                    textColor="#000"
                    width={129}
                    height={28}
                    testID="logo-sidebar"
                  ></FALogo>
                )}
              </Box>
            ) : (
              <ChevronRightIcon />
            )}
          </FAIconButton>
        </DrawerHeader>
        <Divider />
        {sections && sections.length > 0 ? (
          <List>
            {sections.map((oneSection, index) =>
              oneSection.children && oneSection.children?.length > 0 ? (
                <>
                  <ListItem button key={index} onClick={handleClick}>
                    <Box sx={pathMarkerSidebar(oneSection.path)}>
                      <ListItemIcon>
                        <FAIcon testID="icon-drawerChild">
                          {oneSection.icon}
                        </FAIcon>
                      </ListItemIcon>
                      <ListItemText primary={oneSection.title} />

                      {isDrawerChildOpen ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                  </ListItem>
                  <Collapse in={isDrawerChildOpen} timeout="auto" unmountOnExit>
                    {oneSection.children.map((oneChildren, i) => (
                      <List
                        component="div"
                        disablePadding
                        sx={{ pl: 7 }}
                        key={i}
                        onClick={() => window.location.assign(oneChildren.path)}
                      >
                        <ListItem button sx={{ pl: 4 }}>
                          <ListItemText primary={oneChildren.title} />
                        </ListItem>
                      </List>
                    ))}
                  </Collapse>
                </>
              ) : (
                <ListItem
                  button
                  key={index}
                  onClick={() => window.location.assign(oneSection.path)}
                >
                  <Box sx={pathMarkerSidebar(oneSection.path)}>
                    <ListItemIcon>
                      <FAIcon testID="icon-drawerChild">
                        {oneSection.icon}
                      </FAIcon>
                    </ListItemIcon>
                    <ListItemText primary={oneSection.title} />
                  </Box>
                </ListItem>
              )
            )}
          </List>
        ) : (
          props.children
        )}
        {footer && (
          <>
            <div style={{ flexGrow: 1 }}></div>
            <div style={{ width: "100%" }}>
              <Divider />
              {footer}
            </div>
          </>
        )}
      </Drawer>
    </>
  );
});

FOSideBar.displayName = "FOSideBar";
