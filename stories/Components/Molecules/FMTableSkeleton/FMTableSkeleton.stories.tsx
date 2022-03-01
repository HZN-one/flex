import React from "react";
import { Story, Meta } from "@storybook/react";
import { Table } from "@mui/material";

import { FMTableSkeleton } from "@Molecules";
import { IFMTableSkeletonProps } from "@Molecules/FMTableSkeleton/FMTableSkeleton.interface";

const meta: Meta = {
  title: "Molecules/Table Skeleton",
  component: FMTableSkeleton,
};

export default meta;

const Template: Story<IFMTableSkeletonProps> = props => (
  <Table sx={{ minWidth: 650 }}>
    <FMTableSkeleton {...props} />
  </Table>
);

export const Default = Template.bind({});

Default.args = {
  columns: 5,
  rows: 10,
};
