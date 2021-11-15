import { ReactChild } from 'react';
import { FormControlProps } from '@mui/material';

export interface IFormInput extends FormControlProps {
  testID: `input-${string}`
  type?: 'text' | 'select' | string
  label?: string
  helperText?: string
  onChange?: any
  value?: any
  MenuItems?: { value: any, name: any }[]
  adornment?: ReactChild
  adornmentPosition?: 'start' | 'end'
}
