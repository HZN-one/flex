import 'react-app-polyfill/ie11'
import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'

import {ButtonPegasus} from '../src'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import Button from '@mui/material/Button'

import { baseTheme } from '../src'
import {ThemeProviderWrapper} from '../src'

export const newTheme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#DC3931',
      dark: '#DC3931',
      light: '#DC3931',
    },
    secondary: {
      main: '#DC3931',
      dark: '#262626',
      light: '#737373',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})

console.log(newTheme)

const App = () => {
  const [Number, setNumber] = useState(0)
  return (
    <ThemeProviderWrapper replaceTheme={
      {
        typography: {
          fontFamily: 'Arial'
        },
        palette: {
          primary: {
            main: '#00FF00'
          }
        }
      }
    }>
      <>
        <ButtonPegasus
          // gradientColor="blue"
          variant="contained"
          testID="button-coba"
          color="primary"
          onClick={() => setNumber(Number + 1)}
        >
          Pegasus
        </ButtonPegasus>
        {Number}
        <p>hihahdwdsdaw</p>
      </>
    </ThemeProviderWrapper>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
