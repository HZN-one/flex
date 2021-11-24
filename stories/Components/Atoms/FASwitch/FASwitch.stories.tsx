import React from "react";
import { ComponentStory } from '@storybook/react';
import {FASwitch} from '../../../../src/Components/Atoms/FASwitch'
import {IFASwitch} from '../../../../src/Components/Atoms/FASwitch/FASwitch.interface'

const story = {
  title: "Switch",
  component: FASwitch,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FASwitch> = (props: IFASwitch) => <FASwitch {...props} />;

export const Default = (props: IFASwitch) => (
  <>
    <FASwitch {...props} />
  </>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
