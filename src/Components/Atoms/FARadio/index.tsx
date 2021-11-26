import React, { memo } from 'react'
import { Radio, FormControlLabel } from '@mui/material'
import { IFARadio } from './FARadio.interface'

export const FARadio = memo((props: IFARadio) => {
  const { testID, label, ...materialUIProps } = props
  return (
    <FormControlLabel
      control={<Radio data-testid={testID} {...materialUIProps} />}
      label={label || ''}
    />
  )
})

FARadio.displayName = 'FARadio'
