import { PaginationProps } from '@mui/material';

export interface IFABasePagination extends PaginationProps {
  label?: string
  testID: `pagination-${string}`
}
