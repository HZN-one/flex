import React, { memo, Suspense } from "react";
import { ApexOptions } from "apexcharts";

import { IFMLineChart } from "./FMLineChart.interface";

const Chart = React.lazy(() => import("react-apexcharts"));

export const FMLineChart = memo((props: IFMLineChart) => {
  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      fontFamily: "inter",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
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
        width: 16,
        height: 2,
        radius: 3,
      },
      labels: {
        colors: "#221F20",
      },
      fontSize: "12px",
      fontFamily: "inter",
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: props.maxValue,
      min: props.minValue,
      tickAmount: props.tickAmount,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    ...props.chartOptions,
  };

  return (
    <Suspense fallback={<div></div>}>
      <Chart
        data-testid={props.testID}
        options={chartOptions}
        series={props.chartData}
        type="line"
        width={props.width}
        height={props.height}
      />
    </Suspense>
  );
});
FMLineChart.displayName = "FMLineChart";
