import React from "react";
import { Meta, Story } from "@storybook/react";

import { FAButton, FARadio } from "@Atoms";
import { IFOCardWithImage } from "@Organisms/FOCardWithImage/FOCardWithImage.interface";
import { FOCardWithImage } from "@Organisms/FOCardWithImage";
import { DUMMY_IMAGE_URL } from "@Definitions/constants";

const meta: Meta = {
  title: "Organisms/Card With Image",
  component: FOCardWithImage,
};

export default meta;

const Template: Story<IFOCardWithImage> = props => (
  <FOCardWithImage sx={{ maxWidth: "408px" }} {...props} />
);

export const Default = Template.bind({});

Default.args = {
  image: <img src={DUMMY_IMAGE_URL} />,
  option: <FARadio testID="radio-test" />,
  title: "Card Title",
  subtitle: "Card Subtitle",
  buttonPrimary: "buttonPrimary",
  buttonSecondary: "buttonSecondary",
};

export const withAction = Default.bind({});
withAction.args = {
  image: <img src={DUMMY_IMAGE_URL} />,
  title: "Card Title",
  subtitle: "Card Subtitle",
  buttonPrimary: "buttonPrimary",
  buttonSecondary: "buttonSecondary",
  actions: (
    <FAButton variant="text" size="small" testID="button-card">
      Link
    </FAButton>
  ),
};
