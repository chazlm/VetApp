import React, { createContext, useContext } from "react";

const theme = {
  colors: {
    primary: "rgb(111 219 111)",
    light: "rgb(184 229 184))",
    supalight: "rgb(205 225 205)",
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
  tabHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "#2d9cdb",
    textDecorationLine: "underline",
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
