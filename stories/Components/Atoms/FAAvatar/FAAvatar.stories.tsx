import React from "react";
import { Stack } from "@mui/material";
import { FAAvatar } from "@Atoms";

import { IFAAvatarProps } from "@Atoms/FAAvatar/FAAvatar.interface";

const story = {
  title: "Atom/Avatar",
  component: FAAvatar,
  argTypes: {
    testID: { control: "text" },
    alt: { control: "text" },
    size: { control: "text" },
    color: { control: "text" },
    src: { control: "text" },
  },
  args: {
    testID: "avatar-storybook",
    alt: "Avatar",
    size: "medium",
    color: "primary",
    src: "https://mui.com/static/images/avatar/1.jpg",
  },
};

export default story;

export const Default = (props: IFAAvatarProps) => <FAAvatar {...props} />;

export const Variant = (props: IFAAvatarProps) => (
  <Stack direction="row" spacing={2}>
    <FAAvatar {...props} variant="circular">
      C
    </FAAvatar>
    <FAAvatar {...props} variant="rounded">
      R
    </FAAvatar>
    <FAAvatar {...props} variant="square">
      S
    </FAAvatar>
  </Stack>
);

export const Fallback = (props: IFAAvatarProps) => (
  <Stack direction="row" spacing={2}>
    <FAAvatar {...props} />
    <FAAvatar testID="avatar-storybook" alt="Image" src="/broken-image.jpg" />
    <FAAvatar testID="avatar-storybook" src="/broken-image.jpg" />
  </Stack>
);
