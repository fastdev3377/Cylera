import React, { useReducer } from "react";
import DashboardHeader from "./components/DashboardHeader";
import NationalityCount from "./components/NationalityChart";
import ThemeContext from "./context/theme-context";
import themeReducer from "./reducers/themes";
import { themes, THEME_TYPE } from "./utils/themes";

function App() {
  const [theme, setTheme] = useReducer(themeReducer, {
    mode: THEME_TYPE.LIGHT,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme.mode}>
        <div className={`${(themes as any)[theme.mode].background}`}>
          <div className="mx-10">
            <DashboardHeader header="SpaceX Mission Dashboard" />
            <NationalityCount />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
