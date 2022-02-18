import React from "react";
import { Story, Meta } from "@storybook/react";
import { FAButton } from "@Atoms";
import { FMStepper } from "@Molecules";
import IFMStepperProps from "@Molecules/FMStepper/FMStepper.interface";

const meta: Meta = {
  title: "Molecules/Stepper",
  component: FMStepper,
};

export default meta;

const Template: Story<IFMStepperProps> = props => <FMStepper {...props} />;

export const Default = Template.bind({});

Default.args = {
  testID: "stepper-test",
  data: [
    {
      title: "Title 1",
      children: "Description 1",
    },
    {
      title: "Title 2",
      children: "Description 2",
    },
    {
      title: "Title 3",
      children: "Description 3",
    },
    {
      title: "Title 4",
      children: "Description 4",
    },
  ],
  buttonSubmit: (
    <FAButton testID="button-test" size="small">
      Submit
    </FAButton>
  ),
};
