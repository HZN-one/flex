import { createTheme } from '@mui/material/styles'

// Create a theme instance.
export const baseTheme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#DC3939',
      dark: '#DC3931',
      light: '#DC3931',
    },
    secondary: {
      main: '#525252',
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
