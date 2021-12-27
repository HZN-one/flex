import React from "react";
import { ComponentStory } from "@storybook/react";
import { FARadio, FAFormControlLabel } from "@Atoms";
import { IFARadio } from "@Atoms/FARadio/FARadio.interface";
import { IFAFormControlLabel } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interfaces";

const story = {
  title: "Atom/Radio",
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
    <FARadio {...props} disabled />
    <FARadio {...props} checked color="primary" />
    <FARadio {...props} checked color="secondary" />
    <FARadio {...props} checked color="success" />
    <FARadio {...props} checked color="warning" />
    <FARadio {...props} checked color="error" />
    <FARadio {...props} checked color="info" />
  </>
);

export const Default = (props: IFARadio) => (
  <>
    <FARadio {...props} />
    <FARadio {...props} disabled />
  </>
);

export const WithLabel = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="test"
      testID="ControlLabel-test"
      control={<FARadio testID="radio-test" />}
    />
  </>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
