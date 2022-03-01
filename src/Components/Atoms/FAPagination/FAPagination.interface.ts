import { PaginationProps } from "@mui/material";

export interface IFAPaginationProps extends PaginationProps {
  testID: `pagination-${string}`;
  count: number;
  size: "large" | "small";
}
