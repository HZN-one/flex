import React from "react";
import { ComponentStory } from "@storybook/react";
import { FASwitch, FAFormControlLabel } from "Components/Atoms";
import { IFASwitch } from "Components/Atoms/FASwitch/FASwitch.interface";
import { IFAFormControlLabel } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interfaces";

const story = {
  title: "Atom/Switch",
  component: FASwitch,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FASwitch> = (props: IFASwitch) => (
  <FASwitch {...props} />
);

export const Default = (props: IFASwitch) => (
  <>
    <FASwitch {...props} />
  </>
);

export const WithLabel = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="test"
      testID="ControlLabel-test"
      control={<FASwitch testID="switch-test" />}
    />
  </>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
