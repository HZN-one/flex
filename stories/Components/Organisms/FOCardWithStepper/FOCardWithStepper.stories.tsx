import React from "react";
import { Meta, Story } from "@storybook/react";

import { FOCardWithStepper } from "@Organisms/FOCardWithStepper";
import { IFOCardWithStepperProps } from "@Organisms/FOCardWithStepper/FOCardWithStepper.interface";

const meta: Meta = {
  title: "Organisms/Card With Stepper",
  component: FOCardWithStepper,
};

const stepperData = [
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
];

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
    data: stepperData,
    stepperColumn: 8,
  },
};

export const CompleteCardWithStepper = Template.bind({});

CompleteCardWithStepper.args = {
  cardProps: {
    title: "Register",
    titleTypographyVariant: "h3",
    subtitle: (
      <>
        To continue, please register to <strong>Horizon</strong> platform.
      </>
    ),
    subtitleTypographyVariant: "subtitle",
  },
  stepperProps: {
    data: stepperData,
    stepperColumn: 8,
  },
};
