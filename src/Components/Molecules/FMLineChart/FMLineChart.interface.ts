import type { ApexOptions } from "apexcharts";

export interface IFMLineChart {
  testID: `line-chart-${string}`;
  chartData: ApexOptions["series"];
  chartOptions?: ApexOptions;
  width?: string | number;
  height?: string | number;
}
