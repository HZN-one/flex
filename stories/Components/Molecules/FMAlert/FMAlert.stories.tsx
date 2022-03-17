// Create story FMAlert
import React from "react";
import { Meta, Story } from "@storybook/react";

import { FMAlert } from "@Molecules";
import { IFMAlertProps } from "@Molecules/FMAlert/FMAlert.interface";

const meta: Meta = {
  title: "Molecules/Alert",
  component: FMAlert,
};

export default meta;

const Template: Story<IFMAlertProps> = (props: IFMAlertProps) => (
  <FMAlert severity="error" color="warning" onClose={() => {}} {...props} />
);

export const Default = Template.bind({});

Default.args = {
  title: "We’re currently reviewing your account.",
  children: <span>Please wait for a moment for your approval status.</span>,
};
