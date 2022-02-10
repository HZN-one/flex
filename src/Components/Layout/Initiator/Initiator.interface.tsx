import { HTMLAttributes, ReactChild } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  replaceTheme?: {
    typography?: {
      fontFamily?: string;
    };
    palette?: {
      primary?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      secondary?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      info?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      error?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      warning?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      success?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      action: {
        main?: string;
        hover?: string;
        selected?: string;
      };
      grey?: {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
      };
      bluegrey?: {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
      };
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold?: number;
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset?: number;
    };
  };
}
