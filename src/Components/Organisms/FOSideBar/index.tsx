import React, { memo } from "react";
import { styled, useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import { FAIconButton } from "Components";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
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
  const { testID, open, color, footer, sections, sx, ...materialUIProps } =
    props;
  const classes = useStyles({ color });
  const theme = useTheme();
  const [opens, setOpen] = React.useState(open);

  const [openChildren, setOpenChildren] = React.useState(true);

  const handleClick = () => {
    setOpenChildren(!openChildren);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Drawer
        className={color ? classes.color : ""}
        data-testid={testID}
        sx={sx}
        variant="persistent"
        anchor="left"
        open={opens}
        {...materialUIProps}
      >
        <DrawerHeader>
          <FAIconButton testID="icon-button-drawer" onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
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
                    <ListItemIcon>{oneSection.icon}</ListItemIcon>
                    <ListItemText primary={oneSection.title} />
                    {openChildren ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openChildren} timeout="auto" unmountOnExit>
                    {oneSection.children.map((oneChildren, i) => (
                      <List component="div" disablePadding key={i}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary={oneChildren.title} />
                        </ListItemButton>
                      </List>
                    ))}
                  </Collapse>
                </>
              ) : (
                <ListItem button key={index}>
                  <ListItemIcon>{oneSection.icon}</ListItemIcon>
                  <ListItemText primary={oneSection.title} />
                </ListItem>
              )
            )}
          </List>
        ) : (
          props.children
        )}
        {footer && (
          <div style={{ flexGrow: 1, width: "100%" }}>
            <Divider />
            {footer}
          </div>
        )}
      </Drawer>
    </>
  );
});

FOSideBar.displayName = "FOSideBar";
