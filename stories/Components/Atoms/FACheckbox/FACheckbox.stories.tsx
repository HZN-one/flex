import React from "react";
import { FACheckbox, FAFormControlLabel } from "Components/Atoms";
import { IFACheckbox } from "Components/Atoms/FACheckbox/FACheckbox.interface";
import { IFAFormControlLabel } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interfaces";

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

export const Default = (props: IFACheckbox) => (
  <>
    <FACheckbox {...props} />
  </>
);

export const WithLabel = (props: IFAFormControlLabel) => (
  <>
    <FAFormControlLabel
      {...props}
      label="test"
      testID="ControlLabel-test"
      control={<FACheckbox testID="checkbox-test" />}
    />
  </>
);
