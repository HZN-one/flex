import React, { memo } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { IFACheckbox } from './FACheckbox.interface'

export const FACheckbox = memo((props: IFACheckbox) => {
  const { testID, label, ...materialUIProps } = props
  return (
    <FormControlLabel
      control={<Checkbox data-testid={testID} {...materialUIProps} />}
      label={label || ''}
    />
  )
})

FACheckbox.displayName = 'FACheckbox'
