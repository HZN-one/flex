import React from "react";
import { ComponentStory } from "@storybook/react";
import { FMFormTextField } from "Components";
import { IFMFormTextField } from "Components/Molecules/FMFormTextField/FMFormTextField.interface";

const story = {
  title: "Form Input",
  component: FMFormTextField,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
};

export default story;

const Template: ComponentStory<typeof FMFormTextField> = (
  props: IFMFormTextField
) => <FMFormTextField {...props} />;

export const Default = (props: IFMFormTextField) => (
  <>
    <FMFormTextField {...props}>{props.children}</FMFormTextField>
  </>
);

export const SelectType = Template.bind({});
SelectType.args = {
  label: "label",
  type: "select",
  adornment: "kg",
  adornmentPosition: "start",
};

export const WithAdornment = Template.bind({});
WithAdornment.args = {
  adornment: "kg",
  adornmentPosition: "start",
};

export const WithAdornmentAtEnd = Template.bind({});
WithAdornmentAtEnd.args = {
  adornment: "kg",
  adornmentPosition: "end",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  adornment: "kg",
  adornmentPosition: "end",
  helperText: `it can't be empty`,
};
