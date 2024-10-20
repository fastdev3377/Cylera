import React, { Dispatch } from "react";
import { ThemeAction } from "../reducers/themes";

interface ThemeContextProps {
  theme: { mode: string };
  setTheme: Dispatch<ThemeAction>;
}

const ThemeContext = React.createContext({
  theme: { mode: "light" },
} as ThemeContextProps);

export default ThemeContext;
