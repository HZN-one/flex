import React from "react";
import { ComponentStory } from '@storybook/react';
import { SelectFlex } from '../../../../src/Components'
import { ISelectInput } from "../../../../src/Components/Atoms/Select/Select.interfaces";

const story = {
  title: "Select",
  component: SelectFlex,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
};

export default story;

const Template: ComponentStory<typeof SelectFlex> = (props: ISelectInput) => <SelectFlex {...props} />;

export const Default = (props: ISelectInput) => (
  <>
    <SelectFlex {...props} />
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