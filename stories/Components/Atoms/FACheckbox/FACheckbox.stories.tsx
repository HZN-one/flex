import React from "react";

import { FACheckbox, FAFormControlLabel } from "@Atoms";
import { IFACheckboxProps } from "@Atoms/FACheckbox/FACheckbox.interface";
import { IFAFormControlLabelProps } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interface";

const story = {
  title: "Atom/Checkbox",
  component: FACheckbox,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

export const Default = (props: IFACheckboxProps) => (
  <>
    <FACheckbox {...props} />
  </>
);

export const WithLabel = (props: IFAFormControlLabelProps) => (
  <>
    <FAFormControlLabel
      {...props}
      label="test"
      testID="form-control-label-test"
      control={<FACheckbox testID="checkbox-test" />}
    />
  </>
);
