import React from "react";
import { FMLineChart } from "@Molecules";
import { IFMLineChart } from "@Molecules/FMLineChart/FMLineChart.interface";

const story = {
  title: "Molecules/Line Chart",
  component: FMLineChart,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    testID: "line-chart-storybook",
    minValue: 0,
    maxValue: 2000,
    tickAmount: 10,
    height: 457,
    chartData: [
      {
        name: "Order",
        color: "#DC3931",
        data: [
          { x: "1/10", y: 500 },
          { x: "2/10", y: 800 },
          { x: "3/10", y: 700 },
          { x: "4/10", y: 400 },
          { x: "5/10", y: 820 },
          { x: "6/10", y: 1000 },
          { x: "7/10", y: 1500 },
        ],
      },
    ],
  } as IFMLineChart,
};

export default story;

export const Default = (props: IFMLineChart) => {
  return (
    <>
      <FMLineChart {...props} />
    </>
  );
};
