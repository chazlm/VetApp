import React, { createContext, useContext } from "react";

const theme = {
  colors: {
    primary: "rgb(45, 156, 219)",
    light: "rgb(155 199 223)",
    supalight: "rgb(217 241 255)",
    secondary: "#333",
    background: "#f8f8f8",
    text: "#555",
    buttonBackground: "#e0e0e0",
  },
  fonts: {},
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: {
    small: 5,
    medium: 10,
    large: 15,
  },
};

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme || null}>
      {children}
    </ThemeContext.Provider>
  );
};
