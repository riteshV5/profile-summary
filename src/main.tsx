import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { DarkModeThemeProvider } from "././hooks/DarkModeThemeProvider.tsx";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "white",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <DarkModeThemeProvider>
        <App />
      </DarkModeThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
