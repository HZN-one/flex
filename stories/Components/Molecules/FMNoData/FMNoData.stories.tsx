import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box } from "@mui/material";
import { FMNoData } from "@Molecules";
import { IFMNoDataProps } from "@Molecules/FMNoData/FMNoData.interface";

const meta: Meta = {
  title: "Molecules/No Data",
  component: FMNoData,
};

export default meta;

const Template: Story<IFMNoDataProps> = props => (
  <FMNoData {...props}>
    <Box sx={{ mb: 1 }}>Don’t worry! all order has completely assigned..</Box>
    Now you don’t have any unassigned order from customer.
  </FMNoData>
);

export const Default = Template.bind({});

Default.args = {
  testID: "no-data-test",
};
