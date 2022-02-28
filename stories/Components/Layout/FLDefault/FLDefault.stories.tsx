// Create storybook for FLDefault
import React from "react";
import { ComponentStory } from "@storybook/react";
import { FLDefault } from "@Components/Layout";
import { IFLDefault } from "@Components/Layout/FLDefault/FLDefault.interface";

const story = {
  title: "Layout/Default",
  component: FLDefault,
};

export default story;

const Template: ComponentStory<typeof FLDefault> = (props: IFLDefault) => (
  <FLDefault {...props} />
);

export const Default = Template.bind({});

Default.args = {
  testID: "layout-default-storybook",
  children: "Children component",
  header: {
    title: "Title",
    userAvatarSrc: "#",
    accountName: "Company Name",
  },
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
