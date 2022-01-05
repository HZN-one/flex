import React from "react";
import { ComponentStory } from "@storybook/react";
import { FAStandardInput } from "@Atoms";
import { IInput } from "@Atoms/FAStandardInput/Input.interface";

const story = {
  title: "Atom/Standard Input",
  component: FAStandardInput,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

const Template: ComponentStory<typeof FAStandardInput> = props => (
  <FAStandardInput {...props} />
);

export const Default = (props: IInput) => (
  <>
    <FAStandardInput {...props} />
  </>
);

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: `it can't be empty`,
  focusedText: `test`,
  label: `test`,
};
