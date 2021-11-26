import { ReactChild } from 'react'
import { StandardTextFieldProps } from '@mui/material'

export interface IInput extends StandardTextFieldProps {
  testID: `input-${string}`
  label?: string
  adornment?: ReactChild
  adornmentPosition?: 'start' | 'end'
  helperText?: string
  onChange?: any
  value?: any
  variants?: 'standard' | 'outlined' | 'filled'
  type?: string
  disabled?: boolean
}
