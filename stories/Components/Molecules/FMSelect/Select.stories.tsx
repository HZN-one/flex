import React from "react";
import { ComponentStory } from "@storybook/react";
import { FMSelect, FAFormControl } from "Components";
import { ISelectInput } from "Components/Molecules/FMSelect/FMSelect.interfaces";
import { IFAFormControl } from "@Atoms/FAFormControl/FAFormControl.interfaces";

const story = {
  title: "Molecules/Select",
  component: FMSelect,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
};

export default story;

const Template: ComponentStory<typeof FMSelect> = (props: ISelectInput) => (
  <FMSelect {...props} />
);

const Template2: ComponentStory<typeof FAFormControl> = (
  props: IFAFormControl
) => (
  <FAFormControl {...props}>
    <FMSelect testID="select-test"></FMSelect>
  </FAFormControl>
);

export const Default = (props: ISelectInput) => (
  <>
    <FMSelect {...props} />
  </>
);

export const SelectType = Template.bind({});
SelectType.args = {
  label: "label",
  type: "select",
  adornment: "kg",
  adornmentPosition: "start",
};

export const LeftAdornment = Template.bind({});
LeftAdornment.args = {
  adornment: "kg",
  adornmentPosition: "start",
  IconComponent: "a",
};

export const RightAdornment = Template.bind({});
RightAdornment.args = {
  label: "label",
};

export const LeftAndRightAdornment = Template.bind({});
LeftAndRightAdornment.args = {
  adornment: "kg",
  adornmentPosition: "start",
};

export const WithHelperText = Template2.bind({});
WithHelperText.args = {
  helperText: `it can't be empty`,
};
