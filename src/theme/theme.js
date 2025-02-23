import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6600",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2B2D42",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
