import { ReactChild } from 'react';
import { FormControlProps } from '@mui/material';

export interface IInput extends FormControlProps {
  testID: `input-${string}`
  label?: string
  adornment?: ReactChild
  adornmentPosition?: 'start' | 'end'
  helperText?: string
  onChange?: any
  value?: any
}
