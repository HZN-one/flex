import React, { HTMLAttributes, ReactChild } from 'react'
import { baseTheme } from '../../..'
import { createTheme } from '@mui/material/styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild
  replaceTheme?: typeof createTheme
}
