import React from "react";
import { Meta, Story } from "@storybook/react";
import { Stack } from "@mui/material";
import { FAAvatar } from "@Atoms";

import { IFAAvatarProps } from "@Atoms/FAAvatar/FAAvatar.interface";

const meta: Meta = {
  title: "Atom/Avatar",
  component: FAAvatar,
  argTypes: {
    testID: { control: "text" },
    alt: { control: "text" },
    size: { control: "text" },
    color: { control: "text" },
    src: { control: "text" },
    variant: { control: "text" },
  },
  args: {
    testID: "avatar-storybook",
    alt: "Avatar",
    size: "medium",
    color: "primary",
    src: "https://mui.com/static/images/avatar/1.jpg",
    variant: "circular",
  },
};

export default meta;

const Template: Story<IFAAvatarProps> = (props: IFAAvatarProps) => (
  <FAAvatar {...props} />
);

Template.decorators = [
  StoryDecorators => (
    <Stack direction="row" spacing={3}>
      {StoryDecorators()}
    </Stack>
  ),
];

export const Default = Template.bind({});

export const Variant = Template.bind({});

Variant.args = {
  variant: "square",
};

export const Fallback = Template.bind({});

Fallback.args = {
  src: "",
};
