import React, { memo, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { FAButton, FAIcon, FALogo } from "@Atoms";
import { IFOSideBarProps } from "./FOSideBar.interface";

export const FOSideBar = memo((props: IFOSideBarProps) => {
  const { testID, menu, footerMenu, buttonLogout, linkComponent } = props;
  const [open, setOpen] = useState<number[]>([]);

  const handleMenuClick = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter(i => i !== index));
    } else {
      setOpen([...open, index]);
    }
  };

  const listMenuItems = (index: number, children: JSX.Element) => {
    if (menu[index].subMenu) {
      return (
        <ListItemButton onClick={() => handleMenuClick(index)}>
          {children}
          <FAIcon
            testID={`icon-menu-${index}`}
            fontSize="small"
            color="inherit"
          >
            {open.includes(index) ? "keyboard_arrow_down" : "keyboard_arrow_up"}
          </FAIcon>
        </ListItemButton>
      );
    }

    return (
      <ListItemButton
        component={linkComponent}
        href={menu[index].path}
        selected={menu[index].path === window.location.pathname}
      >
        {children}
      </ListItemButton>
    );
  };

  return (
    <Drawer data-testid={testID} variant="permanent" open elevation={0}>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" disableGutters>
            <FALogo
              testID="logo-sidebar"
              width={119}
              height={20}
              iconColor="#D8232A"
              textColor="#1A1919"
            />
          </ListSubheader>
        }
        sx={{ height: "100%", overflowY: "auto" }}
      >
        {menu.map((item, index) => (
          <React.Fragment key={index}>
            {listMenuItems(
              index,
              <React.Fragment>
                <ListItemIcon>
                  <FAIcon
                    testID={`icon-${item.icon}`}
                    fontSize="small"
                    color="inherit"
                  >
                    {item.icon}
                  </FAIcon>
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </React.Fragment>
            )}
            {item.subMenu && (
              <Collapse in={open.includes(index)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenu.map(({ title, path }) => (
                    <ListItemButton
                      key={path}
                      component={linkComponent}
                      href={path}
                      selected={location.pathname.includes(path)}
                    >
                      <ListItemText primary={title} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <List sx={{ py: 1.5 }}>
        {footerMenu.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={linkComponent}
              href={list.path}
              selected={list.path === location.pathname}
            >
              <ListItemIcon>
                <FAIcon
                  testID={`icon-${list.icon}`}
                  fontSize="small"
                  color="inherit"
                >
                  {list.icon}
                </FAIcon>
              </ListItemIcon>
              <ListItemText primary={list.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3 }}>
        <FAButton
          testID="button-logout"
          color="secondary"
          size="small"
          fullWidth
          startIcon={<FAIcon testID="icon-sidebar-logout">logout</FAIcon>}
          sx={{ height: "auto" }}
          variant="outlined"
          onClick={buttonLogout.onClick}
        >
          {buttonLogout.children}
        </FAButton>
      </Box>
    </Drawer>
  );
});

FOSideBar.displayName = "FOSideBar";
