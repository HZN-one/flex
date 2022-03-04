import React from "react";
import { Story, Meta } from "@storybook/react";

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

Controlled.decorators = [
  StoryDecoractors => {
    const [stepperActiveStep, setStepperActiveStep] = React.useState(0);

    const handleNextStep = () => {
      setStepperActiveStep(prevStepperActiveStep => prevStepperActiveStep + 1);
    };

    return (
      <>
        {StoryDecoractors({
          args: {
            testID: "stepper-controlled",
            stepperColumn: 8,
            stepperActiveStep,
            finishButtonLabel: "Submit Finish Button",
            onSubmitFinish: () => alert("Finish button clicked"),
            data: [
              {
                title: "Title 1",
                children: "Description 1",
                buttonLabel: "Next",
                onSubmitNext: () => handleNextStep(),
              },
              {
                title: "Title 2",
                children: "Description 2",
                buttonLabel: "Next",
                onSubmitBack: () =>
                  setStepperActiveStep(
                    prevStepperActiveStep => prevStepperActiveStep - 1
                  ),
                onSubmitNext: () => handleNextStep(),
              },
            ],
          },
        })}
      </>
    );
  },
];
