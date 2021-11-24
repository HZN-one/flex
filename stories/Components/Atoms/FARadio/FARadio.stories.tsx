import React from "react";
import { ComponentStory } from '@storybook/react';
import {FARadio} from '../../../../src/Components/Atoms/FARadio'
import {IFARadio} from '../../../../src/Components/Atoms/FARadio/FARadio.interface'

const story = {
  title: "Radio",
  component: FARadio,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FARadio> = (props: IFARadio) => (
  <>
    <FARadio {...props} />
    <FARadio {...props} disabled/>
    <FARadio {...props} checked color='primary' />
    <FARadio {...props} checked color='secondary' />
    <FARadio {...props} checked color='success' />
    <FARadio {...props} checked color='warning' />
    <FARadio {...props} checked color='error' />
    <FARadio {...props} checked color='info' />
  </>
)

export const Default = (props: IFARadio) => (
  <>
    <FARadio {...props} />
    <FARadio {...props} disabled/>
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
