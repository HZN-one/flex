import React from "react";
import { Meta, Story } from "@storybook/react";

import FOCardWithStepper from "@Organisms/FOCardWithStepper";
import { IFOCardWithStepperProps } from "@Organisms/FOCardWithStepper/FOCardWithStepper.interface";

const meta: Meta = {
  title: "Molecules/Card With Stepper",
  component: FOCardWithStepper,
};

export default meta;

const Template: Story<IFOCardWithStepperProps> = props => (
  <FOCardWithStepper {...props} />
);

export const Default = Template.bind({});

Default.args = {
  cardProps: {
    title: "Hello World",
  },
  stepperProps: {
    data: [
      {
        title: "Title 1",
        children: "Description 1",
        buttonLabel: "Next",
        onSubmitBack: () => {
          console.log("onSubmitBack");
        },
        onSubmitNext: () => {
          console.log("onSubmitNext");
        },
      },
      {
        title: "Title 2",
        children: "Description 2",
        buttonLabel: "Next",
        onSubmitBack: () => {
          console.log("onSubmitBack");
        },
        onSubmitNext: () => {
          console.log("onSubmitNext");
        },
      },
    ],
    stepperColumn: 8,
  },
};
