import React from "react";
import { ComponentStory } from '@storybook/react';
import { FMSelect } from '../../../../src/Components'
import { ISelectInput } from "../../../../src/Components/Molecules/FMSelect/FMSelect.interfaces";

const story = {
  title: "Select",
  component: FMSelect,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
};

export default story;

const Template: ComponentStory<typeof FMSelect> = (props: ISelectInput) => <FMSelect {...props} />;

export const Default = (props: ISelectInput) => (
  <>
    <FMSelect {...props} />
  </>
);

export const SelectType = Template.bind({});
SelectType.args = {
  label: 'label',
  type: 'select',
  adornment: 'kg',
  adornmentPosition: 'start'
};

export const LeftAdornment = Template.bind({});
LeftAdornment.args = {
  adornment: 'kg',
  adornmentPosition: 'start',
  IconComponent: 'a'
};

export const RightAdornment = Template.bind({});
RightAdornment.args = {
  label: 'label'
};

export const LeftAndRightAdornment = Template.bind({});
LeftAndRightAdornment.args = {
  adornment: 'kg',
  adornmentPosition: 'start'
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  adornment: 'kg',
  adornmentPosition: 'end',
  helperText: `it can't be empty`
};