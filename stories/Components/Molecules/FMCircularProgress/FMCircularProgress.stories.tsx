import React from "react";
import { Meta, Story } from "@storybook/react";

import { FMCircularProgress } from "@Molecules";

import { IFMCircularProgressProps } from "@Molecules/FMCircularProgress/FMCircularProgress.interface";

const meta: Meta = {
  title: "Molecules/Circular Progress",
  component: FMCircularProgress,
};

export default meta;

const Template: Story<IFMCircularProgressProps> = (
  props: IFMCircularProgressProps
) => <FMCircularProgress {...props} />;

export const Default = Template.bind({});
