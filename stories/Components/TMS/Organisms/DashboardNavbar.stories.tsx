import React from "react";
import { FOTMSDashboardNavbar } from "Components/TMS/Organisms/FOTMSDashboardNavbar";
import IDashboardNavbarProps from "Components/TMS/Organisms/FOTMSDashboardNavbar/DashboardNavbar.interface";

const story = {
  title: "Header",
  component: FOTMSDashboardNavbar,
};

export default story;
export const Default = (props: IDashboardNavbarProps) => (
  <>
    <FOTMSDashboardNavbar {...props}>
      <p>test children</p>
    </FOTMSDashboardNavbar>
  </>
);
