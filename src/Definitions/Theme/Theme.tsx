import { createTheme } from "@mui/material/styles";
import { ThemeProps } from "./Theme.interface";

const drawerWidth = 250;

// Create a theme instance.
export const baseTheme = (props: ThemeProps) =>
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiDrawer: props.components?.MuiDrawer || {
        styleOverrides: {
          root: {
            position: "relative",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          },
        },
      },
    },
    typography: {
      fontFamily: props.replaceTheme?.typography?.fontFamily || "Inter",
      htmlFontSize: 16,
      fontSize: 14,
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 700,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 700,
      },
      h6: {
        fontSize: "1.125rem",
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "1rem",
        fontWeight: 700,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      button: {
        fontSize: "1rem",
        fontWeight: 700,
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 700,
      },
    },
    palette: {
      primary: {
        main: props.replaceTheme?.palette?.primary?.main || "#DC3931",
        dark: props.replaceTheme?.palette?.primary?.main
          ? props.replaceTheme?.palette?.primary?.dark
            ? props.replaceTheme?.palette?.primary?.dark
            : undefined
          : "#B02D27",
        light: props.replaceTheme?.palette?.primary?.main
          ? props.replaceTheme?.palette?.primary?.light
            ? props.replaceTheme?.palette?.primary?.light
            : undefined
          : "#E3615A",
      },
      secondary: {
        main: props.replaceTheme?.palette?.secondary?.main || "#525252",
        dark: props.replaceTheme?.palette?.secondary?.main
          ? props.replaceTheme?.palette?.secondary?.dark
            ? props.replaceTheme?.palette?.secondary?.dark
            : undefined
          : "#262626",
        light: props.replaceTheme?.palette?.secondary?.main
          ? props.replaceTheme?.palette?.secondary?.light
            ? props.replaceTheme?.palette?.secondary?.light
            : undefined
          : "#737373",
      },
      info: {
        main: props.replaceTheme?.palette?.info?.main || "#3A82F6",
        dark: props.replaceTheme?.palette?.info?.main
          ? props.replaceTheme?.palette?.info?.dark
            ? props.replaceTheme?.palette?.info?.dark
            : undefined
          : "#1E4ED8",
        light: props.replaceTheme?.palette?.info?.main
          ? props.replaceTheme?.palette?.info?.light
            ? props.replaceTheme?.palette?.info?.light
            : undefined
          : "#629BF8",
      },
      error: {
        main: props.replaceTheme?.palette?.error?.main || "#F43F5E",
        dark: props.replaceTheme?.palette?.error?.main
          ? props.replaceTheme?.palette?.error?.dark
            ? props.replaceTheme?.palette?.error?.dark
            : undefined
          : "#BE123C",
        light: props.replaceTheme?.palette?.error?.main
          ? props.replaceTheme?.palette?.error?.light
            ? props.replaceTheme?.palette?.error?.light
            : undefined
          : "#FB7185",
      },
      warning: {
        main: props.replaceTheme?.palette?.warning?.main || "#F59E0B",
        dark: props.replaceTheme?.palette?.warning?.main
          ? props.replaceTheme?.palette?.warning?.dark
            ? props.replaceTheme?.palette?.warning?.dark
            : undefined
          : "#B45309",
        light: props.replaceTheme?.palette?.warning?.main
          ? props.replaceTheme?.palette?.warning?.light
            ? props.replaceTheme?.palette?.warning?.light
            : undefined
          : "#FBBF24",
      },
      success: {
        main: props.replaceTheme?.palette?.success?.main || "#22C55E",
        dark: props.replaceTheme?.palette?.success?.main
          ? props.replaceTheme?.palette?.success?.dark
            ? props.replaceTheme?.palette?.success?.dark
            : undefined
          : "#15803D",
        light: props.replaceTheme?.palette?.success?.main
          ? props.replaceTheme?.palette?.success?.light
            ? props.replaceTheme?.palette?.success?.light
            : undefined
          : "#34D399",
      },
      contrastThreshold: props.replaceTheme?.palette?.contrastThreshold || 3,
      tonalOffset: props.replaceTheme?.palette?.tonalOffset || 0.2,
    },
  });
