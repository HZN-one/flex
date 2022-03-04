import { TooltipProps } from "@mui/material";

export interface IFATooltipProps extends TooltipProps {
  testID: `tooltip-${string}`;
  title: string;
}
