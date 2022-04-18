import React from "react";
import { FMBarChart } from "@Molecules";

import { IFMBarChart } from "@Molecules/FMBarChart/FMBarChart.inteface";

const story = {
  title: "Molecules/Bar Chart",
  component: FMBarChart,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    testID: "bar-chart-storybook",
    chartData: [480, 280, 380, 130, 320],
    categories: ["New", "Assigned", "Confirmed", "Rejected", "Completed"],
    colors: ["#629BF8", "#4ED17E", "#818CF8", "#FB7185", "#4ED17E"],
    minValue: 0,
    maxValue: 600,
    height: 279,
    tickAmount: 12,
  } as IFMBarChart,
};

export default story;

export const Default = (props: IFMBarChart) => {
  return (
    <>
      <FMBarChart {...props} />
    </>
  );
};
