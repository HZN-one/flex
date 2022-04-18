import React, { memo } from "react";

import Chart from "react-apexcharts";

import type { ApexOptions } from "apexcharts";
import { IFMBarChart } from "./FMBarChart.inteface";

export const FMBarChart = memo((props: IFMBarChart) => {
  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: "inter",
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      enabled: false,
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
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: props.categories,
      min: props.minValue,
      max: props.maxValue,
      tickAmount: props.tickAmount,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        align: "left",
        style: {
          colors: "#221F20",
          fontSize: "12px",
        },
      },
    },
    colors: props.colors,
    ...props.chartOptions,
  };

  const chartData = [
    {
      data: props.chartData,
    },
  ];

  return (
    <>
      <Chart
        data-testid={props.testID}
        options={chartOptions}
        series={chartData}
        type="bar"
        width={props.width}
        height={props.height}
      />
    </>
  );
});
FMBarChart.displayName = "FMBarChart";
