import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  handleDarkMode: () => void;
}
interface childrenType {
  children: JSX.Element;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useDarkMode = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used in theme provider");
  }
  return themeContext;
};

//Wrapper Component to pass the context to child components
export const DarkModeThemeProvider: React.FC<childrenType> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const persistTheme = window.localStorage.getItem("darkMode");
    persistTheme &&
      console.log(
        "persistTheme",
        persistTheme,
        "parse",
        JSON.parse(persistTheme)
      );
    persistTheme && setDarkMode(JSON.parse(persistTheme));
  }, []);

  const handleDarkMode = () => {
    window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const themeContextValue: ThemeContextType = {
    darkMode,
    handleDarkMode,
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
