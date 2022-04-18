import type { ApexOptions } from "apexcharts";

export interface IFMPieChart {
  testID: `pie-chart-${string}`;
  chartOptions?: ApexOptions;
  width?: string | number;
  height?: string | number;
  labels: string[];
  colors?: string[];
  chartData: number[];
}
