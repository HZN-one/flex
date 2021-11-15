import React from "react";
import { ComponentStory } from '@storybook/react';
import {ButtonPegasus} from '../../../../src/Components/Atoms/Button'
import {IButton} from '../../../../src/Components/Atoms/Button/Button.interface'

const story = {
  title: "Button",
  component: ButtonPegasus,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof ButtonPegasus> = (props: IButton) => <ButtonPegasus {...props} />;

export const Default = (props: IButton) => (
  <>
    <ButtonPegasus {...props}>{props.children}</ButtonPegasus>
  </>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};