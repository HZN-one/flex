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
    chartData: [
      {
        name: "Gojek",
        color: "#7BC67E",
        data: [
          { x: "1/31", y: 31 },
          { x: "2/31", y: 40 },
          { x: "3/31", y: 28 },
          { x: "4/31", y: 51 },
          { x: "5/31", y: 109 },
          { x: "6/31", y: 31 },
          { x: "7/31", y: 40 },
          { x: "8/31", y: 28 },
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
