import React from "react";
import { Meta, Story } from "@storybook/react";

import { FMMapsTextField } from "@Molecules/FMMapsTextField";

import { IFMMapsTextField } from "@Molecules/FMMapsTextField/FMMapsTextField.interface";

const meta: Meta = {
  title: "Molecules/Maps Text Field",
  component: FMMapsTextField,
};

export default meta;

const Template: Story<IFMMapsTextField> = props => (
  <FMMapsTextField {...props} />
);

export const Default = Template.bind({});

Default.args = {
  label: "Origin Address",
  required: true,
  buttonLabel: "Choose Location",
  buttonIconName: "location_on",
  placeholder: "Origin Address",
};
