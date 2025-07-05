import { createTheme } from "@mui/material/styles";

const commonThemeProperties = {
  typography: {
    fontFamily: ["'Inter', sans-serif"].join(","),
    h1: {
      fontFamily: ["'Inter', sans-serif"].join(","),
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    button: {
      fontWeight: 600,
      fontSize: "0.875rem",
      textTransform: "none",
      letterSpacing: "0.028em",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          transition: "all 0.2s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeProperties,
  palette: {
    mode: "light",
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
    primary: {
      main: "#5B21B6",
      light: "#8B5CF6",
      dark: "#4C1D95",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9333EA",
      light: "#C084FC",
      dark: "#7E22CE",
      contrastText: "#FFFFFF",
    },
    divider: "rgba(0, 0, 0, 0.05)",
  },
});

export const darkTheme = createTheme({
  ...commonThemeProperties,
  palette: {
    mode: "dark",
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#6D28D9",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A855F7",
      light: "#C084FC",
      dark: "#9333EA",
      contrastText: "#FFFFFF",
    },
    divider: "rgba(255, 255, 255, 0.05)",
  },
  components: {
    ...commonThemeProperties.components,
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "0 2px 8px rgba(124, 58, 237, 0.3)",
          },
        },
      },
    },
  },
});
