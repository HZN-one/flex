import React from "react";
import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { FAButton } from "@Atoms/FAButton";
import { IButton } from "@Atoms/FAButton/Button.interface";

const story = {
  title: "Atom/Button",
  component: FAButton,
  argTypes: {
    testID: { control: "text" },
    children: { control: "text" },
  },
  args: {
    testID: "button-storybook",
    children: "Default",
  },
  decorators: [withDesign],
};

export default story;

const Template: ComponentStory<typeof FAButton> = (props: IButton) => (
  <FAButton {...props} />
);

export const Default = (props: IButton) => (
  <FAButton {...props}>{props.children}</FAButton>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/q2CQUOtypaKMoDl1CLAann/Flex-Design-System?node-id=233%3A1965",
  },
};
