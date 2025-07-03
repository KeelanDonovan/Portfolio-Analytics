"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Light pink
    },
    background: {
      default: "#1a1a1a", // Dark background
      paper: "#313236", // Dark paper
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
