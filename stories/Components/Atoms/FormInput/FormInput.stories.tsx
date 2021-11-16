import React from "react";
import { ComponentStory } from '@storybook/react';
import {FormInput} from '../../../../src/Components'
import { IFormInput } from "../../../../src/Components/Atoms/FormInput/FormInput.interface";

const story = {
  title: "Form Input",
  component: FormInput,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
};

export default story;

const Template: ComponentStory<typeof FormInput> = (props: IFormInput) => <FormInput {...props} />;

export const Default = (props: IFormInput) => (
  <>
    <FormInput {...props}>{props.children}</FormInput>
  </>
);

export const SelectType = Template.bind({});
SelectType.args = {
  label: 'label',
  type: 'select',
  adornment: 'kg',
  adornmentPosition: 'start'
};

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