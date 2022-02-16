import React from "react";
import { FAIcon } from "@Atoms";
import { IIcon } from "@Atoms/Icon/Icon.interface";

const story = {
  title: "Atom/Icon",
  component: FAIcon,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "add_circle",
  },
};

export default story;

export const Default = (props: IIcon) => {
  return (
    <FAIcon {...props} testID="icon-add">
      {props.children}
    </FAIcon>
  );
};
