import React from "react";
import {
  FLSettingsNavbarLayout,
  IFLSettingsNavbarLayout,
} from "@Components/Layout";

const story = {
  title: "Layout/Settings Navbar",
  component: FLSettingsNavbarLayout,
};

export default story;
export const Default = (props: IFLSettingsNavbarLayout) => (
  <>
    <FLSettingsNavbarLayout {...props}></FLSettingsNavbarLayout>
  </>
);
