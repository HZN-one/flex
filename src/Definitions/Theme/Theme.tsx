import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const baseTheme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#DC3931',
      dark: '#B02D27',
      light: '#E3615A',
    },
    secondary: {
      main: '#525252',
      dark: '#262626',
      light: '#737373',
    },
    info: {
      main: '#3A82F6',
      dark: '#629BF8',
      light: '#629BF8',
    },
    error: {
      main: '#F43F5E',
      dark: '#BE123C',
      light: '#FB7185',
    },
    warning: {
      main: '#F59E0B',
      dark: '#B45309',
      light: '#FBBF24',
    },
    success: {
      main: '#22C55E',
      dark: '#15803D',
      light: '#34D399',
    },
    
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
