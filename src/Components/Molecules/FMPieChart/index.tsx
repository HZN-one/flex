import React, { memo, Suspense } from "react";
import { ApexOptions } from "apexcharts";

import { IFMPieChart } from "./FMPieChart.interface";

const Chart = React.lazy(() => import("react-apexcharts"));

export const FMPieChart = memo((props: IFMPieChart) => {
  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      fontFamily: "inter",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
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
    legend: {
      showForNullSeries: true,
      showForSingleSeries: true,
      showForZeroSeries: true,
      position: "right",
      labels: {
        colors: "#221F20",
      },
      fontSize: "12px",
      fontFamily: "inter",
      offsetY: -17,
      itemMargin: {
        vertical: 3.3,
      },
      markers: {
        offsetX: -8,
        offsetY: 1,
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
    labels: props.labels,
    colors: props.colors,
    ...props.chartOptions,
  };

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Chart
        data-testid={props.testID}
        options={chartOptions}
        series={props.chartData}
        type="pie"
        width={props.width}
        height={props.height}
      />
    </Suspense>
  );
});
FMPieChart.displayName = "FMPieChart";
