import React from "react";

import { FAIcon } from "@Atoms";
import { FAIconProps } from "@Atoms/FAIcon/FAIcon.interface";

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

export const Default = (props: FAIconProps) => {
  return (
    <FAIcon {...props} testID="icon-add">
      {props.children}
    </FAIcon>
  );
};
