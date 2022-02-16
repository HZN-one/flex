import React from "react";
import { FMLabelValue } from "@Molecules";
import { IFMLabelValue } from "@Molecules/FMLabelValue/FMLabelValue.interface";

const story = {
  title: "Molecules/Label Value",
  component: FMLabelValue,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
    label: "Label",
    value: "value",
  },
};

export default story;

export const Default = (props: IFMLabelValue) => (
  <>
    <FMLabelValue {...props} />
  </>
);
