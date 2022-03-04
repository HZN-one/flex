import React from "react";
import { Meta, Story } from "@storybook/react";
import { FLDefault } from "@Components/Layout";

import { IFLDefaultProps } from "@Components/Layout/FLDefault/FLDefault.interface";

const meta: Meta = {
  title: "Layout/Default",
  component: FLDefault,
};

export default meta;

const Template: Story<IFLDefaultProps> = (props: IFLDefaultProps) => (
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
