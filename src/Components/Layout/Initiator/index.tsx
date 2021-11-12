import React, { FC } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Props } from './Initiator.interface'

import { baseTheme } from '../../..'

export const ThemeProviderWrapper: FC<Props> = ({ children, replaceTheme }) => {
  return (
    <ThemeProvider theme={replaceTheme ? replaceTheme : baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
