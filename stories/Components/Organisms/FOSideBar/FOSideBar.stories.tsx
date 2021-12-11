import React from "react";
import { ComponentStory } from "@storybook/react";
import { FOSideBar } from "Components";
import { IFOSideBar } from "Components/Organisms/FOSideBar/FOSideBar.interfaces";
import StarBorder from "@mui/icons-material/StarBorder";

const story = {
  title: "SideBar",
  component: FOSideBar,
};

export default story;

const Template: ComponentStory<typeof FOSideBar> = (props: IFOSideBar) => (
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
