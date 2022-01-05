import React from "react";
import { ComponentStory } from "@storybook/react";
import { FAOutlinedInput } from "@Atoms";
import { IInput } from "@Atoms/FAOutlinedInput/Input.interface";

const story = {
  title: "Atom/Outlined Input",
  component: FAOutlinedInput,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

const Template: ComponentStory<typeof FAOutlinedInput> = props => (
  <FAOutlinedInput {...props} />
);

export const Default = (props: IInput) => (
  <>
    <FAOutlinedInput {...props} />
  </>
);

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: `it can't be empty`,
  focusedText: `test`,
  label: `test`,
};
