import React from "react";
import { ComponentStory } from '@storybook/react';
import {FATooltip} from '../../../../src/Components/Atoms/FATooltip'
import {IFATooltip} from '../../../../src/Components/Atoms/FATooltip/FATooltip.interface'

const story = {
  title: "Tooltip",
  component: FATooltip,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FATooltip> = (props: IFATooltip) => <FATooltip {...props} />;

export const Default = (props: IFATooltip) => (
  <>
    <FATooltip {...props} />
  </>
);

// export const WithLabel = Template.bind({});
// WithLabel.args = {
//   label: 'Label'
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small'
// };
