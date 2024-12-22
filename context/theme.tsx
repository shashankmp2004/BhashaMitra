import React, { createContext, useContext, useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as DefaultThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { themeColors } from "@/constants/colors";
import { Colors } from "@/types";

type ThemeContextType = Colors & {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const colorScheme = useColorScheme();

  const [colors, setColors] = useState(themeColors.dark); // default light theme
  const [themeName, setThemeName] = useState<"light" | "dark">(
    colorScheme === "dark" ? "dark" : "light"
  );

  function toggleTheme() {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    setColors(themeColors[themeName]);
  }, [themeName]);

  const userContext: ThemeContextType = {
    ...colors,
    toggleTheme,
  };

  return (
    <DefaultThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <ThemeContext.Provider value={userContext}>
        {children}
      </ThemeContext.Provider>
    </DefaultThemeProvider>
  );
} 