import { PaginationProps } from "@mui/material";

export interface IFAPagination extends PaginationProps {
  testID: `pagination-${string}`;
  count: number;
}
