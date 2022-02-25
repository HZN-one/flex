import React from "react";
import { FLSettingsNavbarLayout } from "@Components/Layout";

import { IFLSettingsNavbarLayout } from "@Components/Layout/FLSettingsNavbarLayout/FLSettingNavbarLayout.interface";

const story = {
  title: "Layout/Settings Navbar",
  component: FLSettingsNavbarLayout,
  argTypes: {
    sections: { control: [] },
  },
  args: {
    sections: [
      {
        title: "Dashboard",
        path: "/",
        icon: <>assessment_icon</>,
        role: "all",
      },
      {
        title: "Order Management",
        path: "/",
        icon: <>shopping_cart</>,
        role: "all",
      },
      {
        title: "Transaction",
        path: "/transaction",
        icon: <>trending_up</>,
        role: "all",
      },
      {
        title: "Billing",
        path: "/billing",
        icon: <>receipt</>,
        role: "all",
      },
      {
        title: "Internal Management",
        path: "/internal",
        icon: <>people_alt</>,
        role: "all",
        children: [
          {
            title: "Customer",
            path: "/dashboard/customers",
          },
          {
            title: "Driver",
            path: "/dashboard/customers/1",
          },
          {
            title: "Fleet",
            path: "/dashboard/customers/1/edit",
          },
          {
            title: "Pricing",
            path: "/dashboard/customers/1/edit",
          },
        ],
      },
    ],
  },
};

export default story;
export const Default = (props: IFLSettingsNavbarLayout) => (
  <>
    <FLSettingsNavbarLayout {...props}></FLSettingsNavbarLayout>
  </>
);
