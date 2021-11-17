import React from "react";
import { ComponentStory } from '@storybook/react';
import {FACheckbox} from '../../../../src/Components/Atoms/FACheckbox'
import {IFACheckbox} from '../../../../src/Components/Atoms/FACheckbox/FACheckbox.interface'

const story = {
  title: "Checkbox",
  component: FACheckbox,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FACheckbox> = (props: IFACheckbox) => <FACheckbox {...props} />;

export const Default = (props: IFACheckbox) => (
  <>
    <FACheckbox {...props} />
  </>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label'
};
