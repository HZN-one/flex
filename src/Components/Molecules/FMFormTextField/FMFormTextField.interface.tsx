import { ReactChild } from 'react';
import { OutlinedTextFieldProps } from '@mui/material';

export interface IFMFormTextField extends OutlinedTextFieldProps {
  testID: `input-${string}`
  type?: 'text' | 'select' | string
  label?: string
  helperText?: string
  onChange?: any
  value?: any
  MenuItems?: { value: any, name: any }[]
  adornment?: ReactChild
  adornmentPosition?: 'start' | 'end'
  placeholder?: string
}
