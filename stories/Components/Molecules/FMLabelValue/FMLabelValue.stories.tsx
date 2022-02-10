import React from "react";
import { FMLabelValue } from "@Molecules";
import { IFMLabelValue } from "@Molecules/FMLabelValue/FMLabelValue.interface";

const story = {
  title: "Molecules/Label Value",
  component: FMLabelValue,
};

export default story;

export const Default = (props: IFMLabelValue) => (
  <>
    <FMLabelValue {...props} />
  </>
);
