import { HTMLAttributes, ReactChild } from 'react'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild
  replaceTheme?: {
    typography?: {
      fontFamily?: string
    }
    palette?: {
      primary?: {
        main?: string
        dark?: string
        light?: string
      }
      secondary?: {
        main?: string
        dark?: string
        light?: string
      }
      info?: {
        main?: string
        dark?: string
        light?: string
      }
      error?: {
        main?: string
        dark?: string
        light?: string
      }
      warning?: {
        main?: string
        dark?: string
        light?: string
      }
      success?: {
        main?: string
        dark?: string
        light?: string
      }
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold?: number
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset?: number
    }
  }
}
