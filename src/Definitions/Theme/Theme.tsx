import { createTheme } from "@mui/material/styles";
import { ThemeProps } from "./Theme.interface";

const drawerWidth = 250;

declare module "@mui/material/styles" {
  interface Palette {
    bluegrey: Palette["grey"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    bluegrey?: PaletteOptions["grey"];
  }
}

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
      MuiTextField: {
        styleOverrides: {
          root: {
            fontSize: "14px",
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
      grey: {
        "50": props.replaceTheme?.palette?.grey?.[50] ?? "#FAFAFA",
        "100": props.replaceTheme?.palette?.grey?.[100] ?? "#F5F5F5",
        "200": props.replaceTheme?.palette?.grey?.[200] ?? "#E5E5E5",
        "300": props.replaceTheme?.palette?.grey?.[300] ?? "#D4D4D4",
        "400": props.replaceTheme?.palette?.grey?.[400] ?? "#A3A3A3",
        "500": props.replaceTheme?.palette?.grey?.[500] ?? "#737373",
        "600": props.replaceTheme?.palette?.grey?.[600] ?? "#525252",
        "700": props.replaceTheme?.palette?.grey?.[700] ?? "#404040",
        "800": props.replaceTheme?.palette?.grey?.[800] ?? "#262626",
        "900": props.replaceTheme?.palette?.grey?.[900] ?? "#171717",
      },
      bluegrey: {
        "50": props.replaceTheme?.palette?.bluegrey?.[50] ?? "#F8FAFC",
        "100": props.replaceTheme?.palette?.bluegrey?.[100] ?? "#F1F5F9",
        "200": props.replaceTheme?.palette?.bluegrey?.[200] ?? "#E2E8F0",
        "300": props.replaceTheme?.palette?.bluegrey?.[300] ?? "#CBD5E1",
        "400": props.replaceTheme?.palette?.bluegrey?.[400] ?? "#94A3B8",
        "500": props.replaceTheme?.palette?.bluegrey?.[500] ?? "#64748B",
        "600": props.replaceTheme?.palette?.bluegrey?.[600] ?? "#475569",
        "700": props.replaceTheme?.palette?.bluegrey?.[700] ?? "#334155",
        "800": props.replaceTheme?.palette?.bluegrey?.[800] ?? "#1E293B",
        "900": props.replaceTheme?.palette?.bluegrey?.[900] ?? "#0F172A",
      },
      contrastThreshold: props.replaceTheme?.palette?.contrastThreshold || 3,
      tonalOffset: props.replaceTheme?.palette?.tonalOffset || 0.2,
    },
  });
