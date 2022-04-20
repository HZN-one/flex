import { ApexOptions } from "apexcharts";

export interface IFMBarChart {
  testID: `bar-chart-${string}`;
  chartOptions?: ApexOptions;
  width?: string | number;
  height?: string | number;
  categories: string[];
  colors?: string[];
  chartData: number[];
  minValue?: number;
  maxValue?: number;
  tickAmount?: number;
}
