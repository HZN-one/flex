import React from "react";
import { FMPieChart } from "@Molecules";
import { IFMPieChart } from "@Molecules/FMPieChart/FMPieChart.interface";

const story = {
  title: "Molecules/Pie Chart",
  component: FMPieChart,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    testID: "pie-chart-storybook",
    chartData: [30, 15, 10, 10, 15, 15],
    labels: ["New", "On Going", "Pending", "Completed", "Failed", "Cancel"],
    colors: ["#629BF8", "#FBBF24", "#CBD5E1", "#4ED17E", "#FB7185", "#737373"],
    height: 192,
    width: 324,
  } as IFMPieChart,
};

export default story;

export const Default = (props: IFMPieChart) => {
  return (
    <>
      <FMPieChart {...props} />
    </>
  );
};
