import React from "react";
import { ComponentStory } from '@storybook/react';
import {BaseInput} from '../../../../src/Components'
import { IInput } from "../../../../src/Components/Atoms/BaseInput/Input.interface"

const story = {
  title: "Base Input",
  component: BaseInput,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "Label",
  },
};

export default story;

const Template: ComponentStory<typeof BaseInput> = (props: IInput) => <BaseInput {...props} />;

export const Default = (props: IInput) => (
  <>
    <BaseInput {...props}>{props.children}</BaseInput>
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
  variant: 'outlined'
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled'
};