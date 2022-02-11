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
  interface TypographyVariants {
    subtitle: React.CSSProperties;
    subtitleBold: React.CSSProperties;
    bodySemiBold1: React.CSSProperties;
    bodySemiBold2: React.CSSProperties;
    buttonBold: React.CSSProperties;
    buttonSemiBold: React.CSSProperties;
    captionSemiBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle: React.CSSProperties;
    subtitleBold: React.CSSProperties;
    bodySemiBold1: React.CSSProperties;
    bodySemiBold2: React.CSSProperties;
    buttonBold: React.CSSProperties;
    buttonSemiBold: React.CSSProperties;
    captionSemiBold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    subtitleBold: true;
    bodySemiBold1: true;
    bodySemiBold2: true;
    buttonBold: true;
    buttonSemiBold: true;
    captionSemiBold: true;
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
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.MuiInput-root.Mui-disabled": {
              ":before": {
                borderBottomStyle: "solid",
              },
            },
            fontSize: "14px",
            "& > label > span": {
              color: "red",
            },
            "& > label": {
              color: "#221F20",
              fontWeight: 600,
              letterSpacing: "0.2px",
            },
            ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              fontSize: "14px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            ".MuiSelect-select.MuiSelect-select": {
              fontSize: "14px",
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& > label > span": {
              color: "red",
            },
            ".MuiInput-input": {
              fontSize: "14px",
              padding: "6px 0px 12px 0px",
            },
            ".MuiSelect-nativeInput": {
              border: "1px solid red",
              color: "red",
            },
            ".css-1dyt4r5-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
              {
                fontSize: "14px",
              },
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
        lineHeight: 1,
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      h6: {
        fontSize: "1.125rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      subtitle: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1,
      },
      subtitleBold: {
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "24px",
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "21px",
      },
      bodySemiBold1: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "24px",
      },
      bodySemiBold2: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: "21px",
      },
      buttonBold: {
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      buttonSemiBold: {
        fontSize: "0.875rem",
        fontWeight: 700,
        lineHeight: 1,
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1,
      },
      captionSemiBold: {
        fontSize: "0.75rem",
        fontWeight: 600,
        lineHeight: "19.2px",
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 700,
        lineHeight: 1,
      },
    },
    palette: {
      primary: {
        main: "#DC3931",
        dark: "#B02D27",
        light: "#E3615A",
      },
      secondary: {
        main: "#525252",
        dark: "#262626",
        light: "#737373",
      },
      info: {
        main: "#3A82F6",
        dark: "#1E4ED8",
        light: "#629BF8",
      },
      error: {
        main: "#F43F5E",
        dark: "#BE123C",
        light: "#FB7185",
      },
      warning: {
        main: "#F59E0B",
        dark: "#B45309",
        light: "#FBBF24",
      },
      success: {
        main: "#22C55E",
        dark: "#15803D",
        light: "#34D399",
      },
      grey: {
        "50": "#FAFAFA",
        "100": "#F5F5F5",
        "200": "#E5E5E5",
        "300": "#D4D4D4",
        "400": "#A3A3A3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717",
      },
      bluegrey: {
        "50": "#F8FAFC",
        "100": "#F1F5F9",
        "200": "#E2E8F0",
        "300": "#CBD5E1",
        "400": "#94A3B8",
        "500": "#64748B",
        "600": "#475569",
        "700": "#334155",
        "800": "#1E293B",
        "900": "#0F172A",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
