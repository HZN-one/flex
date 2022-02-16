import { createTheme, experimental_sx as sx } from "@mui/material/styles";
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
    buttonBold1: React.CSSProperties;
    buttonBold2: React.CSSProperties;
    buttonSemiBold: React.CSSProperties;
    captionSemiBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle: React.CSSProperties;
    subtitleBold: React.CSSProperties;
    bodySemiBold1: React.CSSProperties;
    bodySemiBold2: React.CSSProperties;
    buttonBold1: React.CSSProperties;
    buttonBold2: React.CSSProperties;
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
    buttonBold1: true;
    buttonBold2: true;
    buttonSemiBold: true;
    captionSemiBold: true;
  }
}

// Create a theme instance.
export const baseTheme = createTheme({
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
          "& > label > span": {
            color: "red",
          },
          "& > label": {
            color: "#221F20",
            fontWeight: 600,
            letterSpacing: "0.2px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        sizeSmall: sx({
          // height: "3rem",
          input: {
            py: 1.75,
          },
          fontSize: "14px",
          lineHeight: "20px",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        sizeSmall: {
          fontSize: "14px",
          lineHeight: "20px",
          top: "4px",
          "&.Mui-focused": {
            top: 0,
          },
          "&.MuiInputLabel-shrink": {
            top: 0,
          },
          "&.MuiFormLabel-filled": {
            top: 0,
          },
        },
        standard: {
          fontSize: "14px",
          lineHeight: "21px",
          top: "4px",
          "&.Mui-focused": {
            top: 0,
          },
          "&.MuiInputLabel-shrink": {
            top: 0,
          },
          "&.MuiFormLabel-filled": {
            top: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: sx({
          padding: 3,
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSelect-iconStandard": {
            top: 0,
          },
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        className: "material-icons-outlined",
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: "14px",
          padding: 0,
        },
        root: {
          "&.MuiInput-underline": {
            marginTop: "24px",
            "& .MuiInputBase-input": {
              paddingBottom: "12px",
            },
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          height: "40px",
          width: "40px",
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: "small",
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        outlined: {
          "&.MuiChip-colorDefault": {
            "& .MuiChip-label": {
              color: "#221F20",
            },
            "& .MuiChip-deleteIconColorDefault": {
              color: "#D4D4D4",
            },
          },
          "&.MuiChip-colorPrimary": {
            "& .MuiChip-label": {
              color: "#DC3931",
            },
          },
          "&.MuiChip-colorSecondary": {
            "& .MuiChip-label": {
              color: "#525252",
            },
          },
          "&  .MuiAvatar-root.MuiChip-avatarColorError": {
            color: "#FFFFFF",
            background: "#F43F5E",
          },
          "& .MuiAvatar-root.MuiChip-avatarColorWarning": {
            background: "#F59E0B",
            color: "#FFFFFF",
          },
          "& .MuiAvatar-root.MuiChip-avatarColorInfo": {
            background: "#3B82F6",
            color: "#FFFFFF",
          },
          "& .MuiAvatar-root.MuiChip-avatarColorSuccess": {
            background: "#22C55E",
            color: "#FFFFFF",
          },
        },
        filled: {
          "&.MuiChip-colorDefault": {
            background: "#E5E5E5",
            "& .MuiChip-label": {
              color: "#221F20",
            },
            "& .MuiChip-deleteIconColorDefault": {
              color: "#A3A3A3",
            },
            "& .MuiAvatar-root.MuiChip-avatarColorDefault": {
              background: "#A3A3A3",
            },
          },
          "&.MuiChip-colorError ": {
            background: "#FB7185",
            "& .MuiAvatar-root.MuiChip-avatarColorError": {
              color: "#FFFFFF",
              background: "#F43F5E",
            },
          },
          "&.MuiChip-colorWarning ": {
            background: "#FBBF24",
            "& .MuiAvatar-root.MuiChip-avatarColorWarning": {
              background: "#F59E0B",
              color: "#FFFFFF",
            },
            "& .MuiChip-deleteIconColorWarning": {
              color: "#FFFFFF",
            },
            "& .MuiChip-label": {
              color: "#FFFFFF",
            },
          },
          "&.MuiChip-colorInfo": {
            background: "#629BF8",
            "& .MuiAvatar-root.MuiChip-avatarColorInfo": {
              background: "#3B82F6",
              color: "#FFFFFF",
            },
            "& .MuiChip-deleteIconColorWarning": {
              color: "#FFFFFF",
            },
          },
          "&.MuiChip-colorSuccess": {
            background: "#4ED17E",
            "& .MuiAvatar-root.MuiChip-avatarColorSuccess": {
              background: "#22C55E",
              color: "#FFFFFF",
            },
            "& .MuiChip-deleteIconColorSuccess": {
              color: "#FFFFFF",
            },
            "& .MuiChip-label": {
              color: "#FFFFFF",
            },
          },
        },
        root: {
          padding: "4px 8px",
          height: "auto",
        },
        avatar: sx({
          typography: "caption",
          marginRight: "8px",
          marginLeft: 0,
        }),
        label: sx({
          p: 0,
          m: 0,
        }),
        deleteIcon: sx({
          margin: 0,
        }),
        labelMedium: sx({
          typography: "body1",
        }),
        deleteIconMedium: sx({
          marginLeft: "10px",
        }),
        labelSmall: sx({
          typography: "body2",
        }),
        deleteIconSmall: sx({
          marginLeft: "8px",
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: sx({
          backgroundColor: "#D4D4D4",
          color: "#221F20",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "19.2px",
        }),
        arrow: sx({
          color: "#D4D4D4",
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
        margin: "normal",
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: sx({
          "&.MuiInputBase-inputSizeSmall": {
            py: 1.75,
          },
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        standard: {
          marginBottom: "12px",
          "& .material-icons": {
            fontSize: "20px",
          },
          "& .MuiTypography-root": {
            fontSize: "14px",
            lineHeight: "15px",
          },
        },
        outlined: {
          "&.MuiInputAdornment-outlined.MuiInputAdornment-sizeSmall": {
            "& .material-icons": {
              fontSize: "20px",
            },
            "& .MuiTypography-root": {
              fontSize: "14px",
              lineHeight: "15px",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          lineHeight: "20px",
          margin: 0,
        },
        root: {
          lineHeight: "19.2px",
          marginTop: "8px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: ({ ownerState }) => ({
          ...(ownerState.control.props.size === "small" && {
            fontSize: "0.875rem",
          }),
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& > label > span": {
            color: "red",
          },
          ".MuiSelect-nativeInput": {
            border: "1px solid red",
            color: "red",
          },
        },
      },
    },
    MuiDrawer: {
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
    fontFamily: ['"Inter"', "sans-serif"].join(","),
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
    buttonBold1: {
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    buttonBold2: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    buttonSemiBold: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "19.2px",
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
      dark: "#B02E27",
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
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#22C55E",
      dark: "#15803D",
      light: "#4ED17E",
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
