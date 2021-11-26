import React, { memo } from 'react'
import {
  FormControl,
  Select,
  InputAdornment,
  FormHelperText,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { ISelectInput } from './FMSelect.interfaces'
import { InputLabel } from '@mui/material'

export const FMSelect = memo((props: ISelectInput) => {
  const {
    MenuItems,
    size,
    testID,
    value,
    label,
    adornment,
    adornmentPosition,
    helperText,
    onChange,
    ...materialUIProps
  } = props

  const AddAdornment = () => {
    return <InputAdornment position="start">{adornment}</InputAdornment>
  }

  const startAdornment =
    adornment && adornmentPosition === 'start' ? AddAdornment() : null

  return (
    <FormControl sx={{ minWidth: 130 }} variant="outlined" data-testid={testID}>
      <InputLabel id="demo-customized-select-label">{label}</InputLabel>
      <Select
        {...materialUIProps}
        label={label}
        size={size || 'medium'}
        id="demo-simple-select-standard"
        startAdornment={startAdornment}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {MenuItems && MenuItems?.length > 0
          ? MenuItems.map((oneMenuItem, i) => {
              return (
                <MenuItem key={i} value={oneMenuItem.value}>
                  {oneMenuItem.name}
                </MenuItem>
              )
            })
          : null}
      </Select>
      <FormHelperText id="component-error-text" error>
        {helperText}
      </FormHelperText>
    </FormControl>
  )
})

FMSelect.displayName = 'FMSelect'
