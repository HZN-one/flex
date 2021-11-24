import React from "react";
import { ComponentStory } from '@storybook/react';
import {FAChip} from '../../../../src/Components/Atoms/FAChip'
import {IFAChip} from '../../../../src/Components/Atoms/FAChip/FAChip.interface'

const story = {
  title: "Chip",
  component: FAChip,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FAChip> = (props: IFAChip) => (
  <>
    <FAChip color='default' {...props} sx={{marginRight: '1vw', marginBottom: '1vh'}} />
    <FAChip color='primary' {...props} sx={{marginRight: '1vw', marginBottom: '1vh'}} />
    <FAChip color='secondary' {...props} sx={{marginRight: '1vw', marginBottom: '1vh'}} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label'
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  label: 'Label',
  avatar: 'F'
};

export const Deleteable = Template.bind({});
Deleteable.args = {
  label: 'Label',
  avatar: 'F',
  deleteable: true
};