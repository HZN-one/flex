import { ReactChild } from 'react';
import { SelectProps } from '@mui/material';

export interface ISelectInput extends SelectProps {
  testID: `select-${string}`
  type?: 'text' | 'select' | string
  label?: string
  helperText?: string
  onChange?: any
  value?: any
  MenuItems?: { value: any, name: any }[]
  adornment?: ReactChild
  adornmentPosition?: 'start' | 'end'
  placeholder?: string
  size?: 'small' | 'medium'
}
