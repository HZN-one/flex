import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import { FAButton } from "@Atoms/FAButton";
import { FMStepper } from "@Molecules";
import { IFMStepperProps } from "@Molecules/FMStepper/FMStepper.interface";

const meta: Meta = {
  title: "Molecules/Stepper",
  component: FMStepper,
};

export default meta;

const Template: Story<IFMStepperProps> = props => <FMStepper {...props} />;

export const Default = Template.bind({});

Default.args = {
  testID: "stepper-test",
  stepperColumn: 8,
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
    {
      title: "Title 3",
      children: "Description 3",
      buttonLabel: "Next",
      onSubmitBack: () => {
        console.log("onSubmitBack");
      },
      onSubmitNext: () => {
        console.log("onSubmitNext");
      },
    },
    {
      title: "Title 4",
      children: "Description 4",
      buttonLabel: "Submit",
      onSubmitBack: () => {
        console.log("onSubmitBack");
      },
      onSubmitNext: () => {
        console.log("onSubmitNext");
      },
    },
  ],
};

export const Controlled = Template.bind({});

Controlled.args = {
  testID: "stepper-test",
  isControlled: true,
  stepperColumn: 8,
  data: [
    {
      title: "Title 1",
      children: "Description 1",
      buttonLabel: "Next",
      onSubmitBack: ({ setActiveStep, activeStep }) => {
        console.log("onSubmitBack");
        setActiveStep(activeStep - 1);
      },
      onSubmitNext: ({ setActiveStep, activeStep }) => {
        console.log("onSubmitNext");
        setActiveStep(activeStep + 1);
      },
    },
    {
      title: "Title 2",
      children: "Description 2",
      buttonLabel: "Submit",
      onSubmitBack: ({ setActiveStep, activeStep }) => {
        setActiveStep(activeStep - 1);
        console.log("onSubmitBack");
      },
      onSubmitNext: ({ activeStep, setActiveStep }) => {
        setActiveStep(activeStep + 1);
        console.log("onSubmitNext");
      },
    },
  ],
  onSubmitFinish: () => alert("Submitted"),
};

export const Test = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {JSON.stringify(activeStep)}
      <FMStepper
        testID="stepper-test"
        data={[{ title: "test" }, { title: "test2" }]}
        stepperColumn={12}
        active={activeStep}
      />
      <FAButton
        testID="button-back"
        onClick={() => setActiveStep(prevActiveStep => prevActiveStep - 1)}
      >
        Back
      </FAButton>
      <FAButton
        testID="button-next"
        onClick={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}
      >
        Next
      </FAButton>
    </>
  );
};
