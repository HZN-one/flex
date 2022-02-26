import React from "react";
import { ComponentStory } from "@storybook/react";
import StarBorder from "@mui/icons-material/StarBorder";

import { FOSideBar } from "@Organisms";
import { IFOSideBarProps } from "@Organisms/FOSideBar/FOSideBar.interface";

const story = {
  title: "Organisms/SideBar",
  component: FOSideBar,
};

export default story;

const Template: ComponentStory<typeof FOSideBar> = (props: IFOSideBarProps) => (
  <FOSideBar {...props} />
);

export const OpenSideBar = Template.bind({});
OpenSideBar.args = {
  open: true,
  sections: [
    { title: "Driver", path: "/dashboard/customers", icon: <StarBorder /> },
    {
      title: "Customers",
      path: "/dashboard/customers",
      icon: <StarBorder />,
      children: [
        {
          title: "List",
          path: "/dashboard/customers",
        },
        {
          title: "Details",
          path: "/dashboard/customers/1",
        },
        {
          title: "Edit",
          path: "/dashboard/customers/1/edit",
        },
      ],
    },
  ],
};
