import React from "react";
import { ComponentStory } from "@storybook/react";
import { FOSideBar } from "@Organisms";
import { IFOSideBar } from "@Organisms/FOSideBar/FOSideBar.interface";

const story = {
  title: "Organisms/Sidebar",
  component: FOSideBar,
};

export default story;

const Template: ComponentStory<typeof FOSideBar> = (props: IFOSideBar) => (
  <FOSideBar {...props} />
);

export const Default = Template.bind({});
Default.args = {
  testID: "sidebar-open",
  linkComponent: "a",
  menu: [
    {
      title: "Dashboard",
      path: "/",
      icon: "dashboard",
    },
    {
      title: "Users",
      path: "/users",
      icon: "people",
      subMenu: [
        {
          title: "List",
          path: "/users/list",
        },
        {
          title: "Create",
          path: "/users/create",
        },
      ],
    },
  ],
  footerMenu: [
    {
      title: "Settings",
      path: "/settings",
      icon: "settings",
    },
  ],
  buttonLogout: {
    children: "Logout",
    onClick: () => {},
  },
};
