import React from "react";
import { ComponentStory } from "@storybook/react";
import { FAInput } from "@Atoms";
import { IInput } from "@Atoms/FAInput/FAInput.interfaces";

const story = {
  title: "Atom/Input",
  component: FAInput,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

const Template: ComponentStory<typeof FAInput> = props => (
  <FAInput {...props} />
);

export const Default = (props: IInput) => (
  <>
    <FAInput {...props} />
  </>
);

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: `it can't be empty`,
  focusedText: `test`,
  label: `test`,
};
