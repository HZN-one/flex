import { ChipProps } from '@mui/material'

export interface IFAChip extends ChipProps {
  label?: string
  testID: `chip-${string}`
  avatar?: any
  deleteable?: boolean
}
