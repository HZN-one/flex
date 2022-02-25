import React from "react";

import { FACheckbox, FAFormControlLabel } from "@Atoms";
import { IFACheckbox } from "@Atoms/FACheckbox/FACheckbox.interface";
import { IFAFormControlLabel } from "@Atoms/FAFormControlLabel/FAFormControlLabel.interface";

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
      testID="form-control-label-test"
      control={<FACheckbox testID="checkbox-test" />}
    />
  </>
);
