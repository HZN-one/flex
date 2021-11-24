import { TooltipProps } from '@mui/material';
import { HTMLAttributes, ReactChild } from 'react';

export interface IFATooltip extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild
  testID: `tooltip-${string}`
}
