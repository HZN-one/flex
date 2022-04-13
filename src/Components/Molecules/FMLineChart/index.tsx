import React, { memo } from "react";

import Chart from "react-apexcharts";

import type { ApexOptions } from "apexcharts";
import { IFMLineChart } from "./FMLineChart.interface";

export const FMLineChart = memo((props: IFMLineChart) => {
  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      size: 6,
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      showForZeroSeries: true,
      showForSingleSeries: true,
      markers: {
        width: 20,
        height: 2,
        radius: 0,
      },
      fontSize: "12px",
      fontFamily: "inter",
    },
    xaxis: {
      type: "category",
    },
    ...props.chartOptions,
  };

  return (
    <>
      <Chart
        data-testid={props.testID}
        options={chartOptions}
        series={props.chartData}
        type="line"
      />
    </>
  );
});
FMLineChart.displayName = "FMLineChart";
