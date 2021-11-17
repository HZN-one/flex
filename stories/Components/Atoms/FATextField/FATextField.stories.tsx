import React from "react";
import { ComponentStory } from '@storybook/react';
import {FATextField} from '../../../../src/Components'
import { IInput } from "../../../../src/Components/Atoms/FATextField/Input.interface"

const story = {
  title: "Text Field",
  component: FATextField,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

const Template: ComponentStory<typeof FATextField> = (props: IInput) => <FATextField {...props} />;

export const Default = (props: IInput) => (
  <>
    <FATextField {...props}>{props.children}</FATextField>
  </>
);

export const WithAdornment = Template.bind({});
WithAdornment.args = {
  adornment: 'kg',
  adornmentPosition: 'start'
};

export const WithAdornmentAtEnd = Template.bind({});
WithAdornmentAtEnd.args = {
  adornment: 'kg',
  adornmentPosition: 'end'
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  adornment: 'kg',
  adornmentPosition: 'end',
  helperText: `it can't be empty`
};

export const Outlined = Template.bind({});
Outlined.args = {
  variants: 'outlined'
};

export const Filled = Template.bind({});
Filled.args = {
  variants: 'filled'
};